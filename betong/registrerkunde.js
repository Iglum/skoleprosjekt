
function regKunde() {
    let html = '';

    html +=
        `
    <div id="registrerbruker">
    <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
    
    <center>
    </br>
    </br>
    <p><b>Registrer Bruker</b></p>
    <table>
    <tr>
        <th>Ditt navn:</th> 
        <th><input type="text"><th>
    </tr>
    <tr>
        <th>Adresse:</th> 
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

    </br>
    </table>

    <button onclick="mainHTML.innerHTML = loggInnSide()">Avbryt</button> <button onclick="mainHTML.innerHTML = kartside()">Fullfør</button>
    
    </div>


    `

    return html;

}

//<img src="svgbilbord.svg" alt="">