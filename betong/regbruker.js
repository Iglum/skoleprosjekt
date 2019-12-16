function regBruker() {

    let html = "";

    html +=
        `
        <div>
        <center>
        <div style="background-color: #0B91E5; height: 30px"></div>
        <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">

        <div onclick="mainHTML = regKunde()" style="background-color: #F8F8F8; border: 1px solid #C6C6C6; width: 90%; margin: auto; margin-top: 100px; padding: 20px 10px 20px 10px;">
                <h3>Registrer deg som kunde</h3>
                <ul style="list-style-type:none;">
                <li>Du trenger hjelp til betongarbeid eller snørydding</li>
                </ul>
            </div>
            </br>

            <div onclick="mainHTML.innerHTML = regBedrift()" style="background-color: #F8F8F8; border: 1px solid #C6C6C6; width: 90%; margin: auto; padding: 20px 10px 20px 10px;">
                <h3>Registrer deg som tilbyder</h3>
                <ul style="list-style-type:none;">
                <li>Du kan tilby tjenester innen betongarbeid eller snørydding</li>
                </ul>
            </div>

            </div>


        <div class="navbar" style="height: 58px;"></div>
        
        `

    return html;

}

