class Render {
    static DOM = document.getElementsByTagName("main")[0];

    /**
     * @function render
     * @memberof class:Render
     * @param {HTMLElement} content - The content to be rendered
     * @param {string} [target=] - OPTIONAL: a string containing the id of the parent element, defaults to the 'main' tag if no argument given
     */
    static render(content, target) {
        target = (!target ? this.DOM : document.getElementById(target));
        target.innerHTML = "";
        target.appendChild(content);
    }

    static prepend(content, target) {
        const exists = document.getElementById(content.id);
        if (exists != null) {
            document.getElementById(content.id).remove();
        }
        target.prepend(content);
    }
}

export default Render;