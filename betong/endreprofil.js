//endre profil

function endreprofil(innloggetbedrift) {
  let html = "";

  html += `
    <div style="background-color: #0B91E5; display: flex;">
    <h2 onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" style="width: 100%; display: inline-block; color: white; text-align: center;">Endre Profil</h2></br>
    </div>
    </br>
    <img src="img_avatar.jpg" alt="Avatar" class="avatar center">
    <div class="wrapper font">
    <center>
    Kontaktperson:
    <input type="text" name="kontaktperson" value="${model.tilbyder[innloggetbedrift].kontaktperson}">
    Firmanavn:
    <br>
    <input type="text" name="bedrift" value="${model.tilbyder[innloggetbedrift].bedrift}">
    Adresse:
    <br>
    <input type="text" name="adresse" value="${model.tilbyder[innloggetbedrift].adresse}">
    Faktureringsdresse:
    <br>
    <input type="text" name="faktadr" value="${model.tilbyder[innloggetbedrift].faktadr}">
    Organisasjonsnr:
    <br>
    <input type="text" name="orgnr" value="${model.tilbyder[innloggetbedrift].orgnr}">
    Telefon (valgfritt):
    <br>
    <input type="text" name="tlf" value="${model.tilbyder[innloggetbedrift].tlf}">
    Email:
    <input type="text" name="email" value="${model.tilbyder[innloggetbedrift].email}">
    <br>
</center>
<center><div class="button-group" style="margin: auto;">
<button onclick='mainHTML.innerHTML = minside(innloggetBedrift)'>Lagre</button>
<button onclick='mainHTML.innerHTML = minside(innloggetBedrift)'>Avbryt</button>
</div></center>
    

</div>
<br>
`;

html += navbar;

return html;
}

// <div class="btn-group" style="width:90%">
//   <button onclick='mainHTML.innerHTML = visHistorikk(innloggetBedrift)' button style="width:50%">PLACEHOLDER TEXT</>
//   <button onclick='mainHTML.innerHTML = visHistorikk(innloggetBedrift)' button style="width:50%">PLACEHOLDER TEXT</>
// </div>  
// <br>