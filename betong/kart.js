// let mainhtml = document.getElementById("mainContent");




function kartside(innloggetbedrift) {
    let html = "";

    html += `
        <div id="kartcontainer" onclick="mainHTML.innerHTML += popupjobb()">
        <input type="text" style="position: absolute; width: 340px; margin-left: 10px;" value="Søk:"></input>
        <img src="kart.png" style="width: 360px; height: ${bildehoyde}px;"></img>
        `

    if (innloggetbedrift!= null && (innloggetbedrift).constructor === Number) {
        html += navbar;
    } else {
        html += `
            <button onclick="mainHTML.innerHTML = kartside(innloggetBedrift)" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde * 2}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(0 * knappebredde)}px;">Logg inn</button>
            <button onclick="mainHTML.innerHTML = regBedrift()" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde * 2}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(1 * (knappebredde*2))}px;">Registrer deg</button>
            `
    }

    return html;
}

