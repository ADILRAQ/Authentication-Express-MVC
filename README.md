# Authentication Project using MVC architecture

This project is an authentication system built using ExpressJs with both manual and Google authentication options. The project follows the MVC (Model-View-Controller) architecture and uses a Singleton pattern for user storage.

## Features

* __Manual Authentication:__ Users can sign up and log in with a username and password.
* __Google Authentication:__ Users can log in using their Google account.
* __JWT (JSON Web Token):__ Tokens are generated and validated for session management.
* __Singleton Pattern for User Storage:__ Users are stored in a Singleton class, eliminating the need for a database.
* __Middleware:__ Custom middleware checks if a JWT token is still valid. If the token is invalid or expired, the user is redirected to the signup page.
* __Express Routers:__ Used to manage routes for authentication and other parts of the application.

## Project Structure

```
.
├── controllers
│   ├── google.controller.js
|   ├── logout.controller.js
|   ├── signin.controller.js
├── models
│   ├── userSingleton.js
├── routes
│   ├── routes.js
|   ├── google.routes.js
├── views
│   ├── signup.ejs
│   ├── home.ejs
├── middlewares
│   ├── authorization.js
├── utils
|   ├── jwt.sign.js
├── app.js
└── README.md
```
* __controllers:__ Contains the logic for handling requests and responses.
* __models:__ Contains the Singleton class for managing users.
* __views:__ Contains the EJS files for rendering the signup and login pages.
* __routes:__ Contains the route definitions for authentication.
* __middlewares:__ Contains custom middleware for validating JWT tokens.

## Getting Started
### Prerequisites
* Node.js
* npm
### Installation
* Clone the repository:
```
git clone https://github.com/yourusername/authentication-project.git
```
* Navigate to the project directory:

* cd authentication-project
* Install dependencies:
> npm install
* Running the Project, to start the development server, run:

> npm start

### Usage
> Navigate to http://localhost:3000/signup to sign up.

> Navigate to http://localhost:3000/ to go home page.

## Article
* [Explainig MVC](https://araq.notion.site/Explaining-MVC-as-a-story-ExpressJs-ad98772c759d4a5c895133118bf48b18?pvs=4)
