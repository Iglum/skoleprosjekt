// let mainHTML = document.getElementById('mainContent').innerHTML;

let model = {

    tilbyder: [
        {
            id: 0,
            bedrift: "Betongsentrum AS",
            kontaktperson: "Jim Hansen",
            adresse: "Hvittingfossveien 254, 3089 Holmestrand",
            tlf: ["923 78 455"],
            ansatte: "4",
            hjemmeside: "www.betongsentrum.no",
            orgnr: "921743432",
            faktadr: "Hvittingfossveien 254, 3089 Holmestrand",
            email: "post@betongsentrum.no",
            tjenester: {
                snorydding: [true, 'spade', 'snofreser', 'traktor'],
                betong: [true, 'forskaling', 'gulvstoping'],
            }
        },

        {
            id: 1,
            bedrift: "Murer Sørensen AS",
            kontaktperson: "Remi Sørensen",
            adresse: "Løkeveien 265, 3160 Stokke",
            tlf: ["486 65 289"],
            ansatte: "1",
            hjemmeside: "undefined",
            orgnr: "921587456",
            faktadr: "Løkeveien 265, 3160 Stokke",
            email: "post@murersorensen.no",
            tjenester: {
                snorydding: [true, 'spade', 'snofreser', 'traktor'],
                betong: [false],
            }
        },

        {
            id: 2,
            bedrift: "Kjetils Betong AS",
            kontaktperson: "Kjetil Karlsen",
            adresse: "Bettånggata 14, 1452 Tong",
            tlf: ["985 54 778"],
            ansatte: "3",
            hjemmeside: "www.kjetilsbetong.no",
            orgnr: "365985412",
            faktadr: "Bettånggata 14, 1452 Tong",
            email: "post@kjertilsbetong.no",
            tjenester: {
                snorydding: [true, 'spade', 'snofreser', 'traktor'],
                betong: [true, "forskaling", "gulvstøping"],
            }
        },
    ],


    aktiveJobber: [
        {
            tilbyder: 0,
            omrode: "Vestfold",
            type: "Betongoppdrag"
        }
    ],


    historikk: [
        {
            bedrift: 0,
            jobber: [
                {
                    dato: "25.06.2019",
                    status: "Avslått",
                    tittel: "Armering",
                    beskrivelse: "*Beskrivelse av jobb*"
                },

                {
                    dato: "16.08.2019",
                    status: "Fullført",
                    tittel: "Gulvstøping Garasje",
                    beskrivelse: "*Beskrivelse av jobb*"
                },

                {
                    dato: "04.09.2019",
                    status: "Fullført",
                    tittel: "Armering av garasje i Hof",
                    beskrivelse: "*Beskrivelse av jobb*"
                }
            ]
        },


        {
            bedrift: 2,
            jobber: [
                {
                    dato: "23.06.2019",
                    status: "Fullført",
                    tittel: "Forskaling til støp i Hof",
                    beskrivelse: "*Beskrivelse av jobb*"
                }
            ]
        }
    ],

    chat: [
        {
            bedrift: 0,
            personer: [
                {
                    navn: "Per Hansen",
                    meldinger: [
                        {
                            avsender: "Per Hansen",
                            emne: "Spørsmål ang. støping",
                            innhold: "Hei. Jeg lurer på blablabla"
                        },

                        {
                            avsender: 0,
                            emne: "RE: Spørsmål ang. støping",
                            innhold: "Hei, Per. Dette kan vi fikse blablabla"
                        }
                    ]
                },

                {
                    navn: "Anita Dahl",
                    meldinger: [
                        {
                            avsender: "Anita Dahl",
                            emne: "Platting",
                            innhold: "Hei, Jim. Jeg har et spørsmål: blablabla"
                        },

                        {
                            avsender: 0,
                            emne: "RE: Platting",
                            innhold: "Hei, Anita. Vi vil i så fall løse det på følgende måte: blablabla"
                        }
                    ]
                },

                {
                    navn: "Kjell Olsen",
                    meldinger: [
                        {
                            avsender: "Kjell Olsen",
                            emne: "Misfornøyd",
                            innhold: "Hei. Jeg er ikke fornøyd med jobben dere gjorde hos blablabla"
                        },

                        {
                            avsender: 0,
                            emne: "RE: Misfornøyd",
                            innhold: "Hei, Kjell. Synd å høre at du ikke ble fornøyd. Hva kan vi gjøre for blablabla"
                        }
                    ]
                }
            ]
        }
    ],


    sendteTilbud: [
        {
            bedrift: 0,
            jobber: [
                {
                    dato: "29.12.2019",
                    status: "Venter...",
                    tittel: "Støping byggeplass",
                    beskrivelse: "*Beskrivelse av jobb*"
                },

                {
                    dato: "08.01.2020",
                    status: "Venter...",
                    tittel: "Gulvstøping Garasje",
                    beskrivelse: "*Beskrivelse av jobb*"
                }
            ]
        },
    ],


    rangering: [
        {
            bedrift: 0,
            stjerner: 4,
            vurderinger: 1
        },

        {
            bedrift: 2,
            stjerner: 2,
            vurderinger: 1
        }
    ],


    kunde: [
        {
            navn: "Martin Brygmann",
            adresse: "Ryghs vei 23, 0785 Oslo",
            tlf: "986 62 319"
        },

        {
            navn: "Pia Amundsen",
            adresse: "Skipperløkka 5, 3260 Larvik",
            tlf: "900 70 967"
        }
    ]

}