const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.resolve(__dirname, '..', '.env')});
const express = require('express');
const router = require('./routes/routes');
const googleRouter = require('./routes/google.routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

// Select view engine type which is ejs
app.set('view engine', 'ejs');

// set the views path
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);
app.use('/google', googleRouter);

app.listen('3001', (err) => {
	if (err) {
		console.log("Server can't run on the port 3001 !");
		return ;
	}
	console.log('Server is running at: http://localhost:3001');
});
