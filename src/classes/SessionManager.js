class SessionManager {
    constructor() {
        this.loggedIn = false;
        this.username = false;
    }

    status() {
        return this.loggedIn;
    }

    logIn(username) {
        this.loggedIn = true;
        this.username = username;
    };

    logOut() {
        this.loggedIn = false;
        this.username = false;
    }
}

export default SessionManager;