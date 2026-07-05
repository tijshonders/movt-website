export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroImage: string;
  icon: string;
  benefits: string[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "pvc-visgraat",
    title: "PVC Visgraat Vloeren",
    shortTitle: "PVC Visgraat",
    description:
      "PVC visgraat is dé vloer van dit moment. Een tijdloze uitstraling met het gemak van PVC. Waterbestendig, onderhoudsvriendelijk en geschikt voor vloerverwarming. MOVT Projects legt PVC visgraat in woningen, kantoren en horecagelegenheden door heel Nederland.",
    heroImage: "/projects/residential/woonkamer-visgraat-licht.jpg",
    icon: "M4 4h6l2 2h-4l-2 2v8l2 2h4l-2 2H4l-2-2V6l2-2zm16 0h-6l-2 2h4l2 2v8l-2 2h-4l2 2h6l2-2V6l-2-2z",
    benefits: [
      "Waterbestendig — geschikt voor keuken en badkamer",
      "Geschikt voor vloerverwarming",
      "Geluiddempend en comfortabel",
      "Eenvoudig te onderhouden",
      "Enorme keuze in kleuren en dessins",
      "Snelle en stofvrije installatie",
    ],
    faq: [
      {
        question: "Wat kost een PVC visgraatvloer per m²?",
        answer:
          "De kosten van een PVC visgraatvloer variëren tussen €35 en €85 per m², inclusief leggen. De prijs hangt af van het gekozen merk, de kwaliteit en de ondervloer. Neem contact op voor een vrijblijvende offerte op maat.",
      },
      {
        question: "Is PVC visgraat geschikt voor vloerverwarming?",
        answer:
          "Ja, PVC visgraat is uitstekend geschikt voor vloerverwarming. Het materiaal geleidt warmte goed en heeft een lage warmteweerstand, waardoor de vloerverwarming efficiënt werkt.",
      },
      {
        question: "Hoe lang gaat een PVC visgraatvloer mee?",
        answer:
          "Een kwalitatief goede PVC visgraatvloer gaat gemiddeld 20 tot 30 jaar mee bij normaal gebruik en goed onderhoud.",
      },
      {
        question: "Kan PVC visgraat over een bestaande vloer gelegd worden?",
        answer:
          "In veel gevallen kan PVC visgraat over een bestaande vloer gelegd worden, mits de ondergrond vlak, droog en stabiel is. We beoordelen dit altijd tijdens een gratis inmeting.",
      },
    ],
  },
  {
    slug: "gietvloeren",
    title: "Gietvloeren",
    shortTitle: "Gietvloeren",
    description:
      "Een gietvloer is de ultieme keuze voor een naadloze, strakke uitstraling. Perfect voor moderne interieurs en commerciële ruimtes. MOVT Projects legt gietvloeren in elke gewenste kleur en afwerking.",
    heroImage: "/projects/epoxy/gietvloer-wit-kantoor.jpg",
    icon: "M2 20h20V8l-4-4H6L2 8v12zm2-10h16",
    benefits: [
      "Naadloos en hygiënisch",
      "Verkrijgbaar in elke RAL-kleur",
      "Zeer duurzaam en slijtvast",
      "Geschikt voor vloerverwarming",
      "Makkelijk schoon te houden",
      "Industriële of luxe uitstraling",
    ],
    faq: [
      {
        question: "Wat kost een gietvloer per m²?",
        answer:
          "Een gietvloer kost gemiddeld €50 tot €150 per m², afhankelijk van het type (PU of epoxy), de ondergrond en de gewenste afwerking. Vraag een offerte aan voor een exacte prijs.",
      },
      {
        question: "Hoe lang duurt het leggen van een gietvloer?",
        answer:
          "Het leggen van een gietvloer duurt gemiddeld 3 tot 5 werkdagen, inclusief droging. De exacte duur hangt af van de oppervlakte en het type gietvloer.",
      },
      {
        question: "Is een gietvloer geschikt voor de badkamer?",
        answer:
          "Ja, een gietvloer is waterdicht en daardoor perfect geschikt voor de badkamer. De naadloze afwerking voorkomt vochtproblemen.",
      },
    ],
  },
  {
    slug: "tapijttegels",
    title: "Tapijttegels",
    shortTitle: "Tapijttegels",
    description:
      "Tapijttegels bieden flexibiliteit en comfort, ideaal voor kantoren en commerciële ruimtes. Eenvoudig te vervangen bij beschadiging en verkrijgbaar in talloze designs. MOVT Projects adviseert en legt tapijttegels voor optimaal resultaat.",
    heroImage: "/projects/commercial/vergaderruimte-tapijt.jpg",
    icon: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z",
    benefits: [
      "Geluidsdempend en comfortabel",
      "Individuele tegels vervangbaar",
      "Enorme keuze in patronen en kleuren",
      "Geschikt voor kantoren en bedrijfsruimtes",
      "Antistatisch en brandvertragend",
      "Combineerbaar met andere vloertypes",
    ],
    faq: [
      {
        question: "Wat kosten tapijttegels per m²?",
        answer:
          "Tapijttegels kosten gemiddeld €25 tot €60 per m² inclusief leggen. Premium merken en speciale designs kunnen hoger uitvallen.",
      },
      {
        question: "Kunnen tapijttegels gecombineerd worden met andere vloeren?",
        answer:
          "Ja, tapijttegels worden vaak gecombineerd met PVC visgraat of andere harde vloeren. MOVT Projects maakt strakke overgangen tussen verschillende vloerafwerkingen.",
      },
    ],
  },
  {
    slug: "laminaat",
    title: "Laminaatvloeren",
    shortTitle: "Laminaat",
    description:
      "Laminaat blijft een populaire keuze door de uitstekende prijs-kwaliteitverhouding. Moderne laminaatvloeren zijn nauwelijks van echt hout te onderscheiden. MOVT Projects legt laminaat snel en vakkundig.",
    heroImage: "/projects/residential/woonkamer-visgraat-grijs.jpg",
    icon: "M4 4h16v3H4V4zm0 5h16v3H4V9zm0 5h16v3H4v-3zm0 5h16v3H4v-3z",
    benefits: [
      "Uitstekende prijs-kwaliteitverhouding",
      "Krasbestendig en kleurvast",
      "Geschikt voor vloerverwarming",
      "Snelle installatie",
      "Groot aanbod in dessins",
      "Makkelijk te onderhouden",
    ],
    faq: [
      {
        question: "Wat is het verschil tussen laminaat en PVC?",
        answer:
          "Laminaat heeft een HDF-kern en is gevoelig voor vocht, terwijl PVC volledig waterbestendig is. PVC is ook stiller en comfortabeler. Laminaat is wel vaak voordeliger in aanschaf.",
      },
      {
        question: "Kan laminaat in de keuken gelegd worden?",
        answer:
          "Laminaat in de keuken is mogelijk maar niet ideaal vanwege vochtgevoeligheid. We adviseren hier PVC als alternatief.",
      },
    ],
  },
  {
    slug: "trap-renovatie",
    title: "Trap Renovatie",
    shortTitle: "Trap Renovatie",
    description:
      "Geef je trap een complete metamorfose met PVC of laminaat bekleding. MOVT Projects renoveert trappen in dezelfde stijl als je vloer voor een doorlopend, luxe resultaat.",
    heroImage: "/projects/stairs/trap-renovatie-pvc.jpg",
    icon: "M2 22l4-4v-4l4-4V6l4-4h8v4l-4 4v4l-4 4v4l-4 4H2z",
    benefits: [
      "Naadloze aansluiting op je vloer",
      "Anti-slip afwerking voor veiligheid",
      "Diverse kleuren en materialen",
      "Geen sloop nodig van bestaande trap",
      "Binnen 1-2 dagen gerealiseerd",
      "Jarenlang mooi en slijtvast",
    ],
    faq: [
      {
        question: "Wat kost een trap renovatie?",
        answer:
          "Een volledige trap renovatie kost gemiddeld €800 tot €2.500, afhankelijk van het aantal treden, het gekozen materiaal en de complexiteit van de trap.",
      },
      {
        question: "Kan elke trap gerenoveerd worden?",
        answer:
          "Vrijwel elke rechte of kwartslag trap kan gerenoveerd worden. Open trappen en spiltrappen zijn ook mogelijk maar vragen meer maatwerk.",
      },
    ],
  },
  {
    slug: "commerciele-projecten",
    title: "Commerciële Projecten",
    shortTitle: "Commercieel",
    description:
      "MOVT Projects is gespecialiseerd in grootschalige vloerprojecten voor kantoren, horeca, retail en utiliteitsbouw. Van honderden tot duizenden vierkante meters — wij leveren op tijd en binnen budget.",
    heroImage: "/projects/commercial/kantoor-visgraat-lounge.jpg",
    icon: "M3 21V7l9-4 9 4v14H3zm4-3h4v-3H7v3zm6 0h4v-3h-4v3zm-6-5h4V9H7v4zm6 0h4V9h-4v4z",
    benefits: [
      "Ervaring met grote oppervlaktes",
      "Strakke planning en deadlines",
      "Alle vloertypes onder één dak",
      "Combinatie van materialen mogelijk",
      "Minimale overlast tijdens werkzaamheden",
      "Landelijke dekking",
    ],
    faq: [
      {
        question: "Hoe groot zijn de projecten die jullie aankunnen?",
        answer:
          "MOVT Projects heeft ervaring met projecten van honderden tot duizenden vierkante meters. Van een klein kantoor tot een compleet bedrijfspand — geen project is te groot.",
      },
      {
        question: "Werken jullie ook in het weekend of 's avonds?",
        answer:
          "Ja, voor commerciële projecten werken we ook buiten kantooruren om overlast te minimaliseren. Dit stemmen we vooraf af.",
      },
    ],
  },
  {
    slug: "behang",
    title: "Behang & Wandafwerking",
    shortTitle: "Behang",
    description:
      "Een perfecte vloer verdient perfecte wanden. MOVT Projects verzorgt professioneel behangwerk en wandafwerking — van luxe vinylbehang en fotobehang tot strak sauswerk. Zo krijgt uw interieur één doorlopende, hoogwaardige uitstraling.",
    heroImage: "/projects/residential/woonkamer-visgraat-grijs.jpg",
    icon: "M4 3h16v18H4V3zm4 0v18M4 9h4M4 15h4m4-8h6m-6 4h6m-6 4h4",
    benefits: [
      "Luxe behangsoorten en vinylbehang",
      "Strak voorbereidingswerk: egaal en glad",
      "Perfecte aansluiting op vloer en plinten",
      "Fotobehang en maatwerk prints mogelijk",
      "Gecombineerd met vloerproject: één planning",
      "Advies over kleur en materiaal aan huis",
    ],
    faq: [
      {
        question: "Wat kost behangen per m²?",
        answer:
          "Professioneel behangwerk kost gemiddeld €12 tot €30 per m², afhankelijk van het type behang en de staat van de ondergrond. Bij een combinatie met een vloerproject hanteren wij scherpe combitarieven.",
      },
      {
        question: "Moet ik zelf behang aanleveren?",
        answer:
          "Dat mag, maar hoeft niet. Wij werken met A-merken en adviseren u graag over de beste keuze voor uw ruimte, stijl en budget.",
      },
      {
        question: "Verwijderen jullie ook oud behang?",
        answer:
          "Ja, wij verwijderen oud behang, repareren de ondergrond en zorgen voor een strak eindresultaat. Alles in één opdracht.",
      },
      {
        question: "Kan behangen gecombineerd worden met een nieuwe vloer?",
        answer:
          "Zeker — dat is zelfs onze specialiteit. Wij plannen wand- en vloerwerk in de juiste volgorde, zodat u één aanspreekpunt heeft en het resultaat naadloos aansluit.",
      },
    ],
  },
  {
    slug: "volledig-interieur",
    title: "Volledig Interieur",
    shortTitle: "Volledig Interieur",
    description:
      "Van vloer tot wand tot trap: MOVT Projects realiseert complete interieurtransformaties. Eén team, één planning, één aanspreekpunt — en een resultaat waarin alles klopt. Ideaal bij verhuizing, verbouwing of complete restyling.",
    heroImage: "/projects/residential/woonkamer-kubus-donker.jpg",
    icon: "M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10",
    benefits: [
      "Vloer, wanden en trap in één project",
      "Eén aanspreekpunt van advies tot oplevering",
      "Strakke planning: sneller klaar, minder overlast",
      "Consistente stijl door het hele huis",
      "Combitarief: voordeliger dan losse opdrachten",
      "Persoonlijk interieuradvies aan huis",
    ],
    faq: [
      {
        question: "Wat valt er onder een volledig interieurproject?",
        answer:
          "Alles wat vast zit aan vloer en wand: PVC- of laminaatvloeren, gietvloeren, tapijttegels, trap renovatie, behang en sauswerk. Wij stemmen het complete plaatje op elkaar af.",
      },
      {
        question: "Hoe lang duurt een complete interieurtransformatie?",
        answer:
          "Een gemiddelde woning is binnen 1 tot 2 weken volledig getransformeerd, afhankelijk van de oppervlakte en gekozen materialen. U krijgt vooraf een heldere planning.",
      },
      {
        question: "Is een totaalproject voordeliger dan losse opdrachten?",
        answer:
          "Ja. Door werkzaamheden te combineren besparen we op voorrijkosten, materiaallogistiek en arbeidsuren. Dat voordeel verrekenen wij in een scherp combitarief.",
      },
      {
        question: "Kan ik in mijn woning blijven tijdens de werkzaamheden?",
        answer:
          "In de meeste gevallen wel. We werken ruimte voor ruimte, zodat uw woning leefbaar blijft. Bij grotere projecten adviseren we een korte uitloop naar logeeradres.",
      },
    ],
  },
];
