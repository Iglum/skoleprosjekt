
function chatside() {
    
    let person = "";
    innlogget == "tilbyder" ? person = "kontaktperson" : person = "navn";
    
    let html = "";


//Denne funksjonene itererer igjennom modellen og skriver html

    html += `
    <div style="background-color: #0B91E5; display: flex;">
  
    <h2 style="width: 100%; display: inline-block; color: white; text-align: center;">Meldinger</h2></br>
    </div></br>
    `

    for (let i = 0; i < model.chat.length; i++) {
        if (model.chat[i].deltakere.includes(innloggetBruker)) {
            let meldingsside = model.chat[i];
            // let person = meldingsside.personer[x];
            let deltakere = "";
            let deltakerId = "";
            for (antall = 0; antall < meldingsside.deltakere.length; antall++){
                // if (antall > 0){
                //     deltakere += ", ";
                // }
                if (meldingsside.deltakere[antall] != innloggetBruker){
                    try {deltakere += model.bruker[meldingsside.deltakere[antall]].kunde.navn;
                    }catch{
                        deltakere += model.bruker[meldingsside.deltakere[antall]].tilbyder.bedrift;
                    }
                    deltakerId += meldingsside.deltakere[antall];
                }
            }

            html += `
                    <div onclick="mainHTML.innerHTML = meldinger('${deltakerId}'), window.scrollTo(0, document.body.scrollHeight);" style="background-color: #F8F8F8; border: 1px solid #C6C6C6; width: 90%; margin: auto; margin-bottom: 10px; padding-left: 10px;">
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
    
    html += navbar;

    return html;
}
