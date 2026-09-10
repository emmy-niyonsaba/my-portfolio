import React from "react";

const stats = [
  { label: "Years Experience", value: "03+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "12+" },
  { label: "System Uptime", value: "99.9%" },
];

const About = () => {
  return (
    <section
      id="about"
      className=" py-24 px-6 md:px-16 lg:px-20 bg-neutral-950 border-t border-neutral-900 flex flex-col justify-center"
    >
      <div className="max-w-5xl">
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
          // ABOUT ME
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-12">
          ENGINEERING DRIVEN BY{" "}
          <span className="text-yellow-400">PRECISION.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-neutral-300 font-light leading-relaxed text-lg mb-16">
          <div>
            <p className="mb-6">
              I am a Web Developer dedicated to engineering clean, reliable
              digital tools. My background spans computer networking and modern
              software development, giving me a solid understanding of both
              full-stack systems and underlying infrastructure.
            </p>
            <p>
              Whether structuring robust backend architectures with NestJS,
              Spring Boot, or Node.js, or building fluid interactive frontend
              systems with React and TypeScript, I emphasize modular design and
              maintainability.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xl mb-4 border-l-2 border-yellow-400 pl-3">
              Development Philosophy
            </h3>
            <p className="mb-6">
              I believe code should be structured with clarity and intent.
              Modern web engineering requires continuous learning, strict
              adherence to clean code standards, and seamless user experiences.
            </p>
            <p className="text-yellow-400 font-mono text-sm">
              "Build systems that are scale-ready, fully testable, and
              straightforward to maintain."
            </p>
          </div>
        </div>

        {/* Animated Counter Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-neutral-900">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black p-6 border border-neutral-900 hover:border-yellow-400/50 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-black text-yellow-400 font-mono mb-2">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
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
