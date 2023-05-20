class AssetManager {
    static buildWorkspaceCards(workspaces) {
        const cards = [];
        if (workspaces.cards.length) {
            for (let i = 0; i < workspaces.cards.length; i++) {
                const card = document.createElement("div");
                card.id = workspaces.cards[i].title;
                card.classList.add("card");
                const a = document.createElement("a");
                a.href = "javascript:void(0);";
                const div = document.createElement("div");
                const title = document.createElement("p");
                title.classList.add("card-title");
                title.textContent = workspaces.cards[i].title;
                div.appendChild(title);
                const desc = document.createElement("p");
                desc.textContent = workspaces.cards[i].description;
                div.appendChild(desc);
                a.appendChild(div);
                card.appendChild(a);
                cards.push(card);
            }
        }
        return cards;
    }
}

export default AssetManager;