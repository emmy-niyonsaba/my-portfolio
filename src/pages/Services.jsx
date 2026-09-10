import React from "react";

const services = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end web application architecture from reactive user interfaces to scalable backends.",
  },
  {
    title: "Frontend Engineering",
    desc: "Building responsive, fast-loading, and accessible UI with React, Next.js, and Tailwind CSS.",
  },
  {
    title: "Backend & API Engineering",
    desc: "Designing RESTful microservices and monoliths with NestJS, Node.js, Spring Boot, and SQL databases.",
  },
  {
    title: "Network & System Config",
    desc: "Network setup, security protocols, router/switch configurations, and system troubleshooting.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-neutral-950 border-t border-neutral-900 flex flex-col justify-center"
    >
      <div className="max-w-6xl">
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
          // WHAT I OFFER
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-12">
          TECHNICAL <span className="text-yellow-400">SERVICES.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-black p-8 border border-neutral-800 hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest">
                  // SERVICE 0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mt-3 mb-4">
                  {srv.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
