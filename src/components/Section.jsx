import React from "react";

export default function Section({ title, hint, children }) {
  return (
    <section className="section">
      {title && <h1>{title}</h1>}
      {hint && <p className="muted">{hint}</p>}

      <div className="sectionBody">
        {children}
      </div>
    </section>
  );
}
