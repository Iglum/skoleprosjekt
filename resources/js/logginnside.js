// let mainhtml = document.getElementById("mainContent");
//Denne funksjonen/siden har onclicks som gjør at man kommer seg innpå registrering av bedrift, som besøkende som da sender
//- deg til det samme som man gjør når man trykket "logg inn" bare at man da får 2 alternativer LOGG INN eller REGISTRER.
function loggInnSide() {
  // console.log(model["bruker"]);
  let html = "";

  html += `
        <div id="innlogging">
        <center>
        <div style="background-color: #0B91E5; height: 30px"></div>
        <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
        <br>
        <br>
        <br>
        <br><br><br>
        <input id="innloggInput" type="text" value="post@betongsentrum.no" style="width: 70%"></input>
        </br>
        <input id="passordInput" type="password" value="123" style="width: 70%"></input>
        <br><br>

        <div class="button-group" style="margin: auto">
        <button onclick="loggInn()" style="width:50%; display: flex; justify-content: center">Logg inn</>
        </div> 
        </br>
        <div class="button-group" style="margin: auto">
          <button onclick="mainHTML.innerHTML = regBruker()" style="width:50%; display: flex; justify-content: center">Registrer deg</>
        </div>
        </br>
        <p onclick="mainHTML.innerHTML = glemtPassord()">Glemt passord?</p>
        </br></br></br>
        <div class="button-group" style="margin: auto">
          <button onclick="mainHTML.innerHTML = kartside()" style="width:50%; display: flex; justify-content: center">Besøkende</>
        </div>

        </center>
    </div>
    <div class="navbar" style="height: 58px;"></div>
    `;
  return html;
}

let brukertype = "";

// console.log(document.getElementById("radioknapp").value);

function tomInput(felt) {
  felt.value = "";
}

function loggInn() {
  let innloggInput = document.getElementById("innloggInput").value;
  let passordInput = document.getElementById("passordInput").value;
  let mail = "";
  let passord = "";

  for (i = 0; i < model.bruker.length; i++) {
    mail = model.bruker[i][model.bruker[i].brukertype].email;
    passord = model.bruker[i][model.bruker[i].brukertype].passord;

    if (mail == innloggInput && passord == passordInput) {
      innloggetBruker = i;
      innlogget = model.bruker[i].brukertype;
      break;
    }
  }

  if (innlogget == "kunde" || innlogget == "tilbyder") {
    mainHTML.innerHTML = kartside();
  } else {
    console.log("Feil epost og/eller passord");
  }
}

//<div style="background-color: #0B91E5; height: 58px; top: ${screen.height-this.height};  "></div>
