import Render from './Render';
import SessionManager from './SessionManager';
import landing from '../pages/landing.js';
import progress from '../pages/progress';
import login from '../pages/login';
import dashboard from '../pages/dashboard';

class Handler {
    constructor() {
        // init objects
        this.session = new SessionManager();
    
        // render landing page
        Render.render(login(this.session));

        // listen to the header links
        document.getElementById("home-link").addEventListener("click", () => {
            this.session.status() ? Render.render(dashboard()) : Render.render(landing());
        });

        document.getElementById("about-link").addEventListener("click", () => {
            Render.render(progress());
        });

        document.getElementById("features-link").addEventListener("click", () => {
            Render.render(progress());
        });

        document.getElementById("help-link").addEventListener("click", () => {
            Render.render(progress());
        });

        document.getElementById("about-link").addEventListener("click", () => {
            Render.render(progress());
        });

        document.getElementById("sign-in-out").addEventListener("click", () => {
            if (this.session.status()) {
                this.session.logOut();
                Render.render(landing());
            } else {
                Render.render(login(this.session));
            }
        });
    }
}

export default Handler;