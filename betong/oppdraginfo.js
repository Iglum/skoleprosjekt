//oppdrag info (not yet)
//Denne funksjonen sjekker bare hvilken bedrift som er logget inn og skriver html.
function oppdraginfo(innloggetbedrift) {
  let html = "";

  html += `<div style="background-color: #0B91E5; display: flex;">
    <button onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 25px; color: white; width: 30px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white;">Endre Profil</h2></br>
    </div>
    <h3>${model.tilbyder[innloggetbedrift].kontaktperson}</h3>
    <h3>${model.tilbyder[innloggetbedrift].adresse}</h3>
    `;







  // for (let i = 0; i < model.chat.length; i++) {
  //   if (model.chat[i].bedrift == innloggetbedrift) {
  //     let chat = model.chat[i];
  //     for (let x = 0; x < chat.personer.length; x++) {
  //       if (chat.personer[x].navn == person) {
  //         let msg = chat.personer[x];
  //         for (let y = 0; y < chat.personer[x].meldinger.length; y++) {
  //           html += `
  //           <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
  //           <h4>${msg.meldinger[y].avsender}</h4>
  //           <ul>
  //           <li>${msg.meldinger[y].emne}</li>
  //           <li>${msg.meldinger[y].innhold}</li>
  //           </ul>
  //           </div>
  //           </br>
  //           `;
  //         }
  //       }
  //     }
  //   }
  // }

  return html;
}
