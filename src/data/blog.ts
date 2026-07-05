export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  city: "Rhenen" | "Lienden" | "Veenendaal" | "Tiel" | "Betuwe";
  date: string;
  image: string;
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  // ============ RHENEN (3) ============
  {
    slug: "vloerenspecialist-rhenen-pvc-visgraat",
    title: "Vloerenspecialist in Rhenen: PVC visgraat laten leggen door de lokale vakman",
    metaTitle: "PVC Visgraat Vloer Laten Leggen in Rhenen | MOVT Projects",
    metaDescription:
      "PVC visgraat vloer nodig in Rhenen? MOVT Projects is dé lokale vloerenspecialist, gevestigd in de regio. Gratis inmeting en advies aan huis. Vraag een offerte aan.",
    excerpt:
      "Op zoek naar een vloerenspecialist in Rhenen? MOVT Projects legt PVC visgraat vloeren door heel Rhenen en omgeving — van de binnenstad tot Elst en Achterberg.",
    city: "Rhenen",
    date: "2026-07-01",
    image: "/projects/residential/woonkamer-visgraat-licht.jpg",
    sections: [
      {
        paragraphs: [
          "Een nieuwe vloer is de basis van uw interieur. En als u in Rhenen of omgeving woont, hoeft u daarvoor niet ver te zoeken: MOVT Projects is gevestigd in de regio en legt wekelijks vloeren in Rhenen, Elst, Achterberg en de rest van de Utrechtse Heuvelrug.",
          "PVC visgraat is op dit moment veruit de populairste keuze onder onze klanten in Rhenen. En dat is niet gek: het klassieke visgraatpatroon past prachtig bij zowel de karakteristieke oudere woningen in de binnenstad als bij nieuwbouw.",
        ],
      },
      {
        heading: "Waarom PVC visgraat zo goed past bij woningen in Rhenen",
        paragraphs: [
          "Rhenen kent een gevarieerd woningaanbod: van monumentale panden rond de Cunerakerk tot jaren '70 wijken en moderne nieuwbouw. PVC visgraat is in al deze woningen toepasbaar. Het is warm, geluiddempend, waterbestendig en uitstekend te combineren met vloerverwarming — ideaal voor wie zijn woning verduurzaamt.",
          "Bovendien is PVC slijtvast en onderhoudsarm. Met een gezin, huisdieren of veel aanloop blijft uw vloer er jarenlang strak uitzien.",
        ],
        list: [
          "Geschikt voor vloerverwarming — belangrijk bij verduurzaming",
          "Waterbestendig: ook voor keuken en badkamer",
          "Geluiddempend — prettig in hoekwoningen en appartementen",
          "Verkrijgbaar in tientallen kleuren en legpatronen",
        ],
      },
      {
        heading: "Van inmeting tot oplevering: zo werkt het",
        paragraphs: [
          "Omdat wij in de regio gevestigd zijn, staan we snel bij u op de stoep. We komen gratis inmeten, adviseren over kleur en patroon, en u ontvangt binnen 48 uur een heldere offerte. Het egaliseren en leggen plannen we strak in — een gemiddelde woonkamer in Rhenen is binnen twee tot drie dagen voorzien van een perfect gelegde visgraatvloer.",
          "Bekijk onze PVC visgraat dienstenpagina voor alle mogelijkheden, of neem direct contact op voor een vrijblijvend adviesgesprek bij u thuis in Rhenen.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost een PVC visgraat vloer in Rhenen?",
        answer:
          "Reken op €70 tot €110 per m² inclusief egaliseren en leggen, afhankelijk van het gekozen merk en de staat van de ondervloer. Wij meten gratis in en geven een exacte prijs vooraf.",
      },
      {
        question: "Werken jullie ook in Elst en Achterberg?",
        answer:
          "Ja, wij werken in heel Rhenen en de omliggende kernen: Elst (Utr.), Achterberg, Remmerden en de rest van de gemeente.",
      },
      {
        question: "Hoe snel kunnen jullie starten?",
        answer:
          "Omdat we in de regio gevestigd zijn, kunnen we meestal binnen twee tot drie weken starten. Spoed? Bel ons — vaak is er meer mogelijk dan u denkt.",
      },
    ],
  },
  {
    slug: "gietvloer-rhenen-prijzen-mogelijkheden",
    title: "Gietvloer in Rhenen: prijzen, mogelijkheden en de aanpak van MOVT",
    metaTitle: "Gietvloer Rhenen | Prijzen & Mogelijkheden | MOVT Projects",
    metaDescription:
      "Gietvloer laten storten in Rhenen? Lokale specialist MOVT Projects vertelt u alles over prijzen, mogelijkheden en onderhoud. Gratis adviesgesprek aan huis.",
    excerpt:
      "Een naadloze gietvloer geeft uw woning of bedrijfspand in Rhenen een strakke, moderne uitstraling. Lees alles over prijzen, mogelijkheden en onze aanpak.",
    city: "Rhenen",
    date: "2026-06-24",
    image: "/projects/epoxy/gietvloer-wit-kantoor.jpg",
    sections: [
      {
        paragraphs: [
          "Strak, naadloos en luxe: de gietvloer is niet meer weg te denken uit het moderne interieur. Ook in Rhenen kiezen steeds meer woningeigenaren en bedrijven voor een gietvloer. MOVT Projects — gevestigd in de regio Rhenen — stort gietvloeren in woningen, kantoren en winkels door de hele gemeente.",
        ],
      },
      {
        heading: "Wat kost een gietvloer in Rhenen?",
        paragraphs: [
          "De prijs van een gietvloer hangt af van het type (PU-gietvloer of epoxy), de oppervlakte en de staat van de ondervloer. Als richtprijs voor woningen in Rhenen hanteren wij €90 tot €140 per m², volledig inclusief: egaliseren, primer, gietvloer en toplaag.",
          "Grotere oppervlaktes zijn per m² voordeliger. Voor bedrijfspanden maken we altijd een maatwerkofferte — neem contact op voor een vrijblijvende prijsopgave.",
        ],
      },
      {
        heading: "PU-gietvloer of epoxy: wat past bij u?",
        paragraphs: [
          "Voor woningen adviseren wij vrijwel altijd een PU-gietvloer: warmer, elastischer en comfortabeler dan epoxy. Epoxy is harder en chemisch resistent — perfect voor garages, werkplaatsen en commerciële ruimtes.",
        ],
        list: [
          "PU-gietvloer: woonkamers, keukens, badkamers — warm en comfortabel",
          "Epoxy: garages, praktijkruimtes, horeca — extreem slijtvast",
          "Beide naadloos, hygiënisch en geschikt voor vloerverwarming",
        ],
      },
      {
        heading: "Lokale aanpak, landelijk niveau",
        paragraphs: [
          "Een gietvloer storten is écht vakwerk: de ondergrond moet perfect voorbereid zijn en het gieten luistert nauw. Onze specialisten hebben honderden vloeren gestort — van woonkamers in Rhenen tot complete kantoorpanden. Bekijk onze gietvloeren pagina of vraag direct een gratis adviesgesprek aan.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe lang duurt het storten van een gietvloer?",
        answer:
          "Gemiddeld 3 tot 5 dagen inclusief voorbereiding en uitharding. Na 7 dagen is de vloer volledig belastbaar.",
      },
      {
        question: "Kan een gietvloer over mijn bestaande tegels?",
        answer:
          "In veel gevallen wel. Wij beoordelen de ondergrond tijdens de gratis inmeting in Rhenen en adviseren de beste opbouw.",
      },
      {
        question: "Is een gietvloer geschikt voor vloerverwarming?",
        answer: "Ja, uitstekend zelfs. De naadloze vloer geleidt warmte gelijkmatig door de hele ruimte.",
      },
    ],
  },
  {
    slug: "trap-renoveren-rhenen",
    title: "Trap renoveren in Rhenen: van gedateerd naar modern in één dag",
    metaTitle: "Trap Renovatie Rhenen | Binnen 1 Dag Klaar | MOVT Projects",
    metaDescription:
      "Uw trap renoveren in Rhenen? MOVT Projects bekleedt uw trap met PVC of hout in slechts 1-2 dagen. Lokale specialist, gratis advies aan huis. Bekijk de mogelijkheden.",
    excerpt:
      "Een gedateerde trap haalt uw hele interieur naar beneden. MOVT Projects renoveert trappen in Rhenen binnen één tot twee dagen — zonder sloopwerk.",
    city: "Rhenen",
    date: "2026-06-17",
    image: "/projects/residential/hal-visgraat-licht.jpg",
    sections: [
      {
        paragraphs: [
          "U heeft een prachtige nieuwe vloer laten leggen, maar de trap is nog van de vorige eeuw? Dat kan anders. MOVT Projects renoveert trappen in heel Rhenen en omgeving: wij bekleden uw bestaande trap met hoogwaardig PVC of hout, perfect passend bij uw vloer.",
          "Geen sloopwerk, geen weken overlast — een gemiddelde trap is binnen één tot twee dagen compleet getransformeerd.",
        ],
      },
      {
        heading: "Waarom trap renovatie in plaats van vervangen?",
        paragraphs: [
          "Een complete nieuwe trap kost al snel €5.000 tot €10.000 en betekent dagenlang breekwerk. Bij trap renovatie blijft de constructie intact: wij bekleden de treden, stootborden en eventueel de leuning. Het resultaat oogt als nieuw, voor een fractie van de prijs.",
        ],
        list: [
          "Klaar binnen 1-2 dagen, zonder sloopwerk",
          "Naadloze aansluiting op uw nieuwe PVC- of laminaatvloer",
          "Anti-slip toplaag voor veiligheid — ideaal met kinderen",
          "Inclusief LED-verlichting mogelijk voor extra sfeer",
        ],
      },
      {
        heading: "Trap + vloer combineren: één stijl, één planning",
        paragraphs: [
          "De mooiste resultaten ontstaan als trap en vloer in dezelfde stijl worden uitgevoerd. Veel klanten in Rhenen combineren daarom een PVC visgraat vloer met een bijpassende traprenovatie. Wij plannen beide in één project — dat scheelt tijd én geld.",
          "Benieuwd wat er mogelijk is met uw trap? Vraag een gratis adviesgesprek aan en wij komen langs in Rhenen, Elst of Achterberg.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost een traprenovatie in Rhenen?",
        answer:
          "Een volledige traprenovatie kost gemiddeld €800 tot €2.500, afhankelijk van het aantal treden en het gekozen materiaal. Combineert u met een vloer, dan hanteren wij een combitarief.",
      },
      {
        question: "Kan mijn open trap ook gerenoveerd worden?",
        answer:
          "Ja, ook open trappen bekleden wij — desgewenst maken we hem dicht met stootborden voor een moderne uitstraling.",
      },
    ],
  },

  // ============ LIENDEN (3) ============
  {
    slug: "vloer-laten-leggen-lienden-betuwe",
    title: "Vloer laten leggen in Lienden? Kies de specialist uit de Betuwe",
    metaTitle: "Vloer Laten Leggen in Lienden | Lokale Specialist | MOVT Projects",
    metaDescription:
      "Vloer laten leggen in Lienden? MOVT Projects is uw lokale vloerenspecialist in de Betuwe. PVC, laminaat, visgraat en gietvloeren. Gratis inmeting, snel gepland.",
    excerpt:
      "MOVT Projects is dé vloerenspecialist van Lienden en de Betuwe. Van PVC visgraat tot gietvloer — lokaal, snel en vakkundig gelegd.",
    city: "Lienden",
    date: "2026-07-03",
    image: "/projects/residential/woonkamer-visgraat-donker.jpg",
    sections: [
      {
        paragraphs: [
          "Woont u in Lienden en zoekt u een betrouwbare vloerenlegger? Dan hoeft u niet naar de grote stad. MOVT Projects is gevestigd in de regio Rhenen-Lienden en legt vloeren door de hele Betuwe: Lienden, Ommeren, Ingen, Kesteren, Ochten en omstreken.",
          "Als lokaal bedrijf kennen we de woningen hier. Van karakteristieke boerderijen en dijkwoningen tot nieuwbouw — elk type woning vraagt om een eigen aanpak van ondervloer en materiaalkeuze.",
        ],
      },
      {
        heading: "Alle vloertypes onder één dak",
        paragraphs: [
          "Of u nu valt voor de warme uitstraling van PVC visgraat, het gemak van laminaat of de strakke luxe van een gietvloer: MOVT Projects levert en legt het allemaal. U kiest, wij regelen de rest — inclusief egaliseren, plinten en afwerking.",
        ],
        list: [
          "PVC vloeren en PVC visgraat — dé trend van nu",
          "Laminaat in alle stijlen en prijsklassen",
          "Naadloze gietvloeren (PU en epoxy)",
          "Tapijttegels voor kantoor en praktijk",
          "Trap renovatie en behang: alles in één project",
        ],
      },
      {
        heading: "Waarom klanten in Lienden voor MOVT kiezen",
        paragraphs: [
          "Korte lijnen, eerlijke prijzen en vakwerk. U belt of appt ons, we komen dezelfde week nog gratis inmeten en u weet binnen 48 uur waar u aan toe bent. Geen callcenter, geen wachttijden — gewoon een specialist uit uw eigen regio die zijn werk serieus neemt.",
          "Vraag vandaag nog een vrijblijvende offerte aan — wij komen graag bij u langs in Lienden.",
        ],
      },
    ],
    faq: [
      {
        question: "In welke plaatsen rond Lienden werken jullie?",
        answer:
          "In de hele Betuwe: Lienden, Ommeren, Ingen, Kesteren, Ochten, Opheusden, Maurik en verder. Ook Rhenen, Veenendaal en Tiel behoren tot ons kerngebied.",
      },
      {
        question: "Hoe snel kunnen jullie een vloer leggen in Lienden?",
        answer:
          "Meestal binnen twee tot drie weken na akkoord. De uitvoering zelf duurt — afhankelijk van de oppervlakte — één tot drie dagen.",
      },
      {
        question: "Nemen jullie ook de oude vloer mee?",
        answer: "Ja, wij verwijderen en voeren uw oude vloer af als u dat wilt. Dat nemen we mee in de offerte.",
      },
    ],
  },
  {
    slug: "pvc-vloer-lienden",
    title: "PVC vloer in Lienden: waarom uw buren al voor MOVT kozen",
    metaTitle: "PVC Vloer Lienden | Visgraat & Recht | MOVT Projects",
    metaDescription:
      "PVC vloer kopen en laten leggen in Lienden? MOVT Projects levert A-merk PVC vloeren inclusief vakkundige legservice. Lokaal bedrijf, gratis advies aan huis.",
    excerpt:
      "PVC is de populairste vloerkeuze in Lienden — waterbestendig, stil en perfect voor vloerverwarming. Ontdek waarom MOVT dé PVC-specialist van de Betuwe is.",
    city: "Lienden",
    date: "2026-06-26",
    image: "/projects/residential/woonkamer-visgraat-grijs.jpg",
    sections: [
      {
        paragraphs: [
          "In steeds meer woonkamers in Lienden ligt een PVC vloer — en dat is geen toeval. PVC combineert de warme uitstraling van hout met eigenschappen die echt hout niet heeft: waterbestendig, krasvast, geluiddempend en probleemloos te combineren met vloerverwarming.",
          "MOVT Projects levert en legt A-merk PVC vloeren door heel Lienden en de Betuwe. Van strakke rechte planken tot klassiek visgraat.",
        ],
      },
      {
        heading: "PVC: de slimme keuze voor Betuwse woningen",
        paragraphs: [
          "Veel woningen in Lienden en omgeving hebben vloerverwarming (of krijgen die bij verduurzaming). PVC is daarvoor de ideale vloer: dun, warmtegeleidend en vormvast. Ook in oudere woningen met wisselende luchtvochtigheid blijft PVC strak liggen waar echt hout kan gaan werken.",
        ],
        list: [
          "100% waterbestendig — ook voor keuken, hal en badkamer",
          "Tot 10x stiller dan laminaat",
          "Krasvast: bestand tegen kinderen, honden en schuivende stoelen",
          "20+ jaar levensduur bij normaal gebruik",
        ],
      },
      {
        heading: "Visgraat of recht: wij adviseren aan huis",
        paragraphs: [
          "De keuze tussen visgraat en rechte planken bepaalt de hele sfeer van uw interieur. Daarom komen wij met stalen bij u thuis in Lienden: zo ziet u direct hoe kleur en patroon werken in uw eigen licht en interieur. Gratis en vrijblijvend.",
          "Plan direct uw gratis adviesgesprek — of loop onze PVC visgraat pagina door voor inspiratie.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost een PVC vloer in Lienden inclusief leggen?",
        answer:
          "Rechte PVC planken vanaf circa €55 per m², visgraat vanaf circa €70 per m² — inclusief egaliseren en leggen. Exacte prijs volgt na gratis inmeting.",
      },
      {
        question: "Hoe lang gaat een PVC vloer mee?",
        answer:
          "Een A-merk PVC vloer gaat 20 tot 30 jaar mee. Wij geven garantie op zowel het materiaal als het legwerk.",
      },
    ],
  },
  {
    slug: "behang-wandafwerking-lienden",
    title: "Behang en wandafwerking in Lienden: maak uw interieur compleet",
    metaTitle: "Behangen in Lienden | Behang & Wandafwerking | MOVT Projects",
    metaDescription:
      "Professioneel behangwerk in Lienden en de Betuwe. MOVT Projects verzorgt behang, wandafwerking en complete interieurprojecten. Vraag gratis advies aan.",
    excerpt:
      "Nieuwe vloer, maar de wanden blijven achter? MOVT verzorgt professioneel behangwerk in Lienden — van luxe vinylbehang tot complete wandafwerking.",
    city: "Lienden",
    date: "2026-06-19",
    image: "/projects/residential/slaapkamer-visgraat-donker.jpg",
    sections: [
      {
        paragraphs: [
          "Een interieur is pas af als vloer én wanden kloppen. Daarom biedt MOVT Projects naast vloeren ook professioneel behangwerk en wandafwerking aan in Lienden en de hele Betuwe. Eén team dat uw complete interieur naar niveau tilt.",
        ],
      },
      {
        heading: "Van accentwand tot complete woning",
        paragraphs: [
          "Een luxe behangwand achter de bank, een rustgevende slaapkamer of alle wanden strak gesausd: onze afwerkers draaien er de hand niet voor om. We werken met hoogwaardige behangsoorten — vinyl, vlies, fotobehang en maatwerkprints.",
        ],
        list: [
          "Luxe vinyl- en vliesbehang van A-merken",
          "Fotobehang en maatwerk prints",
          "Strak sauswerk in elke gewenste kleur",
          "Perfect voorbereidingswerk: vullen, schuren, egaliseren",
        ],
      },
      {
        heading: "Slim combineren: vloer + wand in één project",
        paragraphs: [
          "De meeste klanten in Lienden combineren behangwerk met een nieuwe vloer of traprenovatie. Dat is niet alleen praktisch — één planning, één aanspreekpunt — maar ook voordeliger door ons combitarief. Bekijk onze behang dienstenpagina of onze volledig interieur aanpak.",
          "Benieuwd wat er mogelijk is? Vraag een gratis adviesgesprek aan huis aan in Lienden.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost behangen in Lienden?",
        answer:
          "Professioneel behangwerk kost €12 tot €30 per m² afhankelijk van behangtype en ondergrond. Combineert u met een vloer, dan profiteert u van ons combitarief.",
      },
      {
        question: "Doen jullie ook alleen behangwerk, zonder vloer?",
        answer: "Zeker. Behang en wandafwerking zijn volwaardige diensten — ook als losse opdracht.",
      },
    ],
  },

  // ============ VEENENDAAL (2) ============
  {
    slug: "vloeren-veenendaal-visgraat-trend",
    title: "Vloeren in Veenendaal: waarom visgraat dé trend is in de nieuwbouwwijken",
    metaTitle: "Vloeren Veenendaal | PVC Visgraat Specialist | MOVT Projects",
    metaDescription:
      "Vloer laten leggen in Veenendaal? MOVT Projects legt PVC visgraat en andere vloeren in heel Veenendaal, van Dragonder tot Veenendaal-Oost. Gratis offerte.",
    excerpt:
      "In de nieuwbouwwijken van Veenendaal is PVC visgraat dé vloertrend. MOVT Projects legt er wekelijks — lees waarom deze vloer zo goed past bij nieuwbouw.",
    city: "Veenendaal",
    date: "2026-06-12",
    image: "/projects/commercial/kantoor-visgraat-modern.jpg",
    sections: [
      {
        paragraphs: [
          "Veenendaal groeit hard. In wijken als Veenendaal-Oost verrijzen honderden nieuwe woningen — en vrijwel elke koper staat voor dezelfde vraag: welke vloer? Bij de opleveringen die wij als regionaal vloerenbedrijf begeleiden, zien we één duidelijke winnaar: PVC visgraat.",
        ],
      },
      {
        heading: "Waarom visgraat perfect past bij nieuwbouw in Veenendaal",
        paragraphs: [
          "Nieuwbouwwoningen hebben standaard vloerverwarming als hoofdverwarming. Dat stelt eisen aan uw vloer: hij moet warmte goed geleiden en vormvast blijven. PVC is daarvoor de beste keuze — en het visgraatpatroon geeft de vaak strakke nieuwbouw direct karakter en warmte.",
          "Bovendien: bij nieuwbouw kan de vloer er vóór de verhuizing in. Wij stemmen de planning af op uw opleverdatum, zodat u verhuist naar een woning die écht af is.",
        ],
        list: [
          "Ideaal bij vloerverwarming als hoofdverwarming",
          "Vormvast bij wisselende temperaturen",
          "Direct karakter in strakke nieuwbouw",
          "Planning afgestemd op uw oplevering",
        ],
      },
      {
        heading: "Ook voor bestaande bouw in Veenendaal",
        paragraphs: [
          "Natuurlijk leggen we niet alleen in nieuwbouw. Ook in het centrum, Dragonder, 't Franse Gat en de andere wijken van Veenendaal vervangen wij wekelijks vloeren — inclusief verwijderen van de oude vloer en egaliseren van de ondergrond.",
          "Vraag een gratis offerte aan en ontdek waarom steeds meer Veenendalers voor MOVT Projects kiezen.",
        ],
      },
    ],
    faq: [
      {
        question: "Kunnen jullie de vloer leggen vóór mijn nieuwbouw-oplevering?",
        answer:
          "Wij leggen zodra de woning aan u is opgeleverd — vaak al binnen enkele dagen erna, zodat de vloer erin ligt vóór uw verhuizing. Reserveer uw plek zodra u de opleverdatum weet.",
      },
      {
        question: "Wat kost een visgraatvloer in een gemiddelde nieuwbouwwoning?",
        answer:
          "Voor een tussenwoning (ca. 60 m² begane grond + overloop) ligt de investering meestal tussen €4.500 en €7.000, volledig inclusief.",
      },
    ],
  },
  {
    slug: "kantoorvloer-veenendaal-zakelijk",
    title: "Kantoorvloer in Veenendaal: zakelijke vloeren die indruk maken",
    metaTitle: "Kantoorvloer Veenendaal | Zakelijke Vloerprojecten | MOVT Projects",
    metaDescription:
      "Zakelijke vloer nodig in Veenendaal? MOVT Projects levert kantoorvloeren, tapijttegels en gietvloeren voor bedrijven. Ook buiten kantooruren. Vraag offerte aan.",
    excerpt:
      "Van tapijttegels tot visgraat en gietvloeren: MOVT Projects verzorgt zakelijke vloerprojecten in Veenendaal — strak gepland, ook buiten kantooruren.",
    city: "Veenendaal",
    date: "2026-06-05",
    image: "/projects/commercial/kantoor-visgraat-lounge.jpg",
    sections: [
      {
        paragraphs: [
          "Veenendaal is een echte ondernemersstad. Van de kantoren aan de Vendelier tot de winkels in het centrum: uw bedrijfsruimte is uw visitekaartje. En niets bepaalt de eerste indruk zo sterk als de vloer.",
          "MOVT Projects realiseert zakelijke vloerprojecten door heel Veenendaal en omgeving — van 50 tot vele duizenden vierkante meters.",
        ],
      },
      {
        heading: "De juiste vloer per zakelijke ruimte",
        paragraphs: [
          "Elke bedrijfsruimte vraagt om een eigen oplossing. Wij adviseren op basis van gebruik, uitstraling en budget:",
        ],
        list: [
          "Kantoortuinen: tapijttegels — akoestisch, praktisch, representatief",
          "Ontvangstruimtes en showrooms: PVC visgraat voor een premium uitstraling",
          "Praktijk- en zorgruimtes: naadloze gietvloeren — hygiënisch en onderhoudsarm",
          "Horeca en retail: slijtvaste PVC die intensief gebruik aankan",
        ],
      },
      {
        heading: "Minimale verstoring van uw bedrijfsvoering",
        paragraphs: [
          "Uw zaak kan niet zomaar dicht. Daarom werken wij voor zakelijke klanten in Veenendaal ook 's avonds en in het weekend, en faseren we grote projecten zodat uw bedrijf gewoon doordraait. Strakke deadlines zijn bij ons geen uitzondering maar standaard.",
          "Bekijk onze commerciële projecten of vraag direct een offerte op maat aan.",
        ],
      },
    ],
    faq: [
      {
        question: "Werken jullie buiten kantooruren?",
        answer:
          "Ja, voor zakelijke projecten in Veenendaal plannen we werkzaamheden desgewenst in de avond of het weekend, zonder toeslag-verrassingen achteraf.",
      },
      {
        question: "Kunnen jullie snel schakelen bij een verbouwing?",
        answer:
          "Als regionaal bedrijf zitten we dichtbij: inmeten kan vaak binnen enkele dagen, en we stemmen onze planning af op uw aannemer of projectmanager.",
      },
    ],
  },

  // ============ TIEL (2) ============
  {
    slug: "vloerenbedrijf-tiel",
    title: "Vloerenbedrijf in Tiel: PVC, laminaat en gietvloeren van één specialist",
    metaTitle: "Vloerenbedrijf Tiel | PVC, Laminaat & Gietvloeren | MOVT Projects",
    metaDescription:
      "Op zoek naar een vloerenbedrijf in Tiel? MOVT Projects legt PVC, laminaat en gietvloeren in Tiel en de Betuwe. Gratis inmeting, scherpe prijzen, vakwerk.",
    excerpt:
      "MOVT Projects is het vloerenbedrijf voor Tiel en omgeving: PVC, visgraat, laminaat en gietvloeren, gelegd door specialisten uit uw eigen regio.",
    city: "Tiel",
    date: "2026-05-28",
    image: "/projects/residential/woonkamer-kubus-donker.jpg",
    sections: [
      {
        paragraphs: [
          "Tiel en de omliggende Betuwe horen tot het kerngebied van MOVT Projects. Van appartementen aan het Waalfront tot gezinswoningen in Passewaaij en bedrijfspanden op Latenstein: wij leggen er wekelijks vloeren.",
          "Als regionaal bedrijf combineren we korte lijnen en scherpe prijzen met het vakmanschap dat u van een grote speler verwacht.",
        ],
      },
      {
        heading: "Ons aanbod voor Tiel",
        paragraphs: ["Alles onder één dak — u kiest de vloer, wij regelen het complete traject:"],
        list: [
          "PVC vloeren — recht of visgraat, dé allrounder",
          "Laminaat — betaalbaar en verkrijgbaar in elke stijl",
          "Gietvloeren — naadloos en luxe",
          "Tapijttegels — voor kantoor en praktijk",
          "Trap renovatie en behang als aanvulling op elk project",
        ],
      },
      {
        heading: "Zo werkt het in Tiel",
        paragraphs: [
          "U vraagt een offerte aan, wij komen gratis inmeten — in heel Tiel, Passewaaij, Drumpt, Wadenoijen en omgeving. Binnen 48 uur heeft u een heldere prijs, inclusief egaliseren, leggen en afwerking. Geen verrassingen achteraf, wel garantie op materiaal én legwerk.",
          "Neem contact op en ontdek wat MOVT Projects voor uw woning of bedrijfspand in Tiel kan betekenen.",
        ],
      },
    ],
    faq: [
      {
        question: "Leggen jullie ook vloeren in appartementen in Tiel?",
        answer:
          "Ja. Voor appartementen adviseren we geluiddempende PVC met de juiste ondervloer, zodat u voldoet aan de eisen van uw VvE.",
      },
      {
        question: "Wat is de goedkoopste vloeroplossing?",
        answer:
          "Laminaat is het voordeligst (vanaf ca. €35 per m² inclusief leggen). Wij adviseren eerlijk wat past bij uw budget en situatie.",
      },
    ],
  },
  {
    slug: "interieurrenovatie-tiel-vloer-tot-wand",
    title: "Complete interieurrenovatie in Tiel: van vloer tot wand in één hand",
    metaTitle: "Interieurrenovatie Tiel | Vloer, Trap & Behang | MOVT Projects",
    metaDescription:
      "Complete interieurrenovatie in Tiel? MOVT Projects verzorgt vloer, trap én wandafwerking in één project. Eén aanspreekpunt, één planning. Gratis adviesgesprek.",
    excerpt:
      "Vloer, trap en wanden in één keer aanpakken? MOVT Projects verzorgt complete interieurrenovaties in Tiel — één team, één planning, één strak resultaat.",
    city: "Tiel",
    date: "2026-05-21",
    image: "/projects/commercial/entree-mozaiek.jpg",
    sections: [
      {
        paragraphs: [
          "Een verbouwing of verhuizing in Tiel is hét moment om uw interieur in één keer goed aan te pakken. Maar drie verschillende bedrijven regelen voor vloer, trap en wanden? Dat betekent drie planningen, drie facturen en drie keer afstemmen.",
          "Het kan simpeler: MOVT Projects verzorgt het complete plaatje. Eén team dat vloeren legt, trappen renoveert en wanden afwerkt — in de juiste volgorde, in één strakke planning.",
        ],
      },
      {
        heading: "Wat wij voor u regelen",
        paragraphs: ["Een volledig interieurproject bij MOVT omvat alles wat vast zit aan uw woning:"],
        list: [
          "Nieuwe vloer: PVC, visgraat, laminaat of gietvloer",
          "Trap renovatie in bijpassende stijl",
          "Behang, sauswerk en wandafwerking",
          "Plinten, dorpels en alle afwerking",
          "Verwijderen en afvoeren van oude materialen",
        ],
      },
      {
        heading: "Voordeliger én sneller dan losse opdrachten",
        paragraphs: [
          "Door alles te combineren besparen wij op voorrijkosten en arbeidsuren — dat voordeel ziet u terug in ons combitarief. En omdat één team de volgorde bepaalt, is een gemiddelde woning in Tiel binnen één tot twee weken volledig getransformeerd.",
          "Bekijk onze volledig interieur pagina of plan direct een gratis adviesgesprek bij u thuis in Tiel.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost een complete interieurrenovatie in Tiel?",
        answer:
          "Dat hangt af van oppervlakte en materiaalkeuze. Ter indicatie: vloer + trap + behangwerk voor een gemiddelde tussenwoning vanaf circa €8.000. U ontvangt altijd eerst een gratis maatwerkofferte.",
      },
      {
        question: "In welke volgorde voeren jullie de werkzaamheden uit?",
        answer:
          "Eerst wandvoorbereiding en sauswerk/behang, dan de vloer, dan trap en afwerking. Zo beschadigt niets en is het eindresultaat strak.",
      },
    ],
  },

  // ============ LIENDEN EXTRA (2) ============
  {
    slug: "laminaat-lienden",
    title: "Laminaat in Lienden: betaalbaar, mooi en snel gelegd",
    metaTitle: "Laminaat Lienden | Leveren & Leggen | MOVT Projects",
    metaDescription:
      "Laminaat kopen en laten leggen in Lienden? MOVT Projects levert A-merk laminaat inclusief legservice, vanaf ca. €35 per m². Gratis inmeting in heel de Betuwe.",
    excerpt:
      "Laminaat blijft de slimste budgetkeuze: mooi, slijtvast en snel gelegd. MOVT levert en legt A-merk laminaat door heel Lienden en omgeving.",
    city: "Lienden",
    date: "2026-06-10",
    image: "/projects/residential/woonkamer-visgraat-licht.jpg",
    sections: [
      {
        paragraphs: [
          "Niet elke ruimte vraagt om PVC of een gietvloer. Voor slaapkamers, zolders, studentenkamers of een strak budget is laminaat nog altijd een uitstekende keuze. MOVT Projects levert en legt A-merk laminaat in Lienden, Ommeren, Ingen en de rest van de Betuwe — vaak al binnen één dag.",
        ],
      },
      {
        heading: "Modern laminaat is niet meer wat het was (gelukkig)",
        paragraphs: [
          "Wie bij laminaat aan de jaren '90 denkt, moet echt eens komen kijken. Modern A-merk laminaat heeft diepe houtstructuren, V-groeven en registered embossing — nauwelijks van echt hout te onderscheiden. En met de juiste ondervloer is het ook nog eens stil en geschikt voor vloerverwarming.",
        ],
        list: [
          "Vanaf circa €35 per m² inclusief leggen",
          "Slijtvast: klasse AC4/AC5 voor intensief gebruik",
          "Ook in visgraat-look verkrijgbaar",
          "Sneller gelegd dan elke andere vloer: gemiddelde kamer in een halve dag",
        ],
      },
      {
        heading: "Eerlijk advies: laminaat of toch PVC?",
        paragraphs: [
          "Wij verkopen beide, dus wij adviseren eerlijk. Vuistregel: veel vocht (keuken, hal) of maximale stilte gewenst? Dan PVC. Slaapkamers, zolder of budget leidend? Dan is laminaat onverslaanbaar qua prijs-kwaliteit.",
          "Twijfelt u? Wij komen gratis langs in Lienden met stalen van beide — dan ziet u het verschil in uw eigen woonkamer. Plan een adviesgesprek.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe snel kan laminaat gelegd worden in Lienden?",
        answer:
          "Na akkoord meestal binnen twee weken. Het leggen zelf: een gemiddelde woonkamer is in een halve tot hele dag klaar, inclusief plinten.",
      },
      {
        question: "Is laminaat geschikt voor vloerverwarming?",
        answer:
          "Ja, mits gekozen voor laminaat met een lage warmteweerstand en de juiste ondervloer. Wij adviseren hierover tijdens de inmeting.",
      },
    ],
  },
  {
    slug: "trap-renovatie-lienden",
    title: "Trap renovatie in Lienden: maak de trap net zo mooi als uw vloer",
    metaTitle: "Trap Renovatie Lienden | In 1-2 Dagen Klaar | MOVT Projects",
    metaDescription:
      "Trap renoveren in Lienden? MOVT Projects bekleedt uw trap met PVC of hout, passend bij uw vloer. Zonder sloopwerk, binnen 1-2 dagen klaar. Gratis advies.",
    excerpt:
      "Uw trap dagelijks in het zicht en nog steeds gedateerd? MOVT renoveert trappen in Lienden zonder sloopwerk — binnen twee dagen een compleet nieuwe look.",
    city: "Lienden",
    date: "2026-06-03",
    image: "/projects/residential/hal-visgraat-licht.jpg",
    sections: [
      {
        paragraphs: [
          "De trap is vaak het eerste wat bezoekers zien als ze binnenkomen — en het laatste wat wordt aangepakt bij een verbouwing. Zonde, want een traprenovatie is sneller en voordeliger dan de meeste mensen denken. MOVT Projects renoveert trappen door heel Lienden en de Betuwe.",
        ],
      },
      {
        heading: "Zo pakken wij uw trap aan",
        paragraphs: [
          "Wij bekleden uw bestaande trap met hoogwaardig PVC of hout. De constructie blijft intact — geen breekwerk, geen stof door het hele huis. Treden, stootborden en zijkanten worden strak afgewerkt, desgewenst met anti-slip en LED-verlichting.",
        ],
        list: [
          "Binnen 1-2 dagen klaar, trap blijft beloopbaar",
          "Perfect passend bij uw PVC- of laminaatvloer",
          "Anti-slip toplaag: veilig voor kinderen en ouderen",
          "Optioneel: LED-spots in de stootborden",
        ],
      },
      {
        heading: "Populair in Lienden: trap + vloer in één project",
        paragraphs: [
          "De meeste klanten combineren de traprenovatie met een nieuwe vloer beneden of boven. Eén stijl door het hele huis, één planning en een scherper combitarief. Bekijk ook onze volledig interieur aanpak — of vraag direct een gratis offerte aan voor uw trap in Lienden.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost een traprenovatie in Lienden?",
        answer:
          "Gemiddeld €800 tot €2.500 afhankelijk van aantal treden, open/dichte trap en materiaal. Na een gratis opname weet u de exacte prijs.",
      },
      {
        question: "Kan de trap tijdens de renovatie gebruikt worden?",
        answer:
          "Ja, we werken de trap tree voor tree af zodat u er tussendoor gewoon op kunt. 's Avonds is de trap altijd beloopbaar.",
      },
    ],
  },

  // ============ BETUWE (2) ============
  {
    slug: "vloerenspecialist-betuwe",
    title: "Vloerenspecialist in de Betuwe: van Kesteren tot Maurik, wij leggen 'm",
    metaTitle: "Vloerenspecialist Betuwe | PVC, Laminaat & Gietvloeren | MOVT",
    metaDescription:
      "Vloer nodig in de Betuwe? MOVT Projects legt PVC, visgraat, laminaat en gietvloeren in Kesteren, Ochten, Opheusden, Maurik, Ingen en heel de regio. Gratis offerte.",
    excerpt:
      "MOVT Projects is dé vloerenspecialist van de Betuwe. Van dijkwoning tot nieuwbouw: wij kennen de woningen hier en leggen elke vloer vakkundig.",
    city: "Betuwe",
    date: "2026-05-14",
    image: "/projects/residential/woonkamer-visgraat-donker.jpg",
    sections: [
      {
        paragraphs: [
          "De Betuwe is ons thuis. MOVT Projects is gevestigd in de regio en legt vloeren van Kesteren tot Maurik, van Opheusden tot Ochten, en alles daartussen: Ingen, Ommeren, Lienden, Eck en Wiel, IJzendoorn, Echteld en Dodewaard.",
          "Dat lokale is meer dan een marketingpraatje. Wie hier vloeren legt, kent de uitdagingen: oudere dijkwoningen met wisselende vochtigheid, boerderijen met scheve ondervloeren en nieuwbouwwijken waar alles op vloerverwarming draait.",
        ],
      },
      {
        heading: "Elke Betuwse woning zijn eigen aanpak",
        paragraphs: [
          "Een dijkwoning uit 1920 vraagt om een andere opbouw dan een nieuwbouwwoning in Kesteren. Daarom beginnen wij altijd met een grondige inmeting: vochtmeting, vlakheid, ondergrond. Pas dan adviseren we een vloer — en niet andersom.",
        ],
        list: [
          "Oudere woningen: vochtwerende opbouw en egalisatie",
          "Nieuwbouw: dunne, warmtegeleidende PVC voor vloerverwarming",
          "Boerderijen en bedrijfsruimtes: naadloze gietvloeren of extreem slijtvast PVC",
          "Appartementen: geluiddempende opbouw conform VvE-eisen",
        ],
      },
      {
        heading: "Van eerste appje tot oplevering",
        paragraphs: [
          "Bel of app ons, en we staan deze week nog bij u op de stoep — dat is het voordeel van een specialist uit de eigen regio. Gratis inmeting, binnen 48 uur een offerte, en garantie op materiaal én legwerk.",
          "Bekijk onze projecten in de regio of vraag direct een offerte aan.",
        ],
      },
    ],
    faq: [
      {
        question: "In welke plaatsen in de Betuwe werken jullie?",
        answer:
          "In de hele Neder-Betuwe en Buren: Lienden, Kesteren, Ochten, Opheusden, IJzendoorn, Echteld, Dodewaard, Maurik, Ingen, Ommeren, Eck en Wiel en omstreken. Plus Rhenen, Veenendaal en Tiel.",
      },
      {
        question: "Rekenen jullie voorrijkosten in de Betuwe?",
        answer: "Nee. Binnen ons kerngebied — de hele Betuwe en omstreken — rekenen wij geen voorrijkosten.",
      },
      {
        question: "Kunnen jullie ook oude vloeren verwijderen?",
        answer:
          "Ja, verwijderen en afvoeren van uw oude vloer nemen we desgewenst mee in de offerte. Ook lijmresten en oude egalisatie halen we weg.",
      },
    ],
  },
  {
    slug: "pvc-visgraat-dijkwoning-boerderij-betuwe",
    title: "PVC visgraat in een dijkwoning of boerderij? Zo doe je dat in de Betuwe",
    metaTitle: "PVC Visgraat Betuwe | Dijkwoningen & Boerderijen | MOVT Projects",
    metaDescription:
      "PVC visgraat in een oudere woning in de Betuwe? MOVT Projects legt visgraatvloeren in dijkwoningen en boerderijen — inclusief vochtmeting en egalisatie.",
    excerpt:
      "Karakteristieke Betuwse woningen verdienen een vloer met karakter. Maar oudere ondergronden vragen vakkennis — zo legt MOVT visgraat in dijkwoningen en boerderijen.",
    city: "Betuwe",
    date: "2026-05-07",
    image: "/projects/residential/slaapkamer-visgraat-donker.jpg",
    sections: [
      {
        paragraphs: [
          "De Betuwe staat vol karakteristieke woningen: dijkhuizen, boerderijen, arbeiderswoningen van honderd jaar oud. Prachtig — maar wie er een moderne vloer in wil, loopt tegen uitdagingen aan die je in nieuwbouw niet hebt. Vocht, scheve vloeren, oude houten delen.",
          "Goed nieuws: met de juiste voorbereiding ligt PVC visgraat óók in deze woningen strak en blijft dat decennialang. Het geheim zit in de opbouw.",
        ],
      },
      {
        heading: "Stap 1: meten, niet gokken",
        paragraphs: [
          "Bij oudere Betuwse woningen doen wij altijd een vochtmeting en vlakheidsmeting vóór we iets adviseren. Optrekkend vocht in combinatie met een dampdichte PVC-vloer is vragen om problemen — dat moet je vooraf weten, niet achteraf ontdekken.",
        ],
      },
      {
        heading: "Stap 2: de juiste opbouw",
        paragraphs: [
          "Afhankelijk van de meting kiezen we de opbouw: vochtscherm, egalisatie (soms meerdere lagen bij scheve vloeren), of bij houten vloeren eerst een uitvlakplaat. Pas op een perfect vlakke, droge ondergrond komt het visgraatpatroon tot zijn recht — elk plankje telt.",
        ],
        list: [
          "Vochtscherm bij optrekkend vocht",
          "Egalisatie tot op de millimeter vlak",
          "Uitvlakplaten over oude houten vloeren",
          "Randisolatie tegen kruip van oude muren",
        ],
      },
      {
        heading: "Het resultaat: klassiek patroon, modern comfort",
        paragraphs: [
          "Visgraat past wonderlijk goed bij landelijke en historische interieurs — het patroon bestaat al eeuwen. Maar dan met de voordelen van nu: warm aan de voeten, geluiddempend, waterbestendig en onderhoudsarm.",
          "Woont u in een karakteristieke woning in de Betuwe en twijfelt u of PVC kan? Vraag een gratis inspectie aan — wij vertellen u eerlijk wat er mogelijk is.",
        ],
      },
    ],
    faq: [
      {
        question: "Kan PVC over een oude houten vloer?",
        answer:
          "Ja, mits de houten vloer stabiel is. We leggen er uitvlakplaten overheen zodat de PVC strak en zonder veerkracht ligt.",
      },
      {
        question: "Wat als er vocht in de kruipruimte zit?",
        answer:
          "Dan plaatsen we eerst een vochtscherm of adviseren we bodemisolatie. Vocht negeren is de grootste fout die je bij oudere woningen kunt maken.",
      },
    ],
  },

  // ============ TIEL EXTRA (2) ============
  {
    slug: "pvc-visgraat-tiel",
    title: "PVC visgraat in Tiel: de vloertrend die niet meer weggaat",
    metaTitle: "PVC Visgraat Tiel | Leveren & Leggen | MOVT Projects",
    metaDescription:
      "PVC visgraat vloer in Tiel? MOVT Projects levert en legt A-merk visgraatvloeren in heel Tiel en Passewaaij. Gratis inmeting en advies aan huis. Vraag offerte aan.",
    excerpt:
      "Van Passewaaij tot het centrum: PVC visgraat is dé vloerkeuze in Tiel. Lees wat het kost en waarom het patroon zo goed werkt in elk interieur.",
    city: "Tiel",
    date: "2026-04-30",
    image: "/projects/commercial/kantoor-visgraat-groot.jpg",
    sections: [
      {
        paragraphs: [
          "Sommige trends waaien over, andere blijken blijvers. PVC visgraat hoort duidelijk bij die laatste categorie: het klassieke patroon bestaat al sinds de zeventiende eeuw en is populairder dan ooit. Ook in Tiel leggen wij wekelijks visgraatvloeren — van appartementen in het centrum tot gezinswoningen in Passewaaij.",
        ],
      },
      {
        heading: "Waarom visgraat werkt in élk interieur",
        paragraphs: [
          "Het geheim van visgraat: het patroon geeft diepte en beweging aan een ruimte. In kleine kamers maakt het de vloer optisch groter, in grote ruimtes voorkomt het dat de vloer saai wordt. Combineer het met een lichte eiken-look voor Scandinavisch, of donker gerookt voor klassiek-chic.",
        ],
        list: [
          "Licht eiken: ruimtelijk en Scandinavisch",
          "Naturel: tijdloos en warm",
          "Donker gerookt: klassiek en statig",
          "Grijs: modern en industrieel",
        ],
      },
      {
        heading: "Wat kost PVC visgraat in Tiel?",
        paragraphs: [
          "Reken op €70 tot €110 per m² volledig inclusief: A-merk PVC, egaliseren, leggen en plinten. De exacte prijs hangt af van het merk en de staat van uw ondervloer. Wij komen gratis inmeten in heel Tiel — u ontvangt binnen 48 uur een offerte zonder verrassingen.",
          "Bekijk onze PVC visgraat pagina voor alle kleuren en merken, of plan direct een gratis adviesgesprek.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe lang duurt het leggen van visgraat in een gemiddelde woonkamer?",
        answer:
          "Visgraat is bewerkelijker dan rechte planken: reken op twee tot drie dagen voor een gemiddelde woonkamer, inclusief egaliseren.",
      },
      {
        question: "Is visgraat duurder dan rechte PVC planken?",
        answer:
          "Ja, circa €15 tot €25 per m² meer door het bewerkelijkere legwerk. Het effect op uw interieur is het verschil dubbel en dwars waard.",
      },
    ],
  },
  {
    slug: "behang-wandafwerking-tiel",
    title: "Behang en wandafwerking in Tiel: de finishing touch van uw interieur",
    metaTitle: "Behangen in Tiel | Behang & Wandafwerking | MOVT Projects",
    metaDescription:
      "Professioneel behangwerk in Tiel? MOVT Projects verzorgt luxe behang, sauswerk en complete wandafwerking. Ook in combinatie met uw nieuwe vloer. Gratis advies.",
    excerpt:
      "Strakke wanden maken het verschil tussen 'net af' en 'wauw'. MOVT verzorgt professioneel behang- en sauswerk in Tiel — los of gecombineerd met uw vloer.",
    city: "Tiel",
    date: "2026-04-23",
    image: "/projects/commercial/kantoor-geometrisch.jpg",
    sections: [
      {
        paragraphs: [
          "U investeert in een prachtige nieuwe vloer — en dan vallen ineens de wanden op. Oneffenheden, gedateerd behang, een kleur die nét niet meer past. Herkenbaar? Daarom biedt MOVT Projects in Tiel naast vloeren ook complete wandafwerking: behang, sauswerk en alles wat daarbij komt kijken.",
        ],
      },
      {
        heading: "Wat wij doen aan uw wanden",
        paragraphs: [
          "Van één accentwand tot alle wanden in huis. Wij verwijderen oud behang, herstellen en egaliseren de ondergrond en werken af naar wens:",
        ],
        list: [
          "Luxe vinyl- en vliesbehang van A-merken",
          "Fotobehang en maatwerk prints — uw eigen ontwerp kan ook",
          "Strak sauswerk in elke RAL- of merkkleur",
          "Renovlies voor beschadigde wanden: strak zonder stukadoor",
        ],
      },
      {
        heading: "Vloer + wand in Tiel: één team, één resultaat",
        paragraphs: [
          "Het grootste voordeel zit in de combinatie. Wij stemmen wandkleur en vloerkeuze op elkaar af, plannen de werkzaamheden in de juiste volgorde en u heeft één aanspreekpunt. Sneller klaar, geen afstemmingsgedoe tussen verschillende partijen, en voordeliger door ons combitarief.",
          "Bekijk onze behang dienstenpagina of vraag een gratis adviesgesprek aan bij u thuis in Tiel.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost behangen in Tiel?",
        answer:
          "Professioneel behangwerk kost €12 tot €30 per m² afhankelijk van het behangtype en de staat van de wand. Renovlies + sauswerk vanaf circa €18 per m².",
      },
      {
        question: "Kunnen jullie ook alleen één accentwand doen?",
        answer:
          "Zeker, een enkele fotobehang- of accentwand doen we regelmatig. Klein werk is bij ons ook welkom.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return blogPosts.slice(0, count);
  const sameCity = blogPosts.filter((p) => p.slug !== slug && p.city === current.city);
  const others = blogPosts.filter((p) => p.slug !== slug && p.city !== current.city);
  return [...sameCity, ...others].slice(0, count);
}
