import React from "react";
import Section from "../components/Section";
import { TIMELINE } from "../data";

export default function Timeline() {
  return (
    <Section title="Memory Timeline" hint="Small moments. In order.">
      <div className="timeline">
        {TIMELINE.map((item, idx) => (
          <div className="timelineItem" key={idx}>
            <div className="timelineLeft">
              <div className="timelineDot" />
              {idx !== TIMELINE.length - 1 && <div className="timelineLine" />}
            </div>

            <div className="timelineCard">
              <div className="timelineEra">{item.era}</div>
              <div className="timelineTitle">{item.title}</div>
              <div className="timelineText">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
