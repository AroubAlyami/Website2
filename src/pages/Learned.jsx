import React from "react";
import Section from "../components/Section";
import { LEARNED } from "../data";

export default function Learned() {
  return (
    <Section title="Things I’ve Learned With You">
      <div className="card">
        <ul className="valueList">
          {LEARNED.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </div>
    </Section>
  );
}
