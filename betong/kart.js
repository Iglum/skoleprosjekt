// let mainhtml = document.getElementById("mainContent");
let knappebredde = 90;
let knappehoyde = 58;
let bildehoyde = 640;



let svgkartikon = `
<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.25 13C29.25 7.62125 24.8788 3.25 19.5 3.25C14.1213 3.25 9.75 7.62125 9.75 13C9.75 20.3125 19.5 30.875 19.5 30.875C19.5 30.875 29.25 20.3125 29.25 13ZM16.25 13C16.25 11.2125 17.7125 9.75 19.5 9.75C21.2875 9.75 22.75 11.2125 22.75 13C22.75 14.7875 21.3038 16.25 19.5 16.25C17.7125 16.25 16.25 14.7875 16.25 13ZM8.125 32.5V35.75H30.875V32.5H8.125Z" fill="white"/>
</svg>
`

let svgsokikon = `
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.25 21H22.065L21.645 20.595C23.115 18.885 24 16.665 24 14.25C24 8.865 19.635 4.5 14.25 4.5C8.865 4.5 4.5 8.865 4.5 14.25C4.5 19.635 8.865 24 14.25 24C16.665 24 18.885 23.115 20.595 21.645L21 22.065V23.25L28.5 30.735L30.735 28.5L23.25 21ZM14.25 21C10.515 21 7.5 17.985 7.5 14.25C7.5 10.515 10.515 7.5 14.25 7.5C17.985 7.5 21 10.515 21 14.25C21 17.985 17.985 21 14.25 21Z" fill="white"/>
</svg>
`

let svgmelding = `
<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.8333 3H6.16668C4.47084 3 3.09876 4.35 3.09876 6L3.08334 33L9.25001 27H30.8333C32.5292 27 33.9167 25.65 33.9167 24V6C33.9167 4.35 32.5292 3 30.8333 3ZM27.75 21H9.25001V18H27.75V21ZM27.75 16.5H9.25001V13.5H27.75V16.5ZM27.75 12H9.25001V9H27.75V12Z" fill="white"/>
</svg>
`

let svgminside = `
<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 18C20.7229 18 23.3333 15.315 23.3333 12C23.3333 8.685 20.7229 6 17.5 6C14.2771 6 11.6666 8.685 11.6666 12C11.6666 15.315 14.2771 18 17.5 18ZM17.5 21C13.6062 21 5.83331 23.01 5.83331 27V30H29.1666V27C29.1666 23.01 21.3937 21 17.5 21Z" fill="white"/>
</svg>
`

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
