


function visHistorikk(){
    let html = "";
    let innloggetBedrift = 0;



    for (let i = 0; i < model.historikk.length; i++){
        if (model.historikk[i].bedrift == innloggetBedrift){
            let historikk = model.historikk[i];
            for (let x = 0; x < historikk.jobber.length; x++){
                console.log(historikk);
            html += 
            `
            <div>
                <h1>${historikk.jobber[x].tittel}</h1>
                <ul>
                <li>${historikk.jobber[x].status}</li>
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