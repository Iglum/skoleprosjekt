//meldinger

function meldinger(innloggetbedrift, person) {
  let html = "";

  html += `
    <div style="background-color: #0B91E5; display: flex;">
    <button onclick="mainHTML.innerHTML = chatside(${innloggetbedrift})" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 50px; color: white; width: 30px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white;">Tilbake</h2></br>
    </div>
    `;

  for (let i = 0; i < model.chat.length; i++) {
    if (model.chat[i].bedrift == innloggetbedrift) {
      let chat = model.chat[i];
      for (let x = 0; x < chat.personer.length; x++) {
        if (chat.personer[x].navn == person) {
          let msg = chat.personer[x];
          for (let y = 0; y < chat.personer[x].meldinger.length; y++) {
            html += `
            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
            <h4>${msg.meldinger[y].avsender}</h4>
            <ul>
            <li>${msg.meldinger[y].emne}</li>
            <li>${msg.meldinger[y].innhold}</li>
            </ul>
            </div>
            </br>
            `;
          }
        }
      }
    }
  }

  return html;
}
