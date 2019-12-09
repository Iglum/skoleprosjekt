function minside(innloggetbedrift) {
    let html = "";

    html += `
  <div style="background-color: #0B91E5; display: flex;">
  
  <h2 style="width: 100%; display: inline-block; color: white;">Min Side</h2></br>
  </div>
    <img src="img_avatar.jpg" alt="Avatar" class="avatar center">
    Kontaktperson: 
    ${model.tilbyder[innloggetbedrift].kontaktperson}
    </br> 
    Firmanavn:  
    ${model.tilbyder[innloggetbedrift].bedrift}
    </br> 
    Adresse:
   ${model.tilbyder[innloggetbedrift].adresse}
    </br>
    Orgnr:  
    ${model.tilbyder[innloggetbedrift].orgnr}
    </br>
    Telefon:
    ${model.tilbyder[innloggetbedrift].tlf}
    </br>
    Email: 
    ${model.tilbyder[innloggetbedrift].email}
    </br>
    <button onclick='mainHTML.innerHTML = endreprofil(innloggetBedrift)'>Endre Profil</button>
    
    <button onclick='mainHTML.innerHTML = visHistorikk(innloggetBedrift)'>Historikk</button>
    <button onclick='mainHTML.innerHTML = sendteTilbud(innloggetBedrift)'>Sendte tilbud</button>
    
    <div id="kartcontainer">
    
    `;
    html += navbar;

    return html;
}
