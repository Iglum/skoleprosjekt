﻿
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
        <th><input id="rknavn" type="text"><th>
    </tr>
    <tr>
        <th>Adresse:</th> 
        <th><input id="rkadresse" type="text"><th>
    </tr>
    <tr>
        <th>Epostadresse:</th> 
        <th><input id="rkemail" type="text"><th>
    </tr>

    <tr>
        <th>Telefonnummer:</th> 
        <th><input id="rktlf" type="text"><th>
    </tr>

    <tr>
        <th>Passord:</th> 
        <th><input id="rkpw1" type="password"><th>
    </tr>
    <tr>
        <th>Gjenta passord:</th> 
        <th><input id="rkpw2" type="password"><th>
    </tr>
    </table>
    </br>
    </br>

    <button onclick="mainHTML.innerHTML = loggInnSide()">Avbryt</button> <button onclick="regKundeModel()">Fullfør</button>
    
    </div>


    `

    return html;

}

//<img src="svgbilbord.svg" alt="">