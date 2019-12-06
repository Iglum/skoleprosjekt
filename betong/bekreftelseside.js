function bekreftelse(innloggetbedrift) {
  let html = "";

  html += `

<button onclick="mainHTML.innerHTML = minside(${innloggetbedrift})" style="display: inline-block; background-color: #0B91E5; border: none; font-size: 25px; color: white; width: 30px;">⤶</button>
<div style="background-color: #0B91E5; display: flex;">
  <h2 style="width: 100%; display: inline-block; color: white;">Bekreftelse</h2></br>
  </div>
</br>
<h3>Tilbudet er sendt!</h3>
</br>
Kunde: 



`

return html;
}
