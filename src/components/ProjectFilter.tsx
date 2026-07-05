"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

const categories = [
  { label: "Alles", value: "alles" },
  { label: "Particulier", value: "particulier" },
  { label: "Zakelijk", value: "zakelijk" },
] as const;

const types = [
  "PVC Visgraat",
  "Designvloer",
  "Gietvloer",
  "Tapijttegels",
  "Trap Renovatie",
] as const;

interface ProjectFilterProps {
  projects: Project[];
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("alles");
  const [activeType, setActiveType] = useState<string | null>(null);

  const filtered = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "alles" || project.category === activeCategory;
    const matchesType = !activeType || project.type === activeType;
    return matchesCategory && matchesType;
  });

  return (
    <>
      {/* Filter Bar */}
      <div className="mb-12 space-y-4">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? "bg-gold text-charcoal"
                  : "bg-charcoal-light text-cream hover:bg-charcoal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Type filters */}
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() =>
                setActiveType(activeType === type ? null : type)
              }
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeType === type
                  ? "bg-gold text-charcoal"
                  : "bg-charcoal-light text-cream hover:bg-charcoal"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid - Masonry style */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-grey">
          Geen projecten gevonden met deze filters.
        </p>
      )}
    </>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Vary heights for masonry effect
  const aspectClass =
    index % 3 === 0
      ? "aspect-[4/5]"
      : index % 3 === 1
        ? "aspect-[4/3]"
        : "aspect-square";

  return (
    <div
      className="mb-6 break-inside-avoid"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
      }}
    >
      <div
        className="group relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative w-full ${aspectClass}`}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent p-5 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="mb-2 inline-block w-fit rounded-full bg-gold/90 px-3 py-1 text-xs font-medium text-charcoal">
            {project.category === "particulier"
              ? "Particulier"
              : "Zakelijk"}
          </span>
          <h3 className="text-lg font-semibold text-cream">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-grey-light">{project.type}</p>
        </div>
      </div>
    </div>
  );
}
