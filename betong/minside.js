function minside(innloggetbedrift) {
  let html = "";

  html +=
  `
  <div style="background-color: #0B91E5; display: flex;">
  
  <h2 style="width: 100%; display: inline-block; color: white;">Min Side</h2></br>
  </div>
    
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
    
    
    <button onclick="mainHTML.innerHTML = kartside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(0*knappebredde)}px;">${svgkartikon}</button>
    <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(1*knappebredde)}px;">${svgsokikon}</button>
    <button onclick="mainHTML.innerHTML = chatside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(2*knappebredde)}px;">${svgmelding}</button>
    <button onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(3*knappebredde)}px;">${svgminside}</button>
    </div>
    `
  return html;
}
