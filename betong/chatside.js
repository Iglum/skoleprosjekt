
function chatside() {
    
    let person = "";
    innlogget == "tilbyder" ? person = "kontaktperson" : person = "navn";
    
    let html = "";


//Denne funksjonene itererer igjennom modellen og skriver html

    html += `
    <div style="background-color: #0B91E5; display: flex;">
  
    <h2 style="width: 100%; display: inline-block; color: white; text-align: center;">Meldinger</h2></br>
    </div>
    `

    for (let i = 0; i < model.chat.length; i++) {
        if (model.chat[i].deltakere.includes(innloggetBruker)) {
            let meldingsside = model.chat[i];
            // let person = meldingsside.personer[x];
            let deltakere = "";
            for (antall = 0; antall < meldingsside.deltakere.length; antall++){
                if (meldingsside.deltakere[antall] != innloggetBruker){
                    try {deltakere += model.bruker[antall].kunde.navn;
                    }catch{
                        deltakere += model.bruker[antall].tilbyder.bedrift;
                    }
                }
            }


            html += `
                    <div onclick="mainHTML.innerHTML = meldinger('${deltakere}')" style="background-color: #F8F8F8; border: 1px solid #C6C6C6; padding: 15px 0 15px 0;">
                    <h2>${deltakere}</h2>

                    `
            let sistemelding = meldingsside.meldinger.length - 1;

            let avsender = "";

            try{
                avsender = model.bruker[meldingsside.meldinger[sistemelding].avsender].kunde.navn;
            }catch{
                avsender = model.bruker[meldingsside.meldinger[sistemelding].avsender].tilbyder.bedrift;
            }


            // meldingsside.meldinger[sistemelding].avsender != innloggetBruker ? avsender = person.meldinger[sistemelding].avsender : avsender = model.bruker[innloggetBruker][innlogget].bedrift;

            html += `
                    <h5>Fra: ${avsender}</h5>
                    <h5>Emne: ${meldingsside.meldinger[sistemelding].emne}</h5>
                    </div>
                    `
        }
    }




    //    html += `
    //<div style="background-color: #0B91E5; display: flex;">

    //  <h2 style="width: 100%; display: inline-block; color: white;">Chat</h2></br>
    //  </div>



    //<div onclick="mainHTML.innerHTML = meldinger(${innloggetBruker}, 'Per Hansen')" style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
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
