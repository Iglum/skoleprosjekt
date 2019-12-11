// let mainhtml = document.getElementById("mainContent");

function loggInnSide() {
  let html = "";

    html += `
        
        <div id="innlogging">
        <div style="background-color: #0B91E5; height: 30px"></div>
        <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
        <br>
        <br>
        <br>
        <center>
        <br><br><br><br>
        <input value="Epost/telefon"></input>
        <br><br>
        <div class="button-group" style="margin: auto">
          <button onclick="mainHTML.innerHTML = kartside(innloggetBedrift)" style="width:50%; display: flex; justify-content: center">Logg inn</>
        </div> 
        </br>
        <div class="button-group" style="margin: auto">
          <button onclick="mainHTML.innerHTML = regBedrift()" style="width:50%; display: flex; justify-content: center">Registrer deg</>
        </div>
        </br>
        <p onclick="">Glemt passord?</p>
        </br></br></br>
        <div class="button-group" style="margin: auto">
          <button onclick="mainHTML.innerHTML = kartside()" style="width:50%; display: flex; justify-content: center">Besøkende</>
        </div>
        </center>
    </div>
    <div style="background-color: #0B91E5; height: 58px; width: 100%; position: absolute; top: ${640-58}px;"></div>
    `
  return html;
}


//<div style="background-color: #0B91E5; height: 58px; top: ${screen.height-this.height};  "></div>