import React, { useState } from "react";

const navItems = [
  { id: "home", label: "01 // HOME" },
  { id: "about", label: "02 // ABOUT" },
  { id: "skills", label: "03 // SKILLS" },
  { id: "projects", label: "04 // PROJECTS" },
  { id: "experience", label: "05 // EXPERIENCE" },
  { id: "services", label: "06 // SERVICES" },
  { id: "contact", label: "07 // CONTACT" },
];

const Sidebar = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Navigation */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-neutral-800 z-50 flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-black tracking-tighter text-white"
        >
          EMMANUEL Niyonsaba<span className="text-yellow-400">.</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-400 focus:outline-none text-2xl uppercase tracking-widest font-bold"
          aria-label="Toggle Navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-black/95 z-40 flex flex-col p-8 gap-6 border-b border-neutral-800">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleMobileNav(id)}
              className={`text-left text-2xl font-bold uppercase tracking-wider transition-colors ${
                activeSection === id
                  ? "text-yellow-400 pl-2 border-l-4 border-yellow-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-72 bg-black border-r border-neutral-800/80 flex-col justify-between p-8 z-50">
        {/* Brand Header */}
        <div>
          <h1 className="text-2xl font-black tracking-widest text-white uppercase">
            EMMANUEL Niyonsaba<span className="text-yellow-400">.</span>
          </h1>
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mt-1">
            Software Developer
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4">
          {navItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`group relative flex items-center text-left text-sm font-bold tracking-widest uppercase transition-all duration-300 py-1 ${
                  isActive
                    ? "text-yellow-400 pl-4"
                    : "text-neutral-400 hover:text-white hover:pl-2"
                }`}
              >
                {/* Active Marker Indicator */}
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-r transition-all duration-300 ${
                    isActive ? "opacity-100 h-full" : "opacity-0 h-0"
                  }`}
                />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-neutral-900 pt-6">
          <p className="text-xs text-neutral-500 uppercase tracking-widest">
            Kigali, Rwanda
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/emmy-niyonsaba"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-neutral-400 hover:text-yellow-400 transition-colors uppercase"
            >
              GH
            </a>
            <a
              href="https://my-portfolio-eight-ashen-89.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-neutral-400 hover:text-yellow-400 transition-colors uppercase"
            >
              WEB
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
