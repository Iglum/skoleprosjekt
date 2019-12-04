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
    <input type="text" name="FirstName" value="Jim Hansen">
    <br>
    Firmanavn:
    </br>
    <input type="text" name="FirstName" value="Betongssentrum AS">
    <br>
    Adresse:
    <br>
    <input type="text" name="FirstName" value="Hvittingfossveien. 254, 3089 Holmestrand">
    <br>
    Faktureringsdresse:
    <br>
    <input type="text" name="FirstName" value="Hvittingfossveien. 254, 3089 Holmestrand">
    <br>
    Organisasjonsnr:
    <br>
    <input type="text" name="FirstName" value="921743432">
    <br>
    Telefon (valgfritt):
    <br>
    <input type="text" name="FirstName" value="923 78 455">
    <br>
    Organisasjonsnr:
    <br>
    <input type="text" name="FirstName" value="921743432">
    <br>
    Email:
    <br>
    <input type="text" name="FirstName" value="post@betongsentrum.no">
        
    `;

  return html;
}
