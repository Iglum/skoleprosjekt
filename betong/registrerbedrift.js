
function regBedrift() {
    let html = '';

    html +=
        `
    <div id="registrerBedrift">
    <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
    
    <center>
    </br>
    </br>
    <p><b>Registrer Bedrift</b></p>
    <table>
    <tr>
        <th>Navn på bedrift:</th> 
        <th><input type="text"><th>
    </tr>
    <tr>
        <th>Kontaktperson:</th> 
        <th><input type="text"><th>
    </tr>
    <tr>
        <th>Epostadresse:</th> 
        <th><input type="text"><th>
    </tr>
    <tr>
        <th>Telefonnummer:</th> 
        <th><input type="text"><th>
    </tr>
    </br>
    <tr>
        <th>Antall ansatte:</th> 
        <th><input type="text"><th>
    </tr>

    <tr>
        <th>Adresse:</th> 
        <th><input type="text"><th>
    </tr>
    <tr>
        <th>Hjemmeside:</th> 
        <th><input type="text"><th>
    </tr>
    <tr>
        <th>Org.nr.:</th> 
        <th><input type="text"><th>
    </tr>
    </br>
    <tr>
        <th>Faktureringsadr.:</th> 
        <th><input type="text"><th>
    </tr>
    </table>
    </br></br>
    Betong: <input type="checkbox">  Snørydding: <input type="checkbox">
    </br></br>
    <table style="width:25%;">
    <tr>
        <th><h3>Betongarbeid:</h3></th>
        <th><h3>Snørydding:</h3></th>
    </tr>
    <tr>
        <td style="text-align: center">
            Forskaling: <input type="checkbox"></br>
            Armering: <input type="checkbox"></br>
            Gulvstøp: <input type="checkbox"></br>
            Gulvsliping: <input type="checkbox">
        </td>
        <td style="text-align: center">
            Skuffe: <input type="checkbox"></br>
            Snøfreser: <input type="checkbox"></br>
            Traktor: <input type="checkbox">
        </td>
    </tr>
    </table>
    </br></br>
    <button onclick="mainHTML.innerHTML = loggInnSide()">Avbryt</button> <button onclick="mainHTML.innerHTML = kartside()">Fullfør</button>
    
    </div>


    `

    return html;

}

//<img src="svgbilbord.svg" alt="">