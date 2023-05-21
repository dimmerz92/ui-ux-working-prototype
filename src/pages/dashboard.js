import AssetManager from "../classes/AssetManager";
import Render from "../classes/Render";

function dashboard(sessionManager, workspacesJSON) {
    // landing page wrapper
    const main = document.createElement("div")
    main.id = "dashboard-page"

    // search
    const search = document.createElement("div");
    search.id = "dash-search";
    const txtInput = document.createElement("input");
    txtInput.type = "text";
    txtInput.placeholder = "Search for a company (e.g., CBA)";
    search.appendChild(txtInput);    
    main.appendChild(search);

    // ASX chart
    const chart = document.createElement("div");
    chart.id = "dash-chart";
    const chartScript = document.createElement("script");
    chartScript.type = "text/javascript";
    chartScript.src = "https://s3.tradingview.com/tv.js";
    chartScript.onload = function() {
        const chartScript2 = document.createElement("script");
        chartScript2.type = "text/javascript";
        chartScript2.innerHTML = `
            new TradingView.widget(
            {
                "autosize": true,
                "symbol": "ASX:XJO",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": false,
                "container_id": "dash-chart"
            });`;
        chart.appendChild(chartScript2)}
    chart.appendChild(chartScript);
    main.appendChild(chart);

    // workspaces
    const workspaces = document.createElement("div");
    workspaces.id = "dash-workspaces";
    const h2 = document.createElement("h2");
    h2.textContent = "Workspaces";
    workspaces.appendChild(h2);
    const bench = document.createElement("div");
    bench.id = "bench";
    if (workspacesJSON) {
        const cards = AssetManager.buildWorkspaceCards(workspacesJSON);
        for (let i = 0; i < cards.length; i++) {
            bench.appendChild(cards[i]);
        }
    }

    // add new workspace
    const newCard = document.createElement("div");
    newCard.id = "dash-add-workspace";
    newCard.classList.add("card");
    const linkAction = document.createElement("a");
    linkAction.href = "javascript:void(0);";
    linkAction.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.id = "add-workspace-popup";
        const title = document.createElement("input");
        title.id = "new-workspace-title";
        title.type = "text";
        title.placeholder = "Add a name for your new workspace";
        popup.appendChild(title);
        const desc = document.createElement("textarea");
        desc.id = "new-workspace-desc";
        desc.placeholder = "Give your new workspace a short description for easy identification";
        popup.appendChild(desc);
        const buttons = document.createElement("div");
        buttons.id = "new-workspace-buttons";
        const create = document.createElement("button");
        create.id = "workspace-create";
        create.textContent = "Create Workspace";
        buttons.appendChild(create);
        const cancel = document.createElement("button");
        cancel.id = "workspace-cancel";
        cancel.textContent = "Cancel";
        buttons.appendChild(cancel);
        popup.appendChild(buttons);
        Render.append(popup, "main");
    })

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    p1.id = "big-plus";
    p1.textContent = "+";
    div.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = "Add new workspace";
    div.appendChild(p2);
    linkAction.appendChild(div);
    newCard.appendChild(linkAction);
    bench.appendChild(newCard);
    workspaces.appendChild(bench);
    main.appendChild(workspaces);

    return main;
}

export default dashboard;