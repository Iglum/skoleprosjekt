
function regKundeModel() {

    let navn = document.getElementById('rbnavn').value;
    let adresse = document.getElementById('rbadresse').value;
    let mail = document.getElementById('rbemail').value;
    let tlf = document.getElementById('rbtlf').value;
    let pw1 = document.getElementById('rbpw1').value;
    let pw2 = document.getElementById('rbpw2').value



    if (navn != '' && adresse != '' && mail != '' && tlf != '' && pw1 === pw2) {
        model.bruker[model.bruker.length] =
        {
            id: model.bruker.length,
            brukertype: ['kunde'],
            kunde: {
                navn: navn,
                adresse: adresse,
                tlf: ['' + tlf],
                email: mail,
                passord: '' + pw1
            }
        }
        innloggetBruker = model.bruker.length-1;
        innlogget = 'kunde';

        mainHTML.innerHTML = kartside();
    }

    
}




//{
//    id: 7,
//        brukertype: ['kunde'],
//            kunde: {
//        navn: "Kjell Olsen",
//            adresse: "Vennerødveien 20, 3158 Andebu",
//                tlf: ["963 58 002"],
//                    email: "kjell72@hotmail.com",
//                        passord: "123"
//    }
//},