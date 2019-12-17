function glemtPassord() {
  let html = "";

  html += ` 
  <style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #0B91E5;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>

<div style="background-color: #0B91E5; height: 30px"></div>
        <img src="https://www.betongsentrum.no/wp-content/uploads/2019/09/Bestillno3-1024x123.png" style="width: 360px; height: 50px;">
        <br>


        
<p>Vennligst skriv inn brukernavn eller e-postadresse. Du vil motta en lenke for å opprette et nytt passord via e-post.</p>

<div>
  
    <label for="fname">Brukernavn eller e-postadresse.</label>
    <input type="text" id="fname" name="firstname" placeholder="">

   
  
    <input onclick=(console.log("jeglikerikkebrunost123")) type="submit" value="Få nytt passord"></input>
  
</div>





`;

  return html;
}
