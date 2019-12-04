function minside(innloggetbedrift) {
  let html = "";

  html +=
    "<button onclick='mainHTML.innerHTML = kartside(" +
    innloggetbedrift +
    ")' style='display: inline-block; background-color: #0B91E5; border: none; font-size: 25px; color: white; width: 30px;'>⤶</button>" +
    "</br>" +
    "Kontaktperson: " +
    model.tilbyder[innloggetbedrift].kontaktperson +
    "</br>" +
    "Firmanavn: " +
    model.tilbyder[innloggetbedrift].bedrift +
    "</br>" +
    "Adresse: " +
    model.tilbyder[innloggetbedrift].adresse +
    "</br>" +
    "Orgnr: " +
    model.tilbyder[innloggetbedrift].orgnr +
    "</br>" +
    "Telefon: " +
    model.tilbyder[innloggetbedrift].tlf +
    "</br>" +
    "Email: " +
    model.tilbyder[innloggetbedrift].email +
    "</br>" +
    "<button>Endre Profil</button>" +
    " " +
    "<button>Historikk</button>" +
    " " +
    "<button>Sendte bud</button>" +
    " " +
    "<button class='kartknapper' style='height: 20px; width: 50px; display: inline-block; position: absolute; top: 620px; left: 0;'>0</button>" +
    "<button class='kartknapper' style='height: 20px; width: 50px; display: inline-block; position: absolute; top: 620px; left: 50px;'>1</button>" +
    "<button class='kartknapper' style='height: 20px; width: 50px; display: inline-block; position: absolute; top: 620px; left: 100px;'>2</button>" +
    "<button class='kartknapper' style='height: 20px; width: 50px; display: inline-block; position: absolute; top: 620px; left: 150px;'>3</button>";
  return html;
}
