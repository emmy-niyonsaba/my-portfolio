import React from "react";

const projects = [
  {
    title: "Hotel Reservation System",
    description:
      "A comprehensive full-stack booking platform demonstrating real-world application development with secure authentication, property management, and reservation workflows.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/emmy-niyonsaba",
    demo: "https://my-portfolio-eight-ashen-89.vercel.app/",
  },
  {
    title: "Ikaze School Visitor Management System",
    description:
      "An intelligent visitor management solution designed for educational institutions, featuring check-in/check-out tracking and automated security protocols.",
    tags: ["NestJS", "React", "TypeScript", "Swagger"],
    github: "https://github.com/emmy-niyonsaba",
    demo: "https://my-portfolio-eight-ashen-89.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-neutral-950 border-t border-neutral-900 flex flex-col justify-center"
    >
      <div className="max-w-6xl">
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
          // FEATURED WORK
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-12">
          SELECTED <span className="text-yellow-400">PROJECTS.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group bg-black p-8 border border-neutral-800 hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-yellow-400">
                    // PROJECT 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-neutral-900 text-neutral-300 text-xs font-mono uppercase border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-neutral-900">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    GitHub Code
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                  >
                    Live Demo
                  </a>
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
