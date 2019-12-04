// let mainhtml = document.getElementById("mainContent");
let knappebredde = 90;
let knappehoyde = 58;
let bildehoyde = 640;


function kartside(innloggetbedrift){
    let html = "";

    html += 
    `<div id="kartcontainer">
    <input type="text" style="position: absolute; width: 340px; margin-left: 10px;" value="Søk:"></input>
    <img src="kart.png" style="width: 360px; height: ${bildehoyde}px;"></img>
    <button onclick="mainHTML.innerHTML = kartside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(0*knappebredde)}px;">${svgkartikon}</button>
    <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(1*knappebredde)}px;">${svgsokikon}</button>
    <button onclick="mainHTML.innerHTML = meldingsside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(2*knappebredde)}px;">${svgmelding}</button>
    <button onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(3*knappebredde)}px;">${svgminside}</button>
    </div>
    `
    
    return html;
}
