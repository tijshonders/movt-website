"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-semibold text-charcoal">Bedankt!</h3>
        <p className="mt-2 font-body text-grey">
          We nemen binnen 24 uur contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-white p-8 shadow-lg">
      <h2 className="font-heading text-2xl font-semibold text-charcoal">
        Vraag een offerte aan
      </h2>

      <div>
        <label htmlFor="naam" className="mb-1 block text-sm font-medium text-charcoal">
          Naam *
        </label>
        <input
          type="text"
          id="naam"
          name="naam"
          required
          className="w-full rounded-lg border border-cream-dark bg-white p-4 font-body text-charcoal transition focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
          placeholder="Uw volledige naam"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-charcoal">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-cream-dark bg-white p-4 font-body text-charcoal transition focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
          placeholder="uw@email.nl"
        />
      </div>

      <div>
        <label htmlFor="telefoon" className="mb-1 block text-sm font-medium text-charcoal">
          Telefoon
        </label>
        <input
          type="tel"
          id="telefoon"
          name="telefoon"
          className="w-full rounded-lg border border-cream-dark bg-white p-4 font-body text-charcoal transition focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
          placeholder="06 28 47 11 52"
        />
      </div>

      <div>
        <label htmlFor="type-vloer" className="mb-1 block text-sm font-medium text-charcoal">
          Type vloer *
        </label>
        <select
          id="type-vloer"
          name="type-vloer"
          required
          className="w-full rounded-lg border border-cream-dark bg-white p-4 font-body text-charcoal transition focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
        >
          <option value="">Selecteer een optie</option>
          <option value="pvc-visgraat">PVC Visgraat</option>
          <option value="gietvloer">Gietvloer</option>
          <option value="tapijttegels">Tapijttegels</option>
          <option value="laminaat">Laminaat</option>
          <option value="trap-renovatie">Trap Renovatie</option>
          <option value="commercieel">Commercieel Project</option>
          <option value="anders">Anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="oppervlakte" className="mb-1 block text-sm font-medium text-charcoal">
          Geschatte oppervlakte in m&sup2;
        </label>
        <input
          type="number"
          id="oppervlakte"
          name="oppervlakte"
          min="1"
          className="w-full rounded-lg border border-cream-dark bg-white p-4 font-body text-charcoal transition focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
          placeholder="bijv. 45"
        />
      </div>

      <div>
        <label htmlFor="bericht" className="mb-1 block text-sm font-medium text-charcoal">
          Bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={4}
          className="w-full resize-none rounded-lg border border-cream-dark bg-white p-4 font-body text-charcoal transition focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
          placeholder="Vertel ons meer over uw project..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-gold px-8 py-4 font-heading text-lg font-semibold text-charcoal-dark transition hover:bg-gold-light hover:shadow-lg"
      >
        Offerte Aanvragen
      </button>
    </form>
  );
}
