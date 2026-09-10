import React from "react";

const Hero = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-20 py-24 relative overflow-hidden bg-black"
    >
      {/* Background Subtle Tech Visual Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-4xl z-10">
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">
          // FULL-STACK ENGINEER
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-none mb-8">
          I BUILD <br />
          <span className="text-yellow-400">DIGITAL EXPERIENCES.</span>
        </h1>

        <p className="text-lg md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10">
          I am a Web Developer specializing in building robust, scalable
          full-stack applications and high-performance digital solutions with
          modern frameworks.
        </p>

        <div className="flex flex-wrap gap-5">
          <button
            onClick={() => onNavigate("projects")}
            className="px-8 py-4 bg-yellow-400 text-black font-black uppercase tracking-wider hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-4 bg-transparent border-2 border-neutral-700 text-white font-black uppercase tracking-wider hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Decorative Developer Terminal Badge */}
      <div className="hidden xl:block absolute right-16 bottom-20 bg-neutral-950 border border-neutral-800 p-6 rounded-none w-80 font-mono text-xs">
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 bg-red-500 inline-block" />
          <span className="w-3 h-3 bg-yellow-400 inline-block" />
          <span className="w-3 h-3 bg-green-500 inline-block" />
        </div>
        <p className="text-neutral-500">// System Status</p>
        <p className="text-yellow-400 mt-1">const developer = "Emmanuel";</p>
        <p className="text-neutral-300">status: "Ready for contracts";</p>
        <p className="text-neutral-300">location: "Kigali, Rwanda";</p>
      </div>
    </section>
  );
};

export default Hero;
