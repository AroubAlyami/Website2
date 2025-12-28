import React from "react";

export default function Section({ title, hint, children }) {
  return (
    <div className="page">
      <div className="pageHero">
        <div className="pageHeroTop">
          <h1 className="pageTitle">{title}</h1>
          {hint ? <div className="pageHint">{hint}</div> : null}
        </div>
      </div>

      <section className="section">
        {children}
      </section>
    </div>
  );
}
