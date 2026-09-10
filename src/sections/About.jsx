import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { aboutText, stats } from "../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 lg:px-20 bg-ink border-t border-charcoal flex flex-col justify-center"
    >
      <div className="max-w-5xl">
        <SectionHeader
          eyebrow="About Me"
          title="Engineering driven by"
          highlight="precision."
        />

        <div className="grid md:grid-cols-2 gap-12 text-white/70 font-light leading-relaxed text-lg mb-16">
          <div>
            <p className="mb-6">{aboutText.intro}</p>
            <p>{aboutText.detail}</p>
          </div>
          <div>
            <h3 className="text-paper font-bold uppercase tracking-wider text-xl mb-4 border-l-2 border-accent pl-3">
              {aboutText.philosophyTitle}
            </h3>
            <p className="mb-6">{aboutText.philosophyBody}</p>
            <p className="text-accent font-mono text-sm">
              &ldquo;{aboutText.quote}&rdquo;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-charcoal">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-charcoal/30 p-6 border border-charcoal hover:border-accent/60 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-black text-accent font-mono mb-2">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/60 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
