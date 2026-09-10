import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-black border-t border-neutral-900 flex flex-col justify-center"
    >
      <div className="max-w-5xl">
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
          // GET IN TOUCH
        </p>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white mb-12">
          LET'S BUILD <br />
          <span className="text-yellow-400">SOMETHING GREAT.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Direct Info */}
          <div className="flex flex-col justify-between">
            <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
              I am open to full-stack engineering roles, technical contracting,
              and collaborative software projects.
            </p>

            <div className="flex flex-col gap-6 font-mono text-sm">
              <div>
                <p className="text-neutral-500 uppercase tracking-widest text-xs">
                  // PHONE
                </p>
                <p className="text-white text-lg font-bold mt-1">
                  +250 790 231 509
                </p>
              </div>

              <div>
                <p className="text-neutral-500 uppercase tracking-widest text-xs">
                  // PORTFOLIO
                </p>
                <a
                  href="https://my-portfolio-eight-ashen-89.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-400 text-lg font-bold hover:underline mt-1 inline-block"
                >
                  my-portfolio-eight-ashen-89.vercel.app
                </a>
              </div>

              <div>
                <p className="text-neutral-500 uppercase tracking-widest text-xs">
                  // GITHUB
                </p>
                <a
                  href="https://github.com/emmy-niyonsaba"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-lg font-bold hover:text-yellow-400 transition-colors mt-1 inline-block"
                >
                  github.com/emmy-niyonsaba
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-neutral-950 p-8 border border-neutral-900 flex flex-col gap-6"
          >
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-400 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-black border border-neutral-800 text-white p-4 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-400 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-black border border-neutral-800 text-white p-4 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-400 font-bold mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full bg-black border border-neutral-800 text-white p-4 focus:outline-none focus:border-yellow-400 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-black uppercase tracking-wider py-4 hover:bg-yellow-300 transition-colors"
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
