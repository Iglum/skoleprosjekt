let mainhtml = document.getElementById("mainContent");
let knappebredde = 90;
let knappehoyde = 58;
let bildehoyde = 505;

function kartside(){
    let html = "";

    html += 
    `<div id="kartcontainer">
    <input type="text" style="position: absolute; width: 340px; margin-left: 10px;" value="Søk:"></input>
    <img src="kart.png" style="width: 360px; height: ${bildehoyde}px;"></img>
    <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(0*knappebredde)}px;">0</button>
    <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(1*knappebredde)}px;">1</button>
    <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(2*knappebredde)}px;">2</button>
    <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(3*knappebredde)}px;">3</button>
    </div>
    `
    
    return html;
}

