//endre profil-funksjonen gjør det samme som minside. Den sjekker hvilken bedrift som er innlogget og henter ut data
// fra modellen deretter.

function endreprofil() {
  let html = "";
  // navn: "Martin Brygmann",
  // adresse: "Ryghs vei 23, 0785 Oslo",
  // tlf: ["986 62 319"],
  // email: "martin@brygmann.no"

  let person = "";

  innlogget == "tilbyder" ? (person = "Kontaktperson") : (person = "Navn");

  html += `
    <div style="background-color: #0B91E5; display: flex;">

    <h2 onclick="mainHTML.innerHTML = minside()" style="width: 100%; display: inline-block; color: white; text-align: center;">Endre Profil</h2></br>

    </div>
    </br>
    <img src="img_avatar.jpg" alt="Avatar" class="avatar center">
    <div class="wrapper font">
    <center>
    ${person}:
    <input id="endrenavn" type="text" name="${person}" value="${
    model.bruker[innloggetBruker][innlogget][person.toLowerCase()]
  }">
    `;

  if (innlogget == "tilbyder") {
    html += `
    Firmanavn:
    <br>
    <input id="endrebedrift" type="text" name="bedrift" value="${model.bruker[innloggetBruker][innlogget].bedrift}"></input>`;
  }

  html += `
    Adresse:
    <br>
    <input id="endreadresse" type="text" name="adresse" value="${model.bruker[innloggetBruker][innlogget].adresse}">
    `;

  if (innlogget == "tilbyder") {
    html += `
      Faktureringsdresse:
    <br>
    <input id="endrefaktadresse" type="text" name="faktadr" value="${model.bruker[innloggetBruker][innlogget].faktadr}">
    Organisasjonsnr:
    <br>
    <input id="endreorgnr" type="text" name="orgnr" value="${model.bruker[innloggetBruker][innlogget].orgnr}">
    `;
  }

  html += `
  Telefon(valgfritt):
  <br>
    <input id="endretlf" type="text" name="tlf" value="${model.bruker[innloggetBruker][innlogget].tlf}">
      Email:
    <input id="endreemail" type="text" name="email" value="${model.bruker[innloggetBruker][innlogget].email}">
        <br>
        Gammelt passord:
        <br>
        <input type="password" value="${model.bruker[innloggetBruker][innlogget].passord}" id="myInput">
        
<input type="checkbox" onclick="skjulPassord()">Vis Passord</input>
<br>
Nytt passord:
<br>
<input id="endrepassord" type"password" value=""></input>
<br>

           
</center>
<br>


<center><div class="button-group" style="margin: auto;">
<button onclick='lagreEndringer()'>Lagre</button>
<button onclick='mainHTML.innerHTML = minside()'>Avbryt</button>
</div></center>
    

</div>
<br>
<br>
<br>
<br>
`;

  html += navbar;

  return html;
}

function lagreEndringer() {
  let navn = document.getElementById("endrenavn").value;
  let adresse = document.getElementById("endreadresse").value;
  let tlf = document.getElementById("endretlf").value;
  let email = document.getElementById("endreemail").value;
  let passord = document.getElementById("endrepassord").value;

  if (innlogget == "tilbyder") {
    let firmanavn = document.getElementById("endrebedrift").value;
    let faktadresse = document.getElementById("endrefaktadresse").value;
    let orgnr = document.getElementById("endreorgnr").value;

    if (
      navn != "" &&
      adresse != "" &&
      tlf != "" &&
      email != "" &&
      firmanavn != "" &&
      faktadresse != "" &&
      orgnr != ""
    ) {
      model.bruker[innloggetBruker][innlogget].kontaktperson = navn;
      model.bruker[innloggetBruker][innlogget].adresse = adresse;
      model.bruker[innloggetBruker][innlogget].tlf[0] = tlf;
      model.bruker[innloggetBruker][innlogget].email = email;
      model.bruker[innloggetBruker][innlogget].bedrift = firmanavn;
      model.bruker[innloggetBruker][innlogget].faktadr = faktadresse;
      model.bruker[innloggetBruker][innlogget].orgnr = orgnr;
      model.bruker[innloggetBruker][innlogget].passord = passord;

      mainHTML.innerHTML = minside();
    }
  } else if (innlogget == "kunde") {
    if (navn != "" && adresse != "" && tlf != "" && email != "") {
      model.bruker[innloggetBruker][innlogget].navn = navn;
      model.bruker[innloggetBruker][innlogget].adresse = adresse;
      model.bruker[innloggetBruker][innlogget].tlf[0] = tlf;
      model.bruker[innloggetBruker][innlogget].email = email;
      model.bruker[innloggetBruker][innlogget].passord = passord;

      mainHTML.innerHTML = minside();
    }
  }
}

function skjulPassord() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// <div class="btn-group" style="width:90%">
//   <button onclick='mainHTML.innerHTML = visHistorikk(innloggetBedrift)' button style="width:50%">PLACEHOLDER TEXT</>
//   <button onclick='mainHTML.innerHTML = visHistorikk(innloggetBedrift)' button style="width:50%">PLACEHOLDER TEXT</>
// </div>
// <br>
