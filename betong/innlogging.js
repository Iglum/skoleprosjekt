// let mainhtml = document.getElementById("mainContent");

function loggInnSide() {
  // console.log(model["bruker"]);
  let html = "";

    html += `
        
        <div id="innlogging">
        <div style="background-color: #0B91E5; height: 30px"></div>
        <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
        <br>
        <br>
        <br>
        <center>
        <input value="Epost/telefon"></input>
        <br><br>
        <button onclick="mainHTML.innerHTML = kartside()">Logg inn</button>
        <br><br>
        <p onclick="mainHTML.innerHTML = regBedrift()">Registrer ny bruker</p>
        <br>
        <button onclick="mainHTML.innerHTML = kartside()">Besøkende</button>
        </center>
    </div>
    <div style="background-color: #0B91E5; height: 58px; width: 100%; position: absolute; top: ${640-58}px;"></div>
    `
  return html;
}


//<div style="background-color: #0B91E5; height: 58px; top: ${screen.height-this.height};  "></div>