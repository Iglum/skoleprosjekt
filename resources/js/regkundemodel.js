
function regKundeModel() {

    let navn = document.getElementById('rknavn').value;
    let adresse = document.getElementById('rkadresse').value;
    let mail = document.getElementById('rkemail').value;
    let tlf = document.getElementById('rktlf').value;
    let pw1 = document.getElementById('rkpw1').value;
    let pw2 = document.getElementById('rkpw2').value



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