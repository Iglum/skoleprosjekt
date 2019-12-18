//oppdrag info (not yet)

//Denne funksjonen sjekker bare hvilken bedrift som er logget inn og skriver html.
function oppdraginfo(tilgjengJobber, ledigJobb) {
let person = "";

model.bruker.bruketype == 'kunde' ? person = 'navn' : person = 'kontaktperson';

  let html = "";

  html += `<div style="background-color: #0B91E5; display: flex;">
    <button onclick="mainHTML.innerHTML = sokeSide()" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 25px; color: white; width: 30px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white; text-align: center;">Informasjon om oppdrag</h2></br>
    </div></br>
    <center><h2>${model.tilgjengeligeJobber[tilgjengJobber].jobber[ledigJobb].tittel}</center></h2>
    <div style="font-size: 20px; margin-left: 10px;">
    </br><center>Kart over stedet</center>
    </br>
    <ul style="list-style-type:none;">
      <li><b>Navn:</b> ${model.bruker[tilgjengJobber][model.bruker[tilgjengJobber].brukertype][person]}</li>
      <li><b>Adresse:</b> ${model.bruker[tilgjengJobber][model.bruker[tilgjengJobber].brukertype].adresse}</li>
      <li><b>Dato for oppdrag:</b> ${model.tilgjengeligeJobber[tilgjengJobber].jobber[ledigJobb].dato}</li>
      </br>
      <li>${model.tilgjengeligeJobber[tilgjengJobber].jobber[ledigJobb].beskrivelse}</li>
      </ul>
      </div>
      </br>
      <center><div class="button-group" style="margin: auto">
        <button onclick="bekreftelse" style="width:50%; display: flex; justify-content: center">Send tilbud</>
      </div></center>
    `
    html += navbar;

      return html;
  }

  // for (let i = 0; i < model.chat.length; i++) {
  //   if (model.chat[i].bedrift == innloggetBruker) {
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

