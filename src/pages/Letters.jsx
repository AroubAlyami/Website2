import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import { UNSENT_LETTERS } from "../data";

export default function Letters() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openLetter = (id) => setOpenId(id);
  const closeLetter = () => setOpenId(null);

  const active = UNSENT_LETTERS.find((l) => l.id === openId);

  return (
    <Section title="Letters We Never Sent" hint="Click a card to open it.">
      <div className="lettersGrid">
        {UNSENT_LETTERS.map((l) => (
          <button
            key={l.id}
            type="button"
            className="letterCard"
            onClick={() => openLetter(l.id)}
            aria-label={`Open letter: ${l.title}`}
          >
            <div className="letterCardTop">
              <div className="letterBadge">Unsent</div>
              <div className="letterDate">{l.date}</div>
            </div>

            <div className="letterCardTitle">{l.title}</div>
            <div className="letterCardHint">Click to read</div>
          </button>
        ))}
      </div>

      {active && (
        <div className="letterOverlay" role="dialog" aria-modal="true">
          <button
            className="letterOverlayBackdrop"
            onClick={closeLetter}
            aria-label="Close letter"
            type="button"
          />

          <div className="letterModal">
            <div className="letterModalHeader">
              <div>
                <div className="letterModalTitle">{active.title}</div>
                <div className="letterModalDate">{active.date}</div>
              </div>

              <button className="letterCloseBtn" onClick={closeLetter} type="button">
                Close
              </button>
            </div>

            <div className="letterModalBody">
              {active.body
                .trim()
                .split("\n")
                .map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
