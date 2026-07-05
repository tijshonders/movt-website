export interface Location {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  localContext: string;
  areas: string[];
  blogCity: "Rhenen" | "Lienden" | "Veenendaal" | "Tiel" | "Betuwe";
  image: string;
}

export const locations: Location[] = [
  {
    slug: "rhenen",
    city: "Rhenen",
    region: "Utrechtse Heuvelrug",
    metaTitle: "Vloerenspecialist Rhenen | PVC, Visgraat & Gietvloeren | MOVT",
    metaDescription:
      "Vloerenspecialist in Rhenen ✓ PVC visgraat, gietvloeren, laminaat & trap renovatie ✓ Gevestigd in de regio ✓ Gratis inmeting ✓ Binnen 48 uur offerte.",
    intro: [
      "Op zoek naar een vloerenspecialist in Rhenen? MOVT Projects is gevestigd in de regio en legt wekelijks vloeren in Rhenen, Elst en Achterberg. Van PVC visgraat tot naadloze gietvloeren — wij leveren vakwerk met garantie op materiaal én legwerk.",
      "Geen callcenter of wachttijden: u belt of appt rechtstreeks met de vakman. We komen gratis inmeten, adviseren aan huis met stalen, en u ontvangt binnen 48 uur een heldere offerte.",
    ],
    localContext:
      "Rhenen kent een prachtig gevarieerd woningaanbod: monumentale panden rond de Cunerakerk, karakteristieke woningen op de Heuvelrug en moderne nieuwbouw. Elke woning vraagt om een eigen aanpak van ondervloer en materiaal — en die lokale kennis hebben wij in huis.",
    areas: ["Rhenen centrum", "Elst (Utr.)", "Achterberg", "Remmerden"],
    blogCity: "Rhenen",
    image: "/projects/residential/woonkamer-visgraat-licht.jpg",
  },
  {
    slug: "lienden",
    city: "Lienden",
    region: "Betuwe",
    metaTitle: "Vloerenspecialist Lienden | PVC, Laminaat & Behang | MOVT",
    metaDescription:
      "Vloerenspecialist in Lienden ✓ PVC visgraat, laminaat, gietvloeren, trap renovatie & behang ✓ Lokaal bedrijf uit de Betuwe ✓ Gratis inmeting aan huis.",
    intro: [
      "MOVT Projects is dé vloerenspecialist van Lienden en omgeving. Als lokaal bedrijf uit de regio Rhenen-Lienden staan we snel bij u op de stoep — voor een nieuwe PVC vloer, laminaat, gietvloer, traprenovatie of compleet interieur.",
      "Onze klanten in Lienden waarderen de korte lijnen: rechtstreeks contact met de vakman, eerlijke prijzen en een strakke planning. Bekijk onze projecten of vraag direct een gratis offerte aan.",
    ],
    localContext:
      "Van karakteristieke dijkwoningen tot nieuwbouw: de woningen in Lienden en de Betuwe kennen we door en door. Oudere woningen vragen om vochtmeting en zorgvuldige egalisatie — standaard onderdeel van onze aanpak, geen verrassing achteraf.",
    areas: ["Lienden", "Ommeren", "Ingen", "Eck en Wiel", "Maurik", "Kesteren"],
    blogCity: "Lienden",
    image: "/projects/residential/woonkamer-visgraat-donker.jpg",
  },
  {
    slug: "betuwe",
    city: "de Betuwe",
    region: "Gelderland",
    metaTitle: "Vloeren Leggen in de Betuwe | Lokale Specialist | MOVT Projects",
    metaDescription:
      "Vloer laten leggen in de Betuwe? ✓ PVC, visgraat, laminaat & gietvloeren ✓ Kesteren, Ochten, Opheusden, Maurik e.o. ✓ Geen voorrijkosten ✓ Gratis offerte.",
    intro: [
      "De Betuwe is ons thuis. MOVT Projects legt vloeren van Kesteren tot Maurik en van Opheusden tot Ochten — als specialist uit de eigen regio, zonder voorrijkosten.",
      "Of het nu gaat om een dijkwoning met een eeuwenoude ondergrond of een strakke nieuwbouwwoning met vloerverwarming: wij kennen de woningen hier en adviseren eerlijk wat past.",
    ],
    localContext:
      "Dijkwoningen, boerderijen, arbeiderswoningen en nieuwbouw: de Betuwe heeft alles. Daarom starten wij altijd met een grondige inmeting inclusief vocht- en vlakheidsmeting. Pas dan adviseren we een vloer — en niet andersom.",
    areas: [
      "Kesteren",
      "Ochten",
      "Opheusden",
      "IJzendoorn",
      "Echteld",
      "Dodewaard",
      "Maurik",
      "Ingen",
      "Ommeren",
      "Lienden",
    ],
    blogCity: "Betuwe",
    image: "/projects/residential/slaapkamer-visgraat-donker.jpg",
  },
  {
    slug: "veenendaal",
    city: "Veenendaal",
    region: "Utrechtse Heuvelrug / Gelderse Vallei",
    metaTitle: "Vloerenspecialist Veenendaal | PVC Visgraat & Zakelijk | MOVT",
    metaDescription:
      "Vloerenspecialist in Veenendaal ✓ PVC visgraat voor nieuwbouw ✓ Zakelijke vloerprojecten ✓ Planning afgestemd op uw oplevering ✓ Gratis offerte binnen 48 uur.",
    intro: [
      "MOVT Projects legt vloeren door heel Veenendaal — van nieuwbouw in Veenendaal-Oost tot bestaande bouw in Dragonder en het centrum, en zakelijke projecten op de bedrijventerreinen.",
      "Nieuwbouwkopers helpen we graag: wij stemmen de planning af op uw opleverdatum, zodat de vloer erin ligt vóór de verhuizing.",
    ],
    localContext:
      "Veenendaal groeit hard en vrijwel alle nieuwbouw draait op vloerverwarming als hoofdverwarming. PVC is daarvoor dé vloer: dun, warmtegeleidend en vormvast. Voor kantoren en winkels leveren we tapijttegels, gietvloeren en slijtvast PVC — ook buiten kantooruren gelegd.",
    areas: ["Veenendaal-Oost", "Dragonder", "'t Franse Gat", "Centrum", "Petenbos", "Salamander"],
    blogCity: "Veenendaal",
    image: "/projects/commercial/kantoor-visgraat-modern.jpg",
  },
  {
    slug: "tiel",
    city: "Tiel",
    region: "Betuwe",
    metaTitle: "Vloerenbedrijf Tiel | PVC, Laminaat & Gietvloeren | MOVT Projects",
    metaDescription:
      "Vloerenbedrijf in Tiel ✓ PVC visgraat, laminaat, gietvloeren & behang ✓ Passewaaij, Drumpt & centrum ✓ Gratis inmeting ✓ Garantie op materiaal en legwerk.",
    intro: [
      "Tiel hoort tot het kerngebied van MOVT Projects. Van appartementen aan het Waalfront tot gezinswoningen in Passewaaij en bedrijfspanden op Latenstein: wij leggen er wekelijks vloeren.",
      "U krijgt bij ons het complete traject uit één hand: inmeten, egaliseren, leggen en afwerken — met garantie op materiaal én legwerk.",
    ],
    localContext:
      "Voor appartementen in Tiel adviseren we geluiddempende PVC-opbouw conform VvE-eisen. In Passewaaij en andere nieuwbouwwijken leggen we veel visgraat op vloerverwarming. En voor winkels en horeca in het centrum: slijtvaste vloeren die intensief gebruik aankunnen.",
    areas: ["Tiel centrum", "Passewaaij", "Drumpt", "Wadenoijen", "Kapel-Avezaath", "Zennewijnen"],
    blogCity: "Tiel",
    image: "/projects/residential/woonkamer-kubus-donker.jpg",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
