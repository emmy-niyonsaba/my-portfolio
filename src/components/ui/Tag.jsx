import React from "react";

const Tag = ({ children }) => (
  <span className="px-3 py-1 bg-ink text-white/70 text-xs font-mono uppercase border border-charcoal">
    {children}
  </span>
);

export default Tag;
