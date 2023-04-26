class Render {
    constructor() {
        this.DOM = document.getElementsByTagName("main")[0];
    }
    render(content) {
        this.DOM.innerHTML = "";
        this.DOM.appendChild(content);
    }
}

export default Render;