//endre profil

function endreprofil() {
  let html = "";
  // navn: "Martin Brygmann",
  // adresse: "Ryghs vei 23, 0785 Oslo",
  // tlf: ["986 62 319"],
  // email: "martin@brygmann.no"

  let person = "";

  innlogget == "tilbyder" ? person = "Kontaktperson" : person = "Navn";

  html += `
    <div style="background-color: #0B91E5; display: flex;">
    <h2 onclick="mainHTML.innerHTML = minside()" style="width: 100%; display: inline-block; color: white;">Endre Profil</h2></br>
    </div>
    <img src="img_avatar.jpg" alt="Avatar" class="avatar center">
    <div class="wrapper font">
    <center>
    ${person}:
    <input type="text" name="${person}" value="${model.bruker[innloggetBruker][innlogget][person.toLowerCase()]}">
    `

  if (innlogget == "tilbyder") {
    html += `
    Firmanavn:
    <br>
    <input type="text" name="bedrift" value="${model.bruker[innloggetBruker][innlogget].bedrift}"></input>`;
  }

  html += `
    Adresse:
    <br>
    <input type="text" name="adresse" value="${model.bruker[innloggetBruker][innlogget].adresse}">
    `

  if (innlogget == "tilbyder") {
    html += `
      Faktureringsdresse:
    <br>
    <input type="text" name="faktadr" value="${model.bruker[innloggetBruker][innlogget].faktadr}">
    Organisasjonsnr:
    <br>
    <input type="text" name="orgnr" value="${model.bruker[innloggetBruker][innlogget].orgnr}">
    `
  }

  html += `
  Telefon(valgfritt):
  <br>
    <input type="text" name="tlf" value="${model.bruker[innloggetBruker][innlogget].tlf}">
      Email:
    <input type="text" name="email" value="${model.bruker[innloggetBruker][innlogget].email}">
        <br>
</center>

        <div class="btn-group" style="width:90%">
          <button onclick='mainHTML.innerHTML = visHistorikk()' button style="width:50%">PLACEHOLDER TEXT</>
          <button onclick='mainHTML.innerHTML = visHistorikk()' button style="width:50%">PLACEHOLDER TEXT</>
        </div>
        <br>
    
    </div>
        <br>
          `;
      
        html += navbar;
      
        return html;
      }
