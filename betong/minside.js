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
    <img src="img_avatar.jpg" alt="Avatar" class="avatar center">
    <center><p style="font-size: 35px;">★★★☆</p></center>

    <center>
    <p style="font-size: 20px; margin-left: 10px; margin-right:"><b>${person}:</b> 
    </br>${model.bruker[innloggetBruker][innlogget][person.toLowerCase()]}
    </br>
    `

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
    <center><div class="button-group" style="margin-top: 5px;">
    <button onclick='mainHTML.innerHTML = endreProfil()'>Endre Profil</button>
    <button onclick='mainHTML.innerHTML = visHistorikk()'>Historikk</button>
    <button onclick='mainHTML.innerHTML = sendteTilbud()'>Sendte tilbud</button>
    </div></center>
    
    <div style="height: 300px; background-color: yellow; text-align: right;">
    <button style="color: blue;">Logg ut</button>
    </div>

      `;
  html += navbar;

  return html;
}

//<div id="kartcontainer">

//PIAS:
//<center><p style="font-size: 35px;">★★★☆</p></center> CHECK
    //<p style="font-size: 20px; margin-left: 10px;"><b>Kontaktperson:</b> CHECK
    //</br>${model.tilbyder[innloggetbedrift].kontaktperson} CHECK
    //</br> CHECK
    //<b>Firmanavn:</b> CHECK
    //</br>${model.tilbyder[innloggetbedrift].bedrift} CHECK
    //</br> CHECK
    //<b>Adresse:</b> CHECK
    //</br>${model.tilbyder[innloggetbedrift].adresse} CHECK
    //</br> CHECK
    //<b>Organisasjonsnr.:</b> CHECK
    //</br>${model.tilbyder[innloggetbedrift].orgnr} CHECK
    //</br> CHECK
    //<b>Telefon:</b>
    //</br>${model.tilbyder[innloggetbedrift].tlf}
    //</br> CHECK
    //<b>Email:</b>
    //</br>${model.tilbyder[innloggetbedrift].email}
    //</p>
    //<center><div class="button-group" style="margin-top: 5px;">
    //  <button onclick='mainHTML.innerHTML = endreprofil()'>Endre Profil</button>
    //  <button onclick='mainHTML.innerHTML = visHistorikk()'>Historikk</button>
    //  <button onclick='mainHTML.innerHTML = sendteTilbud()'>Sendte tilbud</button>
    //</div></center>
