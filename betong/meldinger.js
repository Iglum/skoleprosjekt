//meldinger

function meldinger(innloggetbedrift, person) {
    let html = "";

    html += `
    <div style="background-color: #0B91E5; display: flex;">
    <button onclick="mainHTML.innerHTML = chatside(${innloggetbedrift})" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 50px; color: white; width: 30px; margin-right: 20px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white;">${person}</h2></br>
    </div>
    `;


    for (let i = 0; i < model.chat.length; i++) {
        if (model.chat[i].bedrift == innloggetbedrift) {
            let chat = model.chat[i];
            for (let x = 0; x < chat.personer.length; x++) {
                if (chat.personer[x].navn == person) {
                    let msg = chat.personer[x];
                    for (let y = 0; y < chat.personer[x].meldinger.length; y++) {

                        let align = "";
                        let bakgrunnsfarge = "";
                        let farge = "";
                        let avrunding = "";
                        let plassering = "";
                        msg.meldinger[y].avsender == innloggetbedrift ? (align = "right", plassering = "right", bakgrunnsfarge = "rgba(11, 145, 229)", farge = "white", avrunding = "20px 20px 5px 20px") : (align = "left", bakgrunnsfarge = "#F8F8F8", avrunding = "20px 20px 20px 5px");

                        html += `
                            <div style="margin: 5px; padding: 5px; float: ${plassering}; display: inline-block; text-align: ${align}; background-color: ${bakgrunnsfarge}; color: ${farge}; border: 1px solid #C6C6C6; border-radius: ${avrunding};">
                            <h4>${msg.meldinger[y].avsender}</h4>
                            <ul>
                            <li>${msg.meldinger[y].emne}</li>
                            <li>${msg.meldinger[y].innhold}</li>
                            </ul>
                            </div>
                            `;
                    }
                }
            }
        }
    }

    return html;
}