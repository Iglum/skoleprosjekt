// let mainHTML = document.getElementById('mainContent').innerHTML;

let model = {
  bruker: [
    {
      id: 0,
      brukertype: ["tilbyder"],
      tilbyder: {
        bedrift: "Betongsentrum AS",
        kontaktperson: "Jim Hansen",
        adresse: "Hvittingfossveien 254, 3089 Holmestrand",
        tlf: ["923 78 455"],
        ansatte: "4",
        hjemmeside: "www.betongsentrum.no",
        orgnr: "921743432",
        faktadr: "Hvittingfossveien 254, 3089 Holmestrand",
        email: "post@betongsentrum.no",
        passord: "123",
        tjenester: {
          snorydding: [true, "spade", "snofreser", "traktor"],
          betong: [true, "forskaling", "gulvstoping"]
        }
      }
    },

    {
      id: 1,
      brukertype: ["tilbyder"],
      tilbyder: {
        bedrift: "Murer Sørensen AS",
        kontaktperson: "Remi Sørensen",
        adresse: "Løkeveien 265, 3160 Stokke",
        tlf: ["486 65 289"],
        ansatte: "1",
        hjemmeside: "undefined",
        orgnr: "921587456",
        faktadr: "Løkeveien 265, 3160 Stokke",
        email: "post@murersorensen.no",
        passord: "123",
        tjenester: {
          snorydding: [true, "spade", "snofreser", "traktor"],
          betong: [false]
        }
      }
    },

    {
      id: 2,
      brukertype: ["tilbyder"],
      tilbyder: {
        bedrift: "Kjetils Betong AS",
        kontaktperson: "Kjetil Karlsen",
        adresse: "Bettånggata 14, 1452 Tong",
        tlf: ["985 54 778"],
        ansatte: "3",
        hjemmeside: "www.kjetilsbetong.no",
        orgnr: "365985412",
        faktadr: "Bettånggata 14, 1452 Tong",
        email: "post@kjertilsbetong.no",
        passord: "123",
        tjenester: {
          snorydding: [true, "spade", "snofreser", "traktor"],
          betong: [true, "forskaling", "gulvstøping"]
        }
      }
    },

    {
      id: 3,
      brukertype: ["kunde"],
      kunde: {
        navn: "Martin Brygmann",
        adresse: "Ryghs vei 23, 0785 Oslo",
        tlf: ["986 62 319"],
        email: "martin@brygmann.no",
        passord: "123"
      }
    },

    {
      id: 4,
      brukertype: ["kunde"],
      kunde: {
        navn: "Pia Amundsen",
        adresse: "Skipperløkka 5, 3260 Larvik",
        tlf: ["900 70 967"],
        email: "titovn99elskerkanin@piczo.no",
        passord: "123"
      }
    },

    {
      id: 5,
      brukertype: ["kunde"],
      kunde: {
        navn: "Per Hansen",
        adresse: "Skinmoveien 2, 3270 Sandefjord",
        tlf: ["492 65 882"],
        email: "per.hansen@gmail.com",
        passord: "123"
      }
    },

    {
      id: 6,
      brukertype: ["kunde"],
      kunde: {
        navn: "Anita Dahl",
        adresse: "Ragnhildrødveien 40, 3160 Stokke",
        tlf: ["447 55 269"],
        email: "anitadahl@gmail.com",
        passord: "123"
      }
    },

    {
      id: 7,
      brukertype: ["kunde"],
      kunde: {
        navn: "Kjell Olsen",
        adresse: "Vennerødveien 20, 3158 Andebu",
        tlf: ["963 58 002"],
        email: "kjell72@hotmail.com",
        passord: "123"
      }
    },

    {
      id: 8,
      brukertype: ["kunde"],
      kunde: {
        navn: "Ole Petter Sjøbrenn",
        adresse: "Skuggedalveien 37, 3270 Larvik",
        tlf: ["416 19 671"],
        email: "sjobrenn98@gmail.com",
        passord: "123"
      }
    }
  ],

  aktiveTjenester: [
    {
      tilbyder: 0,
      omrode: "Vestfold",
      type: "Betongoppdrag"
    }
  ],

  tilgjengeligeJobber: [
    {
      kunde: 4,
      jobber: [
        {
          tittel: "Gulvstøping til Garasje",
          beskrivelse: "Beskrivelse av jobben",
          dato: "13.02.2020",
          omrode: "Holmestrand"
        }
      ]
    },

    {
      kunde: 3,
      jobber: [
        {
          tittel: "Forskalling",
          beskrivelse: "Beskrivelse av jobben",
          dato: "16.01.2020",
          omrode: "Oslo"
        }
      ]
    }
  ],

  forespurteJobber: [
    {
      kunde: "Per Hansen",
      jobber: [
        {
          tittel: "Armering",
          beskrivelse: "*Beskrivelse av jobben*",
          dato: "13.02.2020",
          bedrifterForespurt: [0, 2]
        }
      ]
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
      deltakere: [0, 5],
      meldinger: [
        {
          avsender: 5,
          emne: "Spørsmål ang. støping",
          innhold: "Hei. Jeg lurer på blablabla"
        },

        {
          avsender: 0,
          emne: "Spørsmål ang. støping",
          innhold: "Hei, Per. Dette kan vi fikse blablabla"
        },

        {
          avsender: 5,
          emne: "Spørsmål ang. støping",
          innhold: "Dette höres jo helt rått ut! Dittendittenditten"
        },

        {
          avsender: 0,
          emne: "Spørsmål ang. støping",
          innhold:
            "Dittenduu. Dette blir veldig bra. Vi leverer på følgende adresse: ***, denne datoen, til denne tiden."
        },

        {
          avsender: 5,
          emne: "Spørsmål ang. støping",
          innhold: "Dummydummydummy"
        },

        {
          avsender: 0,
          emne: "Spørsmål ang. støping",
          innhold: "Moar Dummydummydummy"
        },

        {
          avsender: 5,
          emne: "Spørsmål ang. støping",
          innhold: "EvenMoar Dummydummydummy"
        },

        {
          avsender: 0,
          emne: "Spørsmål ang. støping",
          innhold: "Moar Dummydummydummy"
        },

        {
          avsender: 5,
          emne: "Spørsmål ang. støping",
          innhold: "EvenMoar Dummydummydummy"
        }
      ]
    },

    {
      deltakere: [0, 6],
      meldinger: [
        {
          avsender: 6,
          emne: "Platting",
          innhold: "Hei, Jim. Jeg har et spørsmål: blablabla"
        },

        {
          avsender: 0,
          emne: "Platting",
          innhold:
            "Hei, Anita. Vi vil i så fall løse det på følgende måte: blablabla"
        }
      ]
    },

    {
      deltakere: [0, 7],
      meldinger: [
        {
          avsender: 7,
          emne: "Misfornøyd",
          innhold:
            "Hei. Jeg er ikke fornøyd med jobben dere gjorde hos blablabla"
        },

        {
          avsender: 0,
          emne: "Misfornøyd",
          innhold:
            "Hei, Kjell. Synd å høre at du ikke ble fornøyd. Hva kan vi gjøre for blablabla"
        }
      ]
    },

    {
      deltakere: [3, 8],
      meldinger: [
        {
          avsender: 8,
          emne: "Fett",
          innhold: "Hallå, brodern!"
        },

        {
          avsender: 3,
          emne: "Fett",
          innhold: "Hallå. Trenger du no betong?"
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
    }
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

  svg: [
    {
      navn: "kart",
      svg: `
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.25 13C29.25 7.62125 24.8788 3.25 19.5 3.25C14.1213 3.25 9.75 7.62125 9.75 13C9.75 20.3125 19.5 30.875 19.5 30.875C19.5 30.875 29.25 20.3125 29.25 13ZM16.25 13C16.25 11.2125 17.7125 9.75 19.5 9.75C21.2875 9.75 22.75 11.2125 22.75 13C22.75 14.7875 21.3038 16.25 19.5 16.25C17.7125 16.25 16.25 14.7875 16.25 13ZM8.125 32.5V35.75H30.875V32.5H8.125Z"
                  fill="white" />
              </svg>
              `
    },

    {
      navn: "svgsokikon",
      svg: `
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.25 21H22.065L21.645 20.595C23.115 18.885 24 16.665 24 14.25C24 8.865 19.635 4.5 14.25 4.5C8.865 4.5 4.5 8.865 4.5 14.25C4.5 19.635 8.865 24 14.25 24C16.665 24 18.885 23.115 20.595 21.645L21 22.065V23.25L28.5 30.735L30.735 28.5L23.25 21ZM14.25 21C10.515 21 7.5 17.985 7.5 14.25C7.5 10.515 10.515 7.5 14.25 7.5C17.985 7.5 21 10.515 21 14.25C21 17.985 17.985 21 14.25 21Z"
                  fill="white" />
              </svg>
              `
    },

    {
      navn: "svgmelding",
      svg: `
              <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.8333 3H6.16668C4.47084 3 3.09876 4.35 3.09876 6L3.08334 33L9.25001 27H30.8333C32.5292 27 33.9167 25.65 33.9167 24V6C33.9167 4.35 32.5292 3 30.8333 3ZM27.75 21H9.25001V18H27.75V21ZM27.75 16.5H9.25001V13.5H27.75V16.5ZM27.75 12H9.25001V9H27.75V12Z"
                  fill="white" />
              </svg>
              `
    },

    {
      navn: "svgminside",
      svg: `
              <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5 18C20.7229 18 23.3333 15.315 23.3333 12C23.3333 8.685 20.7229 6 17.5 6C14.2771 6 11.6666 8.685 11.6666 12C11.6666 15.315 14.2771 18 17.5 18ZM17.5 21C13.6062 21 5.83331 23.01 5.83331 27V30H29.1666V27C29.1666 23.01 21.3937 21 17.5 21Z"
                  fill="white" />
              </svg>
              `
    },

    {
      navn: "svgbilbord",
      svg: `
 
  `
    }
  ]
};

let innloggetBruker;
let innlogget;

let knappebredde = 90;
let knappehoyde = 58;
let bildehoyde = 640;

let navbar1 = `
<button onclick="mainHTML.innerHTML = kartside(${innloggetBruker})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde -
  knappehoyde}px; left: ${0 * knappebredde}px;">${model.svg[0].svg}</button>
            <button onclick="mainHTML.innerHTML = sokeSide(${innloggetBruker})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde -
  knappehoyde}px; left: ${1 * knappebredde}px;">${model.svg[1].svg}</button>
            <button onclick="mainHTML.innerHTML = chatside(${innloggetBruker})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde -
  knappehoyde}px; left: ${2 * knappebredde}px;">${model.svg[2].svg}</button>
            <button onclick="mainHTML.innerHTML = minside(${innloggetBruker})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde -
  knappehoyde}px; left: ${3 * knappebredde}px;">${model.svg[3].svg}</button>
`;

let navbar = `
<div  class="navbar">
<button onclick="mainHTML.innerHTML = kartside(${innloggetBruker})" class="kartknapper buttonsize">${model.svg[0].svg}</button>
<button onclick="mainHTML.innerHTML = sokeSide(${innloggetBruker})" class="kartknapper buttonsize">${model.svg[1].svg}</button>
<button onclick="mainHTML.innerHTML = chatside(${innloggetBruker})" class="kartknapper buttonsize">${model.svg[2].svg}</button>
<button onclick="mainHTML.innerHTML = minside(${innloggetBruker})" class="kartknapper buttonsize">${model.svg[3].svg}</button>
</div>
`;

let navbarlite = `
  
  <div class="navbar kartknapper">
  <a href="" class="active buttonsize">${model.svg[0].svg}</a>
  <a href="#home" class="buttonsize">${model.svg[1].svg}</a>
  <a href="#home" class="buttonsize">${model.svg[2].svg}</a>
  <a href="#home" class="buttonsize">${model.svg[3].svg}</a>
  </div>
  
  `;

// !!! NAV BAR INNLOGGET!!! //
//<button onclick="mainHTML.innerHTML = kartside(${innloggetBruker})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(0 * knappebredde)}px;">${svgkartikon}</button>
//    <button class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(1 * knappebredde)}px;">${svgsokikon}</button>
//    <button onclick="mainHTML.innerHTML = chatside(${innloggetBruker})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(2 * knappebredde)}px;">${svgmelding}</button>
//    <button onclick="mainHTML.innerHTML = minside(${innloggetBruker})" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(3 * knappebredde)}px;">${svgminside}</button>
//            </div >

// !!! NAV BAR IKKE INNLOGGET!!! //
//<button onclick="mainHTML.innerHTML = kartside(innloggetBruker)" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde * 2}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(0 * knappebredde)}px;">Logg inn</button>
//    <button onclick="mainHTML.innerHTML = regBedrift()" class="kartknapper" style="height: ${knappehoyde}px; width: ${knappebredde * 2}px; display: inline-block; position: absolute; top: ${bildehoyde - knappehoyde}px; left: ${(1 * (knappebredde*2))}px;">Registrer deg</button>
