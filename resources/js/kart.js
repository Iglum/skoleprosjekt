// let mainhtml = document.getElementById("mainContent");




//Denne funksjonene sjekker innlogget bedrift, hvis man ikke er innlogget så vil man få 2 valg, logg inn eller registrer so
function kartside() {

    let html = "";

    html += `
        <input type="text" class="sticky" style="width: 50vh; display: inline-block; position: absolute; margin: 0 auto;" value="Søk:"></input>    
        <center>
        <div id="kartcontainer">
        </div>
        <img src="resources/img/kartutengui.png" onclick="popupjobb(document.getElementById('popup'))" style="width: 100vw; height: 100vh; top: 0;"></img>
        </center>
        `

    if (innloggetBruker != null && (innloggetBruker).constructor === Number) {
        html += navbar;
    } else {
        html += `
            <button onclick="popupjobb(document.getElementById('loggInn'))" class="kartknapper navbar" style="display: inline-block; height: 58px; width: 50%;">Logg inn</button>
            <button onclick="mainHTML.innerHTML = regBedrift()" class="kartknapper navbar" style="display: inline-block; height: 58px; width: 50%; left: 50%;">Registrer deg</button>
            `
    }

    html += `
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

    html += `
        <div id="loggInn" style="padding: 15px; top: 60px;; position: absolute; visibility: hidden; background-color: white; border: 1px solid black">
        <input id="innloggInput" type="text" value="post@betongsentrum.no" onclick="tomInput(this)" style="width: 70%"></input>
        </br>
        <input id="passordInput" type="password" value="123" onclick="tomInput(this)" style="width: 70%"></input>
        </br>
        </br>
        <button onclick="loggInn()">Logg inn</button>
        <button onclick="popupjobb(document.getElementById('loggInn'))">Tilbake</button>
        </div>
        
    `

    return html;
}

