import React from "react";
import Section from "../components/Section";
import { ABOUT } from "../data";

export default function About() {
  return (
    <Section title="About You (As Observed by Me)">
      <div className="card">
        <div className="row">
          <div className="label">Known aliases</div>
          <div className="value">{ABOUT.aliases.join(" · ")}</div>
        </div>
        <div className="row">
          <div className="label">Special skills</div>
          <ul className="valueList">
            {ABOUT.skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="row">
          <div className="label">Status</div>
          <div className="value">{ABOUT.status}</div>
        </div>
      </div>
    </Section>
  );
}
