function kontaktInfo() {

    let html = "";

    html += `
    <div style="background-color: #0B91E5; display: flex;">
  <h2 style="width: 100%; display: inline-block; color: white; text-align: center;">Ta kontakt med kunde</h2></br>
  </div>
  <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
</br></br>
<div style="font-size: 20px; margin-left: 10px;">
    </br>
    <center>Legg til bilder?</center>
    </br>
    Pris: <input></input>
    </br>
    Andre kommentarer/spørsmål: <input style="width: 300px; height: 200px;"></input>
    </div> 
    </br>
      <center><div class="button-group" style="margin: auto">
        <button onclick="mainHTML.innerHTML = bekreftelseSide()" style="width:50%; display: flex; justify-content: center">Send tilbudet</>
      </div></center>
    </br>
      <center><div class="button-group" style="margin: auto">
        <button onclick="mainHTML.innerHTML = sokeSide()" style="width:50%; display: flex; justify-content: center">Avbryt</>
      </div></center>

    `

    html += navbar;

    return html;
}