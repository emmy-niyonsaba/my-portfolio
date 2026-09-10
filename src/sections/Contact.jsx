import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { contactInfo } from "../data/contact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-ink border-t border-charcoal flex flex-col justify-center"
    >
      <div className="max-w-5xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build"
          highlight="something great."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between">
            <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
              I am open to full-stack engineering roles, technical
              contracting, and collaborative software projects.
            </p>

            <div className="flex flex-col gap-6 font-mono text-sm">
              <div>
                <p className="text-white/50 uppercase tracking-widest text-xs">
                  Phone
                </p>
                <p className="text-paper text-lg font-bold mt-1">
                  {contactInfo.phone}
                </p>
              </div>

              <div>
                <p className="text-white/50 uppercase tracking-widest text-xs">
                  Portfolio
                </p>
                <a
                  href={contactInfo.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent text-lg font-bold hover:underline mt-1 inline-block"
                >
                  {contactInfo.portfolioLabel}
                </a>
              </div>

              <div>
                <p className="text-white/50 uppercase tracking-widest text-xs">
                  GitHub
                </p>
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper text-lg font-bold hover:text-accent transition-colors mt-1 inline-block"
                >
                  {contactInfo.githubLabel}
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-charcoal/20 p-8 border border-charcoal flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/60 font-bold mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full bg-ink border border-charcoal text-paper p-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/60 font-bold mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full bg-ink border border-charcoal text-paper p-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/60 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full bg-ink border border-charcoal text-paper p-4 focus:outline-none focus:border-accent transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-ink font-black uppercase tracking-wider py-4 hover:bg-accent/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
