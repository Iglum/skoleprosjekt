//endre profil

function endreprofil() {
  let html = "";

  html += `
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
