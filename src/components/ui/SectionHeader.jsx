import React from "react";

/**
 * Consistent heading block used at the top of every section.
 * Usage: <SectionHeader eyebrow="About Me" title="Engineering driven by" highlight="precision." />
 */
const SectionHeader = ({ eyebrow, title, highlight }) => (
  <div className="mb-12">
    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
      {eyebrow}
    </p>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-paper">
      {title} <span className="text-accent">{highlight}</span>
    </h2>
  </div>
);

export default SectionHeader;
