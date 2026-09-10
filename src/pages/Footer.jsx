import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-6 md:px-16 lg:px-20 border-t border-neutral-900 text-neutral-500 text-xs font-mono uppercase tracking-widest">
      <div className="max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} EMMANUEL NIYONSABA. ALL RIGHTS RESERVED.
        </p>
        <p className="text-neutral-400">BUILT WITH PASSION AND CODE.</p>
      </div>
    </footer>
  );
};

export default Footer;
