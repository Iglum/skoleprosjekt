//meldinger

//Denne funksjonen iterer modellen og skriver html og css deretter.

function meldinger(deltakere) {

    // let innloggetnavn = "";
    // innlogget == "tilbyder" ? innloggetnavn = model.bruker[innloggetBruker].tilbyder.bedrift :
    //     person = model.bruker[innloggetBruker].kunde.navn;
    

    let deltakernavn = "";

    try{
        deltakernavn = model.bruker[deltakere].kunde.navn;
    }catch{
        deltakernavn = model.bruker[deltakere].tilbyder.bedrift;
    }

    let html = "";

    html += `
    <div style="background-color: #0B91E5; display: flex;">

    <button onclick="mainHTML.innerHTML = chatside()" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 30px; color: white; padding-top: 5px; margin-left: 5px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white; text-align: center; margin-right: 50px;">${deltakernavn}</h2></br>
    </div>
    `;


    for (let i = 0; i < model.chat.length; i++) {
        if (model.chat[i].deltakere.includes(innloggetBruker) && model.chat[i].deltakere.includes(parseInt(deltakere))) {
            let chat = model.chat[i].meldinger;

            console.log(chat.length);

            for (let y = 0; y < chat.length; y++) {

                let bakgrunnsfarge = "";
                let farge = "";
                let avrunding = "";
                let plassering = "";
                let klarer = "";
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
                            <div style="clear: ${klarer}; margin: 5px; padding: 5px; float: ${plassering}; display: inline-block; background-color: ${bakgrunnsfarge}; color: ${farge}; border: 1px solid #C6C6C6; border-radius: ${avrunding};">
                            <h4>${avsender}</h4>
                            <ul style="list-style-type: none;">
                            <li>${chat[y].emne}</li>
                            <li>${chat[y].innhold}</li>
                            </ul>
                            </div>
                            `;

            }
            break;
        }
    }

    html += navbar;

    return html;
}