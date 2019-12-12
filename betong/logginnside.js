// let mainhtml = document.getElementById("mainContent");
//Denne funksjonen/siden har onclicks som gjør at man kommer seg innpå registrering av bedrift, som besøkende som da sender
//- deg til det samme som man gjør når man trykket "logg inn" bare at man da får 2 alternativer LOGG INN eller REGISTRER.
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
        <br><br><br>
        <input id="innloggInput" type="text" value="Epost/telefon" onclick="tomInput(this)" style="width: 70%"></input>
        <br><br>
        <input id="radioknapp" type="radio" name="brukertype" value="kunde"> Kunde
        <input id="radio2" type="radio" name="brukertype" value="tilbyder"> Tilbyder
        <br>

        <div class="button-group" style="margin: auto">
          <button onclick="loggInn(), mainHTML.innerHTML = kartside()" style="width:50%; display: flex; justify-content: center">Logg inn</>
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

let brukertype = "";

// console.log(document.getElementById("radioknapp").value);

function tomInput(felt){
  felt.value = "";
}

function loggInn(){
  let innloggInput = document.getElementById("innloggInput").value;
  console.log(innloggInput);
  // console.log(document.getElementById("radioknapp").checked);

  // for (i = 0; i < model.bruker)

}

//<div style="background-color: #0B91E5; height: 58px; top: ${screen.height-this.height};  "></div>