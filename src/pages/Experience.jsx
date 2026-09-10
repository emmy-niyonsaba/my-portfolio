import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Independent / Contract Work",
    period: "2023 - PRESENT",
    description:
      "Developing full-stack applications using React, Node.js, Spring Boot, and Tailwind CSS. Architecting databases, designing RESTful APIs, and implementing frontend systems.",
  },
  {
    role: "Software Development Trainee",
    company: "TheGym Rwanda",
    period: "2025 - PRESENT",
    description:
      "Participating in full-stack training, building practical software projects, conducting code reviews, and mastering modern software engineering practices.",
  },
  {
    role: "Technical Mentorship & Coaching",
    company: "Developer Community",
    period: "2025",
    description:
      "Coached junior developers on JavaScript, Node.js, and React. Led code review sessions and technical workshops.",
  },
  {
    role: "Networking Technician",
    company: "IT Support & Infrastructure",
    period: "2022 - PRESENT",
    description:
      "Provided network installation, hardware configuration, system troubleshooting, and infrastructure maintenance.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-black border-t border-neutral-900 flex flex-col justify-center"
    >
      <div className="max-w-4xl">
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
          // CAREER TRAJECTORY
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-16">
          EXPERIENCE & <span className="text-yellow-400">TIMELINE.</span>
        </h2>

        <div className="relative border-l border-neutral-800 ml-4 pl-8 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-black border-2 border-neutral-600 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-colors" />

              <span className="text-xs font-mono text-yellow-400 font-bold tracking-widest uppercase">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mt-1">
                {exp.role}{" "}
                <span className="text-neutral-500 font-light">
                  @ {exp.company}
                </span>
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed mt-3 max-w-2xl">
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
