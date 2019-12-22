function lagreEndringer(){

    let navn = document.getElementById('endrenavn').value;
    let adresse = document.getElementById('endreadresse').value
    let tlf = document.getElementById('endretlf').value;
    let email = document.getElementById('endreemail').value;
    let nyttpassord = document.getElementById('endrepassord').value;

    if (model.bruker[innloggetBruker].brukertype == 'tilbyder') {
        console.log('tilbyder');
        let firmanavn = document.getElementById('endrebedrift').value;
        let faktadresse = document.getElementById('endrefaktadresse').value;
        let orgnr = document.getElementById('endreorgnr').value;


        if (navn != '' && adresse != '' && tlf != '' && email != '' && firmanavn != '' && faktadresse != '' && orgnr != '') {
            model.bruker[innloggetBruker][innlogget].kontaktperson = navn;
            model.bruker[innloggetBruker][innlogget].adresse = adresse;
            model.bruker[innloggetBruker][innlogget].tlf[0] = tlf;
            model.bruker[innloggetBruker][innlogget].email = email;
            model.bruker[innloggetBruker][innlogget].bedrift = firmanavn;
            model.bruker[innloggetBruker][innlogget].faktadr = faktadresse;
            model.bruker[innloggetBruker][innlogget].orgnr = orgnr;

            mainHTML.innerHTML = minside();
        }

    } else if (model.bruker[innloggetBruker].brukertype == 'kunde') {
        if (navn != '' && adresse != '' && tlf != '' && email != '') {
            model.bruker[innloggetBruker][innlogget].navn = navn;
            model.bruker[innloggetBruker][innlogget].adresse = adresse;
            model.bruker[innloggetBruker][innlogget].tlf[0] = tlf;
            model.bruker[innloggetBruker][innlogget].email = email;
            mainHTML.innerHTML = minside();

        }
    }

    if (nyttpassord != ''){
        model.bruker[innloggetBruker][innlogget].passord = nyttpassord;
    }

}
