import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ink py-8 px-6 md:px-16 lg:px-20 border-t border-charcoal text-white/50 text-xs font-mono uppercase tracking-widest">
      <div className="max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} Emmanuel Niyonsaba. All rights
          reserved.
        </p>
        <p className="text-white/40">Built with passion and code.</p>
      </div>
    </footer>
  );
};

export default Footer;
