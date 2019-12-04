


function visHistorikk(innloggetbedrift){
    let html = "";

    html +=
    `
    <div style="background-color: #0B91E5; display: flex;">
    <button onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 25px; color: white; width: 30px;">⤶</button>
    <h2 style="width: 100%; display: inline-block; color: white;">Historikk</h2></br>
    </div>
    `

    for (let i = 0; i < model.historikk.length; i++){
        if (model.historikk[i].bedrift == innloggetbedrift){
            let historikk = model.historikk[i];
            for (let x = historikk.jobber.length-1; x >= 0; x--){
            
            let statusfarge = "";
            
            statusfarge = historikk.jobber[x].status == "Fullført" ? statusfarge = "green" :
                historikk.jobber[x].status == "Avslått" ? statusfarge = "red" : statusfarge = "grey";
            console.log(statusfarge);
            
            
            html +=
            
            `
            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
                <h3>${historikk.jobber[x].tittel}</h1>
                <ul>
                <li style="color: ${statusfarge}">${historikk.jobber[x].status}</li>
                <li>${historikk.jobber[x].dato}</li>
                <li>${historikk.jobber[x].beskrivelse}</li>
                </ul>
            </div>
            </br>
            </div>
            `
            }
            
        }
    }
    
    return html;


}