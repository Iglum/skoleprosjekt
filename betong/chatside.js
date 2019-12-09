function chatside(innloggetbedrift) {
    let html = "";



    for (let i = 0; i < model.chat.length; i++) {
        if (model.chat[i].bedrift == innloggetbedrift) {
            let meldingsside = model.chat[i];
            for (let x = 0; x < meldingsside.personer.length; x++) {
                let person = meldingsside.personer[x];
                let avsender = "";

                html += `
                    <div onclick="mainHTML.innerHTML = meldinger(${innloggetbedrift}, '${person.navn}')" style="background-color: #F8F8F8; border: 1px solid #C6C6C6; padding: 15px 0 15px 0;">
                    <h2>${person.navn}</h2>
                    `
                let sistemelding = person.meldinger.length - 1;

                person.meldinger[sistemelding].avsender != innloggetbedrift ? avsender = person.meldinger[sistemelding].avsender : avsender = model.tilbyder[innloggetbedrift].bedrift;

                html += `
                    <h5>Fra: ${avsender}</h5>
                    <h5>${person.meldinger[sistemelding].emne}</h5>
                    </div>
                    `
            }
        }
    }




//    html += `
//<div style="background-color: #0B91E5; display: flex;">
  
//  <h2 style="width: 100%; display: inline-block; color: white;">Chat</h2></br>
//  </div>



//<div onclick="mainHTML.innerHTML = meldinger(${innloggetbedrift}, 'Per Hansen')" style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
//                <h2>${model.chat[0].personer[0].navn}</h2>
//                <ul>
//                <li></span></li>
//                <li><h3>Emne:</h3> ${
//        model.chat[0].personer[0].meldinger[0].emne
//        }</li>
//                </br>
               
//                </ul>
//            </div>
//            </br>
        
//            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
//                <h2>${model.chat[0].personer[1].navn}</h2>
//                <ul>
//                <li></span></li>
//                <li><h3>Emne:</h3> ${
//        model.chat[0].personer[1].meldinger[0].emne
//        }</li>
//                </br>
               
//                </ul>
//            </div>
//            </br>
     
//            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
//                <h2>${model.chat[0].personer[2].navn}</h2>
//                <ul>
//                <li></span></li>
//                <li><h3>Emne:</h3> ${
//        model.chat[0].personer[2].meldinger[0].emne
//        }</li>
//                </br>
               
//                </ul>
//            </div>
//            </br>
//            </div>
//`;

    html += navbar;

    return html;
}
