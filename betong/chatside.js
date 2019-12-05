function chatside(innloggetbedrift){
    let html = "";


html += `
<div style="background-color: #0B91E5; display: flex;">
  
  <h2 style="width: 100%; display: inline-block; color: white;">Chat</h2></br>
  </div>

${model.chat[0].personer[0].navn}











  <button onclick="mainHTML.innerHTML = kartside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(0*knappebredde)}px;">${svgkartikon}</button>
  <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(1*knappebredde)}px;">${svgsokikon}</button>
  <button onclick="mainHTML.innerHTML = chatside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(2*knappebredde)}px;">${svgmelding}</button>
  <button onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde-knappehoyde}px; left: ${(3*knappebredde)}px;">${svgminside}</button>





`
return html;

}