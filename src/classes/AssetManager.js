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

    static buildCompaniesCards(companies) {
        const cards = [];
        if (companies.companies.length) {
            for (let i = 0; i < companies.companies.length; i++) {
                const card = document.createElement("div");
                card.id = companies.companies[i].ticker;
                card.classList.add("card");
                const title = document.createElement("p");
                title.classList.add("card-title");
                title.textContent = companies.companies[i].name;
                card.appendChild(title);
                const ticker = document.createElement("p");
                ticker.textContent = companies.companies[i].ticker;
                card.appendChild(ticker);
                cards.push(card);
            }
        }
        return cards;
    }

    static buildAnalysesCards(analyses) {
        const cards = [];
        if (analyses.analyses.length) {
            for (let i = 0; i< analyses.analyses.length; i++) {
                const card = document.createElement("div");
                card.classList.add("card");
                const title = document.createElement("p");
                title.classList.add("card-title");
                title.textContent = analyses.analyses[i].title;
                card.appendChild(title);
                const desc = document.createElement("p");
                desc.textContent = analyses.analyses[i].description;
                card.appendChild(desc);
                cards.push(card);
            }
        }
        return cards;
    }
}

export default AssetManager;

