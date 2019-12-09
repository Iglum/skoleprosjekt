function chatside(innloggetbedrift) {
    let html = "";

    html += `
<div style="background-color: #0B91E5; display: flex;">
  
  <h2 style="width: 100%; display: inline-block; color: white;">Chat</h2></br>
  </div>



<div onclick="mainHTML.innerHTML = meldinger(${innloggetbedrift}, 'Per Hansen')" style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
                <h2>${model.chat[0].personer[0].navn}</h2>
                <ul>
                <li></span></li>
                <li><h3>Emne:</h3> ${
        model.chat[0].personer[0].meldinger[0].emne
        }</li>
                </br>
               
                </ul>
            </div>
            </br>
        
            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
                <h2>${model.chat[0].personer[1].navn}</h2>
                <ul>
                <li></span></li>
                <li><h3>Emne:</h3> ${
        model.chat[0].personer[1].meldinger[0].emne
        }</li>
                </br>
               
                </ul>
            </div>
            </br>
     
            <div style="background-color: #F8F8F8; border: 1px solid #C6C6C6;">
                <h2>${model.chat[0].personer[2].navn}</h2>
                <ul>
                <li></span></li>
                <li><h3>Emne:</h3> ${
        model.chat[0].personer[2].meldinger[0].emne
        }</li>
                </br>
               
                </ul>
            </div>
            </br>
            </div>
`;

    html += navbar;

    return html;
}
