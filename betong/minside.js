//Denne funksjonen sjekker hvilken bedrift som er innlogget og skriver ut data fra modellen deretter. 
function minside(innloggetbedrift) {
    let html = "";

    html += `
  <div style="background-color: #0B91E5; display: flex;">
  
  <h2 style="width: 100%; display: inline-block; color: white; text-align: center;">Min Side</h2></br>
  </div>
  </br>
    <img src="img_avatar.jpg" alt="Avatar" class="avatar center">
    <center><p style="font-size: 35px;">★★★☆</p></center>
    <p style="font-size: 20px; margin-left: 10px;"><b>Kontaktperson:</b>
    </br>${model.tilbyder[innloggetbedrift].kontaktperson}
    </br> 
    <b>Firmanavn:</b> 
    </br>${model.tilbyder[innloggetbedrift].bedrift}
    </br> 
    <b>Adresse:</b>
    </br>${model.tilbyder[innloggetbedrift].adresse}
    </br>
    <b>Organisasjonsnr.:</b> 
    </br>${model.tilbyder[innloggetbedrift].orgnr}
    </br>
    <b>Telefon:</b>
    </br>${model.tilbyder[innloggetbedrift].tlf}
    </br>
    <b>Email:</b>
    </br>${model.tilbyder[innloggetbedrift].email}
    </p>
    <center><div class="button-group" style="margin-top: 5px;">
      <button onclick='mainHTML.innerHTML = endreprofil(innloggetBedrift)'>Endre Profil</button>
      <button onclick='mainHTML.innerHTML = visHistorikk(innloggetBedrift)'>Historikk</button>
      <button onclick='mainHTML.innerHTML = sendteTilbud(innloggetBedrift)'>Sendte tilbud</button>
    </div></center>
    
    <div id="kartcontainer">
    
    `;
    html += navbar;

    return html;
}
