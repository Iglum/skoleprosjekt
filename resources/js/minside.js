//Denne funksjonen sjekker hvilken bedrift som er innlogget og skriver ut data fra modellen deretter. 

function minside() {
  let html = "";
  let person = "";


  innlogget == "tilbyder" ? person = "Kontaktperson" : person = "Navn";

  html += `
  <div style="background-color: #0B91E5; display: flex;">
  
  <h2 style="width: 100%; display: inline-block; color: white; text-align: center;">Min Side</h2></br>

  </div>
  </br>
    <img src="resources/img/img_avatar.jpg" alt="Avatar" class="avatar center">
    <center><p style="font-size: 35px;">★★★☆</p></center>

    <center>
    <p style="font-size: 20px; margin-left: 10px; margin-right:"><b>${person}:</b> 
    </br>${model.bruker[innloggetBruker][innlogget][person.toLowerCase()]}
    </br>
    `;

  if (innlogget == "tilbyder") {
    html += `
    <b>Firmanavn:</b>  
    </br>${model.bruker[innloggetBruker][innlogget].bedrift}
    </br>
    `
  }

  html += `
  <b>Adresse:</b>
  </br>${model.bruker[innloggetBruker][innlogget].adresse}
    </br>
    `

  if (innlogget == "tilbyder") {
    html += `
    <b>Organisasjonsnummer:</b>
    </br>${model.bruker[innloggetBruker][innlogget].orgnr}
    </br>
    `
  }

  html += `
    <b>Telefon:</b>
    </br>${model.bruker[innloggetBruker][innlogget].tlf}
    </br>
    <b>Email:</b>
    </br>${model.bruker[innloggetBruker][innlogget].email}
    </br>
    </p>
    </center>
    <div style="height: 75px; visibility: hidden;"></div>
    <center><div class="button-group" style="margin-top: 5px;">
    <button onclick='mainHTML.innerHTML = endreProfil()'>Endre Profil</button>
    <button onclick='mainHTML.innerHTML = visHistorikk()'>Historikk</button>
    <button onclick='mainHTML.innerHTML = sendteTilbud()'>Sendte tilbud</button>
    </div></center>
    
    <div style="height: 150px; position: relative;">
    <button onclick="mainHTML.innerHTML = loggInnSide()" style="background-color: red; color: white; padding: 10px; text-decoration: none; border: none; text-align: center; border-radius: 14px; position: absolute; bottom: 0; right: 50%;">Logg ut</button>
    </div>

      `;


  html += `<div style="height: 95px; background-color: blue; clear: both; visibility: hidden;"></div>`

  html += navbar;

  return html;
}
