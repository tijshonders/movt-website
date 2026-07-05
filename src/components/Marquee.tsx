const items = [
  "PVC Visgraat",
  "Gietvloeren",
  "Tapijttegels",
  "Laminaat",
  "Trap Renovatie",
  "Commerciële Projecten",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-charcoal-dark py-5">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-heading px-8 text-sm font-medium uppercase tracking-[0.3em] text-cream/50">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
