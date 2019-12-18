//meldinger

//Denne funksjonen iterer modellen og skriver html og css deretter.

function meldinger(deltakere) {

    let deltakernavn = "";

    try{
        deltakernavn = model.bruker[deltakere].kunde.navn;
    }catch{
        deltakernavn = model.bruker[deltakere].tilbyder.bedrift;
    }

    let html = "";

    html += `
    <span id="deltakere" style="display: none">${deltakere}</span>
    
    <div style="background-color: #0B91E5; display: flex; width: 100vw; position: fixed; top: 0;">
    <button onclick="mainHTML.innerHTML = chatside()" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 30px; color: white; padding-top: 5px; margin-left: 5px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white; text-align: center; margin-right: 50px;">${deltakernavn}</h2></br>
    </div>
    `;


    for (let i = 0; i < model.chat.length; i++) {
        if (model.chat[i].deltakere.includes(innloggetBruker) && model.chat[i].deltakere.includes(parseInt(deltakere))) {
            let chat = model.chat[i].meldinger;

            html+= `<div id="JDKSJAKDS" style="background-color: powderblue;>`

            

            for (let y = 0; y < chat.length; y++) {

                let bakgrunnsfarge = "";
                let farge = "";
                let avrunding = "";
                let plassering = "";
                chat[y].avsender == innloggetBruker ?
                    (plassering = "right", klarer = "left", bakgrunnsfarge = "rgba(11, 145, 229)", farge = "white", avrunding = "20px 20px 5px 20px") :
                    (plassering = "left", klarer = "right", bakgrunnsfarge = "#F8F8F8", avrunding = "20px 20px 20px 5px");
                
                let avsender = "";

                try{
                    avsender = model.bruker[chat[y].avsender].tilbyder.bedrift;
                } catch {
                    avsender = model.bruker[chat[y].avsender].kunde.navn;
                }

                html += `
                            <div style="clear: both; margin: 5px; padding: 5px; float: ${plassering}; max-width: 80%; display: block; background-color: ${bakgrunnsfarge}; color: ${farge}; border: 1px solid #C6C6C6; border-radius: ${avrunding};">
                            <h4>${avsender}</h4>
                            <ul style="list-style-type: none;">
                            <li>${chat[y].emne}</li>
                            <li style="word-wrap: break-word">${chat[y].innhold}</li>
                            </ul>
                            </div>
                            `;


            }
            html += `</div>`;
            break;
        }
    }

    html+= `
            <div style="border: 1px solid black; bottom: 68px; position: fixed; width: 100vw; background-color: white;">
            <p id="melding" contenteditable="true" style="display: inline-block; max-width: 89vw;"></p>
            <button onclick="sendMelding()" style="right: 0; float: right; display: inline-block; width: 10vw; height: 100%;">Send</button>
            </div>
            `
    
    html += navbar;

    console.log(html);
    
    return html;
}


function sendMelding(){
    
    let chat = document.getElementById("deltakere").innerHTML;
    let melding = document.getElementById("melding").innerHTML;
    
    if (melding == ''){
        return;
    }

    for (let i = 0; i < model.chat.length; i++){
        if (model.chat[i].deltakere.includes(innloggetBruker) && model.chat[i].deltakere.includes(parseInt(chat))){
            model.chat[i].meldinger[model.chat[i].meldinger.length] = 
            {
                avsender: innloggetBruker,
                emne: '',
                innhold: melding
            }
        }
    }
    // document.getElementById("deltakere").innerHTML = '';
    mainHTML.innerHTML = meldinger(parseInt(chat));
}



// (model.chat[i].deltakere.includes(innloggetBruker) && model.chat[i].deltakere.includes(parseInt(deltakere)))