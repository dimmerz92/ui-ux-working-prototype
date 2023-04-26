import Building from '../imgs/building.png';

function progress() {
    // progress div
    const progress = document.createElement("div");
    progress.id = "progress";
    
    // h2
    const h2 = document.createElement("h2");
    h2.textContent = "Oops! Looks like this page isn't ready yet.";
    progress.appendChild(h2);

    //image container
    const imgCont = document.createElement("div");
    imgCont.id = "img-cont";

    // image
    const img = new Image();
    img.src = Building;
    imgCont.appendChild(img);
    progress.appendChild(imgCont);

    return progress;
}

export default progress;