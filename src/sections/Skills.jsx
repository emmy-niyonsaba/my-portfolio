import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-ink border-t border-charcoal flex flex-col justify-center"
    >
      <div className="max-w-6xl">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills and"
          highlight="technologies."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-charcoal/20 p-8 border border-charcoal hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-paper mb-6 border-b border-charcoal pb-3">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <img
                    key={sIdx}
                    src={skill.badge}
                    alt={skill.name}
                    className="h-9"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
