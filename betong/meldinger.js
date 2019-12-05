//meldinger

function meldinger() {
  let html = "";

  html += `


   
    <p>${model.chat[0].personer[0].meldinger[0].innhold}</p>
  
         <div id="kartcontainer">
    
    
    `;
  return html;
}
