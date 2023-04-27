import Render from "../classes/Render";

function login() {
    // login container
    const container = document.createElement("div");
    container.id = "login-container";
    
    // h2
    const h2 = document.createElement("h2");
    h2.textContent = "Welcome back!";
    container.appendChild(h2);

    // login card
    const card = document.createElement("div");
    card.id = "login-card";

    // form
    const form = document.createElement("form");
    form.innerHTML = `
        <label for="username" class="hidden">Username:</label>
        <input type="text" name="username" id="username" placeholder="Username">
        <label for="password" class="hidden">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password">
        <input type="submit" value="Sign in" id="submit">`;
    form.addEventListener("submit", e => {
        e.preventDefault();
        if (!e.target.children[1].value || !e.target.children[3].value) {
            const err = document.createElement("p");
            err.textContent = "Missing username or password";
            err.id = "login-error";
            Render.prepend(err, document.getElementById("login-card"));
        } else {
            fetch("/login", {
                method: "POST",
                body: new FormData(e.target)
            })
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    console.log(data.status);
                    Handler.render(); ///// ADD HERE DASHBOARD
                } else {
                    const err = document.createElement("p");
                    err.textContent = "Incorrect username or password";
                    err.id = "login-error";
                    Render.prepend(err, document.getElementById("login-card"));
                };
            })
            .catch(error => console.log(error));
        }
    });
    card.appendChild(form);

    // a & p
    const a = document.createElement("a");
    a.href = "javascript:void(0);";
    a.textContent = "here"
    a.addEventListener("click", () => {
        Handler.render(signup());
    });
    const p = document.createElement("p");
    p.innerHTML = `No account? Sign up ${a.outerHTML}!`;
    card.appendChild(p);

    container.appendChild(card);

    return container;
};

export default login;