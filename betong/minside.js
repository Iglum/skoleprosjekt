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

    ${person}: 
    ${model.bruker[innloggetBruker][innlogget][person.toLowerCase()]}
    </br>
    `

  if (innlogget == "tilbyder") {
    html += `
    Firmanavn:  
    ${model.bruker[innloggetBruker][innlogget].bedrift}
    </br>
    `
  }

  html += `
  Adresse:
  ${model.bruker[innloggetBruker][innlogget].adresse}
    </br >
    `

  if (innlogget == "tilbyder") {
    html += `
    Orgnr:
  ${model.bruker[innloggetBruker][innlogget].orgnr}
    </br >
    `
  }

  html += `
    Telefon:
  ${model.bruker[innloggetBruker][innlogget].tlf}
    </br >
    Email:
  ${model.bruker[innloggetBruker][innlogget].email}
    </br >
    <button onclick='mainHTML.innerHTML = endreprofil()'>Endre Profil</button>

    <button onclick='mainHTML.innerHTML = visHistorikk()'>Historikk</button>
    <button onclick='mainHTML.innerHTML = sendteTilbud()'>Sendte tilbud</button>

    <div id="kartcontainer">

      `;
  html += navbar;

  return html;
}


//PIAS:
//<center><p style="font-size: 35px;">★★★☆</p></center>
    //<p style="font-size: 20px; margin-left: 10px;"><b>Kontaktperson:</b>
    //</br>${model.tilbyder[innloggetbedrift].kontaktperson}
    //</br> 
    //<b>Firmanavn:</b> 
    //</br>${model.tilbyder[innloggetbedrift].bedrift}
    //</br> 
    //<b>Adresse:</b>
    //</br>${model.tilbyder[innloggetbedrift].adresse}
    //</br>
    //<b>Organisasjonsnr.:</b> 
    //</br>${model.tilbyder[innloggetbedrift].orgnr}
    //</br>
    //<b>Telefon:</b>
    //</br>${model.tilbyder[innloggetbedrift].tlf}
    //</br>
    //<b>Email:</b>
    //</br>${model.tilbyder[innloggetbedrift].email}
    //</p>
    //<center><div class="button-group" style="margin-top: 5px;">
    //  <button onclick='mainHTML.innerHTML = endreprofil()'>Endre Profil</button>
    //  <button onclick='mainHTML.innerHTML = visHistorikk()'>Historikk</button>
    //  <button onclick='mainHTML.innerHTML = sendteTilbud()'>Sendte tilbud</button>
    //</div></center>
