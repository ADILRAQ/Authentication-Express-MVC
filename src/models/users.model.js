
class User {

    users;
    instance;

    constructor() {
        console.log('Created !');
        this.users = new Map();
        this.instance = null;
    }

    set(username, password) {
        this.users.set(username, {username, password});
    }

    get(username) {
        return this.users.get(username);
    }

    deleteUser(username) {
        this.users.delete(username);
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new User();
        return this.instance;
    }
}

const instance = Object.freeze(User.getInstance());

module.exports = instance;