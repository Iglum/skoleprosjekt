


function sendteTilbud(){
    let html = "";

    html +=
    `
    <div style="background-color: #0B91E5; display: flex;">
    <button onclick="mainHTML.innerHTML = minside()" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 50px; color: white; width: 30px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white;">Sendte tilbud</h2></br>
    </div>
    `

    for (let i = 0; i < model.sendteTilbud.length; i++){
        if (model.sendteTilbud[i].bedrift == innloggetBruker){
            let sendt = model.sendteTilbud[i];
            for (let x = sendt.jobber.length-1; x >= 0; x--){            
            
            html +=
            
            `
            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
                <h3>${sendt.jobber[x].tittel}</h1>
                <ul>
                <li>Status: <span style="color: grey;">${sendt.jobber[x].status}</span></li>
                <li>Dato: ${sendt.jobber[x].dato}</li>
                </br>
                <li>Beskrivelse: </br>${sendt.jobber[x].beskrivelse}</li>
                </ul>
            </div>
            </br>
            </div>
            `
            }
            
        }
    }

    html += navbar;
    
    return html;


}