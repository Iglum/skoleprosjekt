


function visHistorikk(){
    let html = "";
    let innloggetBedrift = 0;



    for (let i = 0; i < model.historikk.length; i++){
        if (model.historikk[i].bedrift == innloggetBedrift){
            let historikk = model.historikk[i];
            for (let x = historikk.jobber.length-1; x >= 0; x--){
            
            let statusfarge = "";
            
            statusfarge =historikk.jobber[x].status == "Fullført" ? statusfarge = "green" : statusfarge = "red";
            console.log(statusfarge);
            html +=
            `
            <div>
                <h1>${historikk.jobber[x].tittel}</h1>
                <ul>
                <li style="color: ${statusfarge}">${historikk.jobber[x].status}</li>
                <li>${historikk.jobber[x].dato}</li>
                <li>${historikk.jobber[x].beskrivelse}</li>
                </ul>
            </div>
            </br>
            </br>
            `
            }
            
        }
    }
    
    return html;

}