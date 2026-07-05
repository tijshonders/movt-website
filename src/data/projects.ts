export interface Project {
  slug: string;
  title: string;
  category: "particulier" | "zakelijk";
  type: string;
  description: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "kantoor-visgraat-lounge",
    title: "Kantoorpand met PVC Visgraat",
    category: "zakelijk",
    type: "PVC Visgraat",
    description:
      "Groot kantoorpand voorzien van een stijlvolle PVC visgraatvloer. De warme houtlook creëert een professionele maar uitnodigende sfeer voor medewerkers en bezoekers.",
    images: [
      "/projects/commercial/kantoor-visgraat-lounge.jpg",
      "/projects/commercial/kantoor-visgraat-groot.jpg",
      "/projects/commercial/kantoor-visgraat-modern.jpg",
    ],
    featured: true,
  },
  {
    slug: "restaurant-visgraat-premium",
    title: "Horecagelegenheid Visgraat",
    category: "zakelijk",
    type: "PVC Visgraat",
    description:
      "PVC visgraatvloer gelegd in een sfeervolle horecagelegenheid. Slijtvast, waterbestendig en een warme uitstraling die perfect past bij het interieur.",
    images: ["/projects/commercial/restaurant-visgraat.jpg"],
    featured: true,
  },
  {
    slug: "kantoor-geometrisch-patroon",
    title: "Kantoor met Geometrisch Patroon",
    category: "zakelijk",
    type: "Designvloer",
    description:
      "Uniek geometrisch patroon gelegd in een modern kantoorpand. Dit op maat gemaakte ontwerp combineert verschillende houtdessins in een opvallend driehoekspatroon.",
    images: [
      "/projects/commercial/kantoor-geometrisch.jpg",
      "/projects/commercial/kantoor-mozaiek-1.jpg",
      "/projects/commercial/kantoor-mozaiek-2.jpg",
      "/projects/commercial/entree-mozaiek.jpg",
    ],
    featured: true,
  },
  {
    slug: "kantine-visgraat-tapijt",
    title: "Bedrijfskantine Visgraat & Tapijt",
    category: "zakelijk",
    type: "Tapijttegels",
    description:
      "Combinatie van PVC visgraat en tapijttegels in een grote bedrijfskantine. De gebogen overgang tussen de materialen creëert een vloeiend en modern design.",
    images: ["/projects/commercial/kantine-visgraat-tapijt.jpg"],
    featured: false,
  },
  {
    slug: "vergaderruimte-tapijt",
    title: "Vergaderruimte met Tapijttegels",
    category: "zakelijk",
    type: "Tapijttegels",
    description:
      "Stijlvolle vergaderruimte met hoogwaardige tapijttegels, gecombineerd met een visgraat PVC vloer in de aangrenzende ruimte.",
    images: ["/projects/commercial/vergaderruimte-tapijt.jpg"],
    featured: false,
  },
  {
    slug: "gietvloer-kantoor-wit",
    title: "Witte Gietvloer Kantoorpand",
    category: "zakelijk",
    type: "Gietvloer",
    description:
      "Strakke witte gietvloer in een modern kantoorpand. Naadloos, hygiënisch en een tijdloze uitstraling.",
    images: ["/projects/epoxy/gietvloer-wit-kantoor.jpg"],
    featured: true,
  },
  {
    slug: "woonkamer-visgraat-licht",
    title: "Woonkamer Lichte Visgraat",
    category: "particulier",
    type: "PVC Visgraat",
    description:
      "Lichte PVC visgraatvloer in een ruime woonkamer. De naturel eiken look geeft een warm en licht gevoel aan de ruimte.",
    images: ["/projects/residential/woonkamer-visgraat-licht.jpg"],
    featured: true,
  },
  {
    slug: "slaapkamer-visgraat-donker",
    title: "Slaapkamer Donkere Visgraat",
    category: "particulier",
    type: "PVC Visgraat",
    description:
      "Donkere PVC visgraatvloer gecombineerd met sfeervol behang. Een luxe slaapkameruitstraling met oog voor detail.",
    images: ["/projects/residential/slaapkamer-visgraat-donker.jpg"],
    featured: false,
  },
  {
    slug: "woonkamer-kubus-patroon",
    title: "Woonkamer Kubus Patroonvloer",
    category: "particulier",
    type: "Designvloer",
    description:
      "Donkere kubus-patroonvloer met een driedimensionaal effect. Een statement piece die de hele ruimte definieert.",
    images: ["/projects/residential/woonkamer-kubus-donker.jpg"],
    featured: false,
  },
  {
    slug: "hal-visgraat-stalen-deur",
    title: "Hal met Visgraat & Stalen Deur",
    category: "particulier",
    type: "PVC Visgraat",
    description:
      "Lichte visgraatvloer in een moderne hal met stalen binnendeuren. De combinatie van warme vloer en industriële accenten.",
    images: ["/projects/residential/hal-visgraat-licht.jpg"],
    featured: false,
  },
  {
    slug: "woonkamer-visgraat-grijs",
    title: "Woonkamer Grijze Visgraat",
    category: "particulier",
    type: "PVC Visgraat",
    description:
      "Grijstinten PVC visgraatvloer in een nieuwbouwwoning. Strak en modern, perfect passend bij een minimalistisch interieur.",
    images: ["/projects/residential/woonkamer-visgraat-grijs.jpg"],
    featured: false,
  },
  {
    slug: "woonkamer-visgraat-donker",
    title: "Woonkamer Donkere Visgraat",
    category: "particulier",
    type: "PVC Visgraat",
    description:
      "Donkere visgraatvloer met rijke houtnerf in een woonkamer onder constructie. De vloer wordt gelegd voordat de rest van de afwerking plaatsvindt.",
    images: ["/projects/residential/woonkamer-visgraat-donker.jpg"],
    featured: false,
  },
  {
    slug: "trap-renovatie-pvc",
    title: "Trap Renovatie met PVC",
    category: "particulier",
    type: "Trap Renovatie",
    description:
      "Volledige trap renovatie bekleed met PVC in dezelfde kleur als de vloer. Anti-slip strips voor veiligheid, naadloze overgang van vloer naar trap.",
    images: ["/projects/stairs/trap-renovatie-pvc.jpg"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
