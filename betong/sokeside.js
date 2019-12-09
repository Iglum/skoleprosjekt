
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
    `

    return html;
}