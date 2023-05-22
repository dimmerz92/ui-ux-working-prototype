import AssetManager from "../classes/AssetManager";
import Render from "../classes/Render";

function workspace(sessionManager, title, companiesJSON) {
    // landing page wrapper
    const main = document.createElement("div")
    main.id = "workspace-page"
    const h1 = document.createElement("h1");
    h1.textContent = title + " Workspace";
    main.appendChild(h1);

    // left div
    const left = document.createElement("div");
    left.id = "workspace-left";
    const runButton = document.createElement("button");
    runButton.id = "runReport";
    runButton.classList.add("workspace-button");
    runButton.classList.add("run");
    runButton.textContent = "Run the Report";
    runButton.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.id = "dash-run-report";
        const header = document.createElement("p");
        header.textContent = "Run the report";
        popup.appendChild(header);
        const title = document.createElement("input");
        title.id = "run-report-title";
        title.placeholder = "Give a name to your report";
        popup.appendChild(title);
        const checkboxes = document.createElement("div");
        checkboxes.id = "checkboxes";
        const tables = document.createElement("div");
        tables.id = "tables";
        const tableh = document.createElement("p");
        tableh.textContent = "Generate data tables";
        tables.appendChild(tableh);
        const check = document.createElement("input");
        check.type = "checkbox";
        check.id = "option1";
        const label = document.createElement("label");
        label.htmlFor = "option1";
        label.textContent = "Profitability Ratios";
        label.prepend(check);
        tables.appendChild(label);
        checkboxes.appendChild(tables);
        const graphs = document.createElement("div");
        graphs.id = "graphs";
        const graphsh = document.createElement("p");
        graphsh.textContent = "Generate graphs";
        graphs.appendChild(graphsh);
        const check2 = document.createElement("input");
        check2.type = "checkbox";
        check2.id = "option2";
        const label2 = document.createElement("label");
        label2.htmlFor = "option2";
        label2.textContent = "Profitability Ratios";
        label2.prepend(check2);
        graphs.appendChild(label2);
        checkboxes.appendChild(graphs);
        popup.appendChild(checkboxes);
        const buttons = document.createElement("div");
        buttons.id = "new-report-buttons";
        buttons.classList.add("popup-buttons");
        const create = document.createElement("button");
        create.id = "report-create";
        create.classList.add("popup-buttons-create");
        create.textContent = "Run Report";
        buttons.appendChild(create);
        const cancel = document.createElement("button");
        cancel.id = "report-cancel";
        cancel.classList.add("popup-buttons-cancel")
        cancel.textContent = "Cancel";
        cancel.onclick = function() {
            Render.remove("dash-run-report");
        }
        buttons.appendChild(cancel);
        popup.appendChild(buttons);
        Render.append(popup, "main");
    });

    left.appendChild(runButton);
    const reportsTitle = document.createElement("h3");
    reportsTitle.textContent = "Reports";
    left.appendChild(reportsTitle);
    main.appendChild(left);

    // companies
    const companies = document.createElement("div");
    companies.id = "companies-workspace";
    const companiesh2 = document.createElement("h2");
    companiesh2.textContent = "Companies";
    companies.appendChild(companiesh2);
    const companiesBench = document.createElement("div");
    companiesBench.id = "companiesBench";
    companiesBench.classList.add("bench");
    if (companiesJSON) {
        const cards = AssetManager.buildCompaniesCards(companiesJSON);
        for (let i = 0; i < cards.length; i++) {
            companiesBench.appendChild(cards[i]);
        }
    }

    // add new company
    const newCard = document.createElement("div");
    newCard.id = "dash-add-company";
    newCard.classList.add("card","addNew");
    const linkAction = document.createElement("a");
    linkAction.href = "javascript:void(0);";
    linkAction.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.id = "add-company-popup";
        const header = document.createElement("p");
        header.textContent = "New Company";
        popup.appendChild(header);
        const title = document.createElement("input");
        title.id = "new-company-input";
        title.placeholder = "Search for a company by name or ticker";
        popup.appendChild(title);
        const buttons = document.createElement("div");
        buttons.id = "new-company-buttons";
        buttons.classList.add("popup-buttons");
        const create = document.createElement("button");
        create.id = "company-create";
        create.classList.add("popup-buttons-create");
        create.textContent = "Add Company";
        buttons.appendChild(create);
        const cancel = document.createElement("button");
        cancel.id = "company-cancel";
        cancel.classList.add("popup-buttons-cancel")
        cancel.textContent = "Cancel";
        cancel.onclick = function() {
            Render.remove("add-company-popup");
        }
        buttons.appendChild(cancel);
        popup.appendChild(buttons);
        Render.append(popup, "main");
    });

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    p1.classList.add("big-plus");
    p1.textContent = "+";
    div.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = "Add new company";
    div.appendChild(p2);
    linkAction.appendChild(div);
    newCard.appendChild(linkAction);
    companiesBench.appendChild(newCard);
    companies.appendChild(companiesBench);
    main.appendChild(companies);

    // Analyses
    const analyses = document.createElement("div");
    analyses.id = "analyses-workspace";
    const analysesh2 = document.createElement("h2");
    analysesh2.textContent = "Batched Analyses";
    analyses.appendChild(analysesh2);
    const analysesBench = document.createElement("div");
    analysesBench.id = "companiesBench";
    analysesBench.classList.add("bench");
    if (companiesJSON) {
        const cards = AssetManager.buildAnalysesCards(companiesJSON);
        for (let i = 0; i < cards.length; i++) {
            analysesBench.appendChild(cards[i]);
        }
    }

    // add new analysis
    const newCard2 = document.createElement("div");
    newCard2.id = "dash-add-analysis";
    newCard2.classList.add("card","addNew");
    const linkAction2 = document.createElement("a");
    linkAction2.href = "javascript:void(0);";
    linkAction2.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.id = "add-analysis-popup";
        const header = document.createElement("p");
        header.textContent = "Add Analysis";
        popup.appendChild(header);
        const title = document.createElement("input");
        title.id = "new-analysis-input";
        title.placeholder = "Give a name to your analysis";
        popup.appendChild(title);
        const availAnalysis = document.createElement("select");
        availAnalysis.id = "availAnalysisList";
        availAnalysis.size = 5;
        const chosenAnalysis = document.createElement("select");
        chosenAnalysis.id = "chosenAnalysisList";
        chosenAnalysis.size = 5;
        for (let i = 0; i < 10; i++) {
            const option = document.createElement("option");
            option.value = "Option " + (i + 1);
            option.textContent = "Option " + (i + 1);
            availAnalysis.appendChild(option);
        }
        const div = document.createElement("div");
        div.id = "analysisSelections";
        div.appendChild(availAnalysis);
        const addButton = document.createElement("button");
        addButton.textContent = "Add";
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        const div2 = document.createElement("div");
        div2.id = "analysesButtons";
        div2.appendChild(addButton);
        div2.appendChild(removeButton);
        div.appendChild(div2);
        div.appendChild(chosenAnalysis);
        popup.appendChild(div);
        const buttons = document.createElement("div");
        buttons.id = "new-analysis-buttons";
        buttons.classList.add("popup-buttons");
        const create = document.createElement("button");
        create.id = "analysis-create";
        create.classList.add("popup-buttons-create");
        create.textContent = "Add Analysis";
        buttons.appendChild(create);
        const cancel = document.createElement("button");
        cancel.id = "analysis-cancel";
        cancel.classList.add("popup-buttons-cancel")
        cancel.textContent = "Cancel";
        cancel.onclick = function() {
            Render.remove("add-analysis-popup");
        }
        buttons.appendChild(cancel);
        popup.appendChild(buttons);
        Render.append(popup, "main");
    });

    const div2 = document.createElement("div");
    const p3 = document.createElement("p");
    p3.classList.add("big-plus");
    p3.textContent = "+";
    div2.appendChild(p3);
    const p4 = document.createElement("p");
    p4.textContent = "Add new analysis";
    div2.appendChild(p4);
    linkAction2.appendChild(div2);
    newCard2.appendChild(linkAction2);
    analysesBench.appendChild(newCard2);
    analyses.appendChild(analysesBench);
    main.appendChild(analyses);

    // right div
    const right = document.createElement("div");
    right.id = "workspace-right";
    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteWorkspace";
    deleteButton.classList.add("workspace-button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete Workspace";
    right.appendChild(deleteButton);
    main.appendChild(right);

    return main;
}

export default workspace;