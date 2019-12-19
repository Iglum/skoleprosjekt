
function bekreftelseSide() {

//denne funksjonen 

  let html = "";

  html += `

  <div style="background-color: #0B91E5; display: flex;">
  <button onclick="mainHTML.innerHTML = sokeSide()" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 25px; color: white; width: 30px;">⤶</button>
  <h2 style="width: 100%; display: inline-block; color: white; text-align: center;"></h2></br>
  </div>
</br>
<div style="font-size: 20px; margin-left: 10px;">
    </br><center><h2>Tilbudet er sendt!</h2>
    </br></br>
    <p>Ditt tilbud er sendt til følgende kunde:
    </br></br>
    Navn Navnesen</center></p>
    <ul style="list-style-type:none;">
    <li><b>Adresse:</b></li>
    <li><b>Dato for oppdrag:</b></li>
    <li><b>Oppdraget:</b></li>
    </ul>
    </div> 



`
html += navbar;

return html;
}
