//endre profil

function endreprofil(innloggetbedrift) {
  let html = "";

  html += `
    <div style="background-color: #0B91E5; display: flex;">
    <button onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 25px; color: white; width: 30px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white;">Endre Profil</h2></br>
    </div>
    <p>Endre profil</P>
    Kontaktperson:
    <br>
    <input type="text" name="kontaktperson" value="${model.tilbyder[innloggetbedrift].kontaktperson}">
    <br>
    Firmanavn:
    </br>
    <input type="text" name="bedrift" value="${model.tilbyder[innloggetbedrift].bedrift}">
    <br>
    Adresse:
    <br>
    <input type="text" name="adresse" value="${model.tilbyder[innloggetbedrift].adresse}">
    <br>
    Faktureringsdresse:
    <br>
    <input type="text" name="faktadr" value="${model.tilbyder[innloggetbedrift].faktadr}">
    <br>
    Organisasjonsnr:
    <br>
    <input type="text" name="orgnr" value="${model.tilbyder[innloggetbedrift].orgnr}">
    <br>
    Telefon (valgfritt):
    <br>
    <input type="text" name="tlf" value="${model.tilbyder[innloggetbedrift].tlf}">
    <br>
    Email:
    <br>
    <input type="text" name="email" value="${model.tilbyder[innloggetbedrift].email}">
        
    `;

  return html;
}
