import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-ink border-t border-charcoal flex flex-col justify-center"
    >
      <div className="max-w-4xl">
        <SectionHeader
          eyebrow="Career Trajectory"
          title="Experience and"
          highlight="timeline."
        />

        <div className="relative border-l border-charcoal ml-4 pl-8 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-ink border-2 border-charcoal" />

              <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold text-paper mt-1">
                {exp.role}{" "}
                <span className="text-white/50 font-light">
                  @ {exp.company}
                </span>
              </h3>
              <p className="text-white/60 font-light leading-relaxed mt-3 max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
