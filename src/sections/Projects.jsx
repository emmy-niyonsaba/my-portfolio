import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Tag from "../components/ui/Tag";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-ink border-t border-charcoal flex flex-col justify-center"
    >
      <div className="max-w-6xl">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected"
          highlight="projects."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-charcoal/20 p-8 border border-charcoal hover:border-accent transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-paper mb-4">
                  {proj.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag, tIdx) => (
                    <Tag key={tIdx}>{tag}</Tag>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-charcoal">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-charcoal text-paper text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-ink transition-colors"
                    >
                      GitHub code
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border border-charcoal text-white/70 text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
