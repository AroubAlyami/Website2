import React, { useState } from "react";
import Section from "../components/Section";
import { UNSENT_LETTERS } from "../data";

export default function Letters() {
  const [flippedId, setFlippedId] = useState(null);

  return (
    <Section
      title="Letters We Never Sent"
      hint="Click a card to flip it."
    >
      <div className="lettersGrid">
        {UNSENT_LETTERS.map((l) => {
          const isFlipped = flippedId === l.id;

          return (
            <button
              key={l.id}
              type="button"
              className={`flipCard ${isFlipped ? "isFlipped" : ""}`}
              onClick={() => setFlippedId(isFlipped ? null : l.id)}
              aria-pressed={isFlipped}
              title="Click to flip"
            >
              <div className="flipInner">
                {/* FRONT */}
                <div className="flipFace flipFront">
                  <div className="flipTop">
                    <div className="flipBadge">Unsent</div>
                    <div className="flipDate">{l.date}</div>
                  </div>

                  <div className="flipTitle">{l.title}</div>

                  {/* optional: tiny teaser line if you want */}
                  <div className="flipHint">Click to open</div>
                </div>

                {/* BACK */}
                <div className="flipFace flipBack">
                  <div className="flipBackTop">
                    <div className="flipBackTitle">{l.title}</div>
                    <div className="flipBackDate">{l.date}</div>
                  </div>

                  <div className="flipBody">
                    {l.body
                      .trim()
                      .split("\n")
                      .map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                  </div>

                  <div className="flipHint">Click to close</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="miniNote">
        Tip: Get some snacks. munching and reading is so fun.
      </div>
    </Section>
  );
}
