import React, { useState } from "react";
import { navItems } from "../../data/navigation";
import { contactInfo } from "../../data/contact";

const Sidebar = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-ink/95 backdrop-blur-sm border-b border-charcoal z-50 flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-paper"
        >
          EMMANUEL Niyonsaba<span className="text-accent">.</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-accent text-2xl font-bold focus:outline-none"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden fixed inset-0 top-[65px] bg-ink z-40 flex flex-col p-8 gap-6 border-b border-charcoal">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleMobileNav(id)}
              className={`text-left text-2xl font-bold transition-colors ${
                activeSection === id ? "text-accent" : "text-white/60"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-72 bg-ink border-r border-charcoal flex-col justify-between p-8 z-50">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-paper">
            EMMANUEL<span className="text-accent">.</span>
          </h1>
          <p className="text-xs uppercase tracking-widest text-white/50 font-medium mt-1">
            Software Developer
          </p>
        </div>

        <nav className="flex flex-col gap-5" aria-label="Section navigation">
          {navItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                aria-current={isActive ? "true" : undefined}
                className="group text-left w-fit"
              >
                <span
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-white/50 group-hover:text-paper"
                  }`}
                >
                  {label}
                </span>
                {/* Underline indicator for the active section */}
                <span
                  className={`block h-[2px] bg-accent mt-1 transition-all duration-200 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="border-t border-charcoal pt-6">
          <p className="text-xs text-white/50 uppercase tracking-widest">
            {contactInfo.location}
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/60 hover:text-accent transition-colors uppercase"
            >
              GitHub
            </a>
            <a
              href={contactInfo.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/60 hover:text-accent transition-colors uppercase"
            >
              Web
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
