class SessionManager {
    constructor() {
        this.loggedIn = false;
    }

    status() {
        return this.loggedIn;
    }

    logIn() {
        this.loggedIn = true;
    };

    logOut() {
        this.loggedIn = false;
    }
}

export default SessionManager;