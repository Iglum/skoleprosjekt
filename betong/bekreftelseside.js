
function bekreftelseSide() {

//denne funksjonen 

  let html = "";

  html += `

  <div style="background-color: #0B91E5; display: flex;">
  <h2 style="width: 100%; display: inline-block; color: white; text-align: center;"></h2></br>
  </div>
  <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
</br></br>
<div style="font-size: 20px; margin-left: 10px;">
    </br><center><h2>Tilbudet er sendt!</h2>
    </br></br>
    Du vil bli kontaktet innen kort tid.
    </div> 
    </br></br>
      <center><div class="button-group" style="margin: auto">
        <button onclick="mainHTML.innerHTML = sokeSide()" style="width:50%; display: flex; justify-content: center">Tilbake til søk</>
      </div></center>
    </br>
      <center><div class="button-group" style="margin: auto">
        <button onclick="mainHTML.innerHTML = sendteTilbud()" style="width:50%; display: flex; justify-content: center">Se mine sendte tilbud</>
      </div></center>
    


`
html += navbar;

return html;
}