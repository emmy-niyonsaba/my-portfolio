import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { services } from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-ink border-t border-charcoal flex flex-col justify-center"
    >
      <div className="max-w-6xl">
        <SectionHeader
          eyebrow="What I Offer"
          title="Technical"
          highlight="services."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-charcoal/20 p-8 border border-charcoal hover:border-accent/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-paper mb-4">
                {srv.title}
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
