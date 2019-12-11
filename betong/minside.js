function minside() {
  let html = "";
  let person = "";

  innlogget == "tilbyder" ? person = "Kontaktperson" : person = "Navn";

  html += `
  <div style="background-color: #0B91E5; display: flex;">
  <h2 style="width: 100%; display: inline-block; color: white;">Min Side</h2></br>
  </div>
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
