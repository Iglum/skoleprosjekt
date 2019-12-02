let mainhtml = document.getElementById("mainContent");
let knappebredde = 90;

function kartside(){
    let html = "";

    html += 
    `<div id="kartcontainer">
    <input type="text" style="position: absolute; width: 340px; margin-left: 10px;" value="Søk:"></input>
    <img src="kart.png" style="width: 360px; height: 505px;"></img>
    <button style="width: ${knappebredde}px; display: inline-block; position: absolute; top: 492px; left: ${7+(0*knappebredde)}px;">0</button>
    <button style="width: ${knappebredde}px; display: inline-block; position: absolute; top: 492px; left: ${7+(1*knappebredde)}px;">1</button>
    <button style="width: ${knappebredde}px; display: inline-block; position: absolute; top: 492px; left: ${7+(2*knappebredde)}px;">2</button>
    <button style="width: ${knappebredde}px; display: inline-block; position: absolute; top: 492px; left: ${7+(3*knappebredde)}px;">3</button>
    </div>
    `
    
    return html;
}

