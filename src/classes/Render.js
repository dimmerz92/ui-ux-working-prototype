class Render {
    constructor() {
        this.DOM = document.getElementsByTagName("main")[0];
    }

    /**
     * @function render
     * @memberof class:Render
     * @param {HTMLElement} content - The content to be rendered
     * @param {string} [target=] - OPTIONAL: a string containing the id of the parent element, defaults to the 'main' tag if no argument given
     */
    render(content, target) {
        target = (!target ? this.DOM : document.getElementById(target));
        target.innerHTML = "";
        target.appendChild(content);
    }
}

export default Render;