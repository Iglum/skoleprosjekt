// let mainhtml = document.getElementById("mainContent");




//Denne funksjonene sjekker innlogget bedrift, hvis man ikke er innlogget så vil man få 2 valg, logg inn eller registrer so
function kartside() {

    let html = "";

    html += `
        <center>
        <div id="kartcontainer" class="sticky">
        <input type="text" style="width: 50%;" value="Søk:"></input>
        </div>
        <img src="kart.png" onclick="popupjobb(document.getElementById('popup'))"></img>
        </center>
        `

    if (innloggetBruker!= null && (innloggetBruker).constructor === Number) {
        html += navbar;
    } else {
        html += `
            <button onclick="mainHTML.innerHTML = kartside()" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde * 2}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(0 * knappebredde)}px;">Logg inn</button>
            <button onclick="mainHTML.innerHTML = regBedrift()" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde * 2}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(1 * (knappebredde*2))}px;">Registrer deg</button>
            `
    }

    html+=`
    <div id="popup" style="top: 20%; position: absolute; visibility: hidden; left: 23px; background-color: white; border: 1px solid black">
        <h3>Kjell Nordmann</h3>
        </br>
        <p>Ønsker gulvstøping til garasje</p>
        <p>Dato: 28.02.2020</p>
        </br>
        <button>Se mer info</button>
        <button onclick="popupjobb(document.getElementById('popup'))">Tilbake</button>
     </div>
`

    return html;
}

