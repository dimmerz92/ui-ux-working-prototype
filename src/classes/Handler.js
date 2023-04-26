import Render from './Render';
import landing from '../pages/landing.js';
import SessionManager from './SessionManager';

class Handler {
    constructor() {
        // init objects
        this.render = new Render();
        this.session = new SessionManager();
    
        // render landing page
        this.render.render(landing());

        // listen to the header links
        document.getElementById("home-link").addEventListener("click", () => {
            this.session.status() ? this.render.render(dashboard()) : this.render.render(landing());
        });

        document.getElementById("about-link").addEventListener("click", () => {
            this.render.render(progress());
        });

        document.getElementById("features-link").addEventListener("click", () => {
            this.render.render(progress());
        });

        document.getElementById("help-link").addEventListener("click", () => {
            this.render.render(progress());
        });

        document.getElementById("about-link").addEventListener("click", () => {
            this.render.render(progress());
        });

        document.getElementById("sign-in-out").addEventListener("click", () => {
            if (this.session.status()) {
                this.session.logOut();
                this.render.render(landing());
            } else {
                this.render.render(login());
            }
        })
    }
}

export default Handler;