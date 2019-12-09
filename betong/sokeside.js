
function sokeSide(innloggetbedrift) {
    let html = "";

    html += `
    <div style="background-color: #0B91E5; display: flex;">
    <h2 style="width: 100%; display: inline-block; color: white;">Søkeliste</h2></br></div>
    <div><input type="text" width: 340px; margin-left: 10px; margin-top: 10px;" value="Søk:"></input></div>
    <div>
    <table>
    <tr>
        <td>Område: Velg område</td>
        <td>Sorter etter: Nyeste</td>
    </tr>
    <tr>
        <td>
            Filter:
            Gulvstøp <input type="checkbox">
            Armering <input type="checkbox">
            Forskaling <input type="checkbox">
            Gulvsliping <input type="checkbox">
        </td>
    </tr>
    </table>
    </div>
    </br>
    <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
                <h2>${model.tilgjengeligeJobber[0].jobber[0].tittel}</h2>
                <ul>
                <li></span></li>
                <li>Område: ${model.tilgjengeligeJobber[0].jobber[0].omrode}</li>
                <li>Dato: ${model.tilgjengeligeJobber[0].jobber[0].dato}</li>
                </br>
               
                </ul>
            </div>
            </br>
            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
            <h2>${model.tilgjengeligeJobber[1].jobber[0].tittel}</h2>
            <ul>
            <li></span></li>
            <li>Område: ${model.tilgjengeligeJobber[1].jobber[0].omrode}</li>
            <li>Dato: ${model.tilgjengeligeJobber[1].jobber[0].dato}</li>
            </br>
           
            </ul>
        </div>
    `

    return html;
}