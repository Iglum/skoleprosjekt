// let mainhtml = document.getElementById("mainContent");

function loggInnSide(innloggetbedrift) {
  let html = "";

  html += `<div id="innlogging">
        <center><img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png">
        <br>
        <input value="Epost/telefon"></input>
        <br><br>
        <button onclick="mainHTML.innerHTML = kartside(${innloggetbedrift})">Logg inn</button>
        <br><br>
        <a href="Link">Registrer ny bruker</a>
        <br><br>
        <button onclick="mainHTML.innerHTML = kartside(${innloggetbedrift})">Besøkende</button>
        <button onclick="mainContent.innerHTML = minside(${innloggetbedrift})">Min Side</button>
        
        
    </center>
    </div>
    `;

  return html;
}

// <button onclick="document.getElementById('mainContent').innerHTML = kartside()">Besøkende</button>
