// let mainhtml = document.getElementById("mainContent");
//Denne funksjonen/siden har onclicks som gjør at man kommer seg innpå registrering av bedrift, som besøkende som da sender
//- deg til det samme som man gjør når man trykket "logg inn" bare at man da får 2 alternativer LOGG INN eller REGISTRER.
function loggInnSide() {
  let html = "";

    html += `
        
        <div id="innlogging">
        <div style="background-color: #0B91E5; height: 30px"></div>
        <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
        <br>
        <br>
        <br>
        <center>
        <input value="Epost/telefon"></input>
        <br><br>
        <button onclick="mainHTML.innerHTML = kartside(innloggetBedrift)">Logg inn</button>
        <br><br>
        <p onclick="mainHTML.innerHTML = regBedrift()">Registrer ny bruker</p>
        <br>
        <button onclick="mainHTML.innerHTML = kartside()">Besøkende</button>
        </center>
    </div>
    <div style="background-color: #0B91E5; height: 58px; width: 100%; position: absolute; top: ${640-58}px;"></div>
    `
  return html;
}


//<div style="background-color: #0B91E5; height: 58px; top: ${screen.height-this.height};  "></div>