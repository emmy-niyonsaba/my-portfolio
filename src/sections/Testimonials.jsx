import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-ink border-t border-charcoal flex flex-col justify-center"
    >
      <div className="max-w-6xl">
        <SectionHeader
          eyebrow="What People Say"
          title="Client &"
          highlight="colleague feedback."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="bg-charcoal/20 p-8 border border-charcoal hover:border-accent/50 transition-colors flex flex-col justify-between"
            >
              <blockquote className="text-white/80 font-light leading-relaxed text-lg mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-paper font-bold">{t.name}</p>
                <p className="text-accent text-sm uppercase tracking-widest">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
