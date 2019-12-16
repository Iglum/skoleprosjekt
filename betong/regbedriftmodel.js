function regBedriftModel() {

    let bedrift = document.getElementById('rbbedrift').value;
    let kontaktperson = document.getElementById('rbkontaktperson').value;
    let adresse = document.getElementById('rbadresse').value;
    let tlf = document.getElementById('rbtlf').value;
    let ansatte = document.getElementById('rbansatte').value;
    let hjemmeside = document.getElementById('rbhjemmeside').value;
    let orgnr = document.getElementById('rborgnr').value;
    let faktadr = document.getElementById('rbfaktadr').value;
    let email= document.getElementById('rbemail').value;
    let pw1 = document.getElementById('rbpw1').value;
    let pw2 = document.getElementById('rbpw2').value;


    if (bedrift != '' && kontaktperson != '' && adresse != '' && tlf != '' && ansatte != '' && orgnr != '' && faktadr != '' && email != '' && pw1 === pw2) {
        console.log('y');

        model.bruker[model.bruker.length] =
        {
            id: model.bruker.length,
            brukertype: ['tilbyder'],
            tilbyder: {
                bedrift: bedrift,
                kontaktperson: kontaktperson,
                adresse: adresse,
                tlf: ['' + tlf],
                ansatte: '' + ansatte,
                hjemmeside: hjemmeside,
                orgnr: '' + orgnr,
                faktadr: faktadr,
                email: email,
                passord: '' + pw1,
                //tjenester: {
                //    snorydding: [true, "spade", "snofreser", "traktor"],
                //    betong: [true, "forskaling", "gulvstøping"]
                //}
            }
        }
        innloggetBruker = model.bruker.length - 1;
        innlogget = 'tilbyder';

        mainHTML.innerHTML = kartside();
    }

}