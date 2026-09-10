import React from "react";

const Hero = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-20 py-24 relative overflow-hidden bg-ink"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/me.jpg")' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      {/* Subtle background grid, no motion */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#3D3D3D_1px,transparent_1px),linear-gradient(to_bottom,#3D3D3D_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-4xl z-10">
        <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
          Full-Stack Engineer
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-paper leading-none mb-8">
          I build <br />
          <span className="text-accent">digital experiences.</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed mb-10">
          I am a Web Developer specializing in building robust, scalable
          full-stack applications and high-performance digital solutions with
          modern frameworks.
        </p>

        <div className="flex flex-wrap gap-5">
          <button
            onClick={() => onNavigate("projects")}
            className="px-8 py-4 bg-accent text-ink font-black uppercase tracking-wider hover:bg-accent/90 transition-colors"
          >
            View my work
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-4 bg-transparent border-2 border-charcoal text-paper font-black uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
          >
            Contact me
          </button>
        </div>
      </div>

      {/* Terminal-style badge, thematically consistent with a developer's site */}
      <div className="hidden xl:block absolute right-16 bottom-20 z-10 bg-charcoal/40 border border-charcoal p-6 w-80 font-mono text-xs">
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 bg-white/20 inline-block" />
          <span className="w-3 h-3 bg-accent inline-block" />
          <span className="w-3 h-3 bg-white/20 inline-block" />
        </div>
        <p className="text-white/50">// system status</p>
        <p className="text-accent mt-1">const developer = "Emmanuel";</p>
        <p className="text-white/70">status: "Ready for contracts";</p>
        <p className="text-white/70">location: "Kigali, Rwanda";</p>
      </div>
    </section>
  );
};

export default Hero;
