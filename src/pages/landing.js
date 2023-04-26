function landing() {
    // landing page wrapper
    const main = document.createElement("div")
    main.id = "landing-page"

    // info div
    const info = document.createElement("div");
    info.id = "info";
    info.innerHTML = `
        <h2>Fundamental data at your fingertips</h2>
        <p>Fundamentalyse provides a comprehensive data repository filled with financial statements from ASX listed companies</p>
        <p><span class="tick"></span>Access to ten years worth of financial statements</p>
        <p><span class="tick"></span>Use standardised metrics or customise your own</p>
        <p><span class="tick"></span>Batch analysis for multiple companies and industrywide analyses</p>
        <p><span class="tick"></span>Separate analyses with different workspaces</p>`;
    main.appendChild(info);

    // image placeholder
    const img = document.createElement("div")
    img.id = "landing-img";
    img.textContent = "Placeholder image";
    main.appendChild(img);

    return main;
}

export default landing;