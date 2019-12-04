// let mainhtml = document.getElementById("mainContent");

function loggInnSide() {
  let html = "";

  html += `<div id="innlogging">
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
    `

  return html;
}
