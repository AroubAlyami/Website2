import React, { useState } from "react";
import Section from "../components/Section";
import ConfettiButton from "../components/ConfettiButton";
import { GIFT } from "../data";

export default function Gift() {
  const [revealed, setRevealed] = useState(false);

  return (
    <Section title={GIFT.title} hint="This button is harmless. Allegedly.">
      <div className="giftBox">
        <ConfettiButton
          label={GIFT.button}
          onAfter={() => setRevealed(true)}
        />
        {revealed && (
          <div className="reveal">
            <p className="revealMain">{GIFT.reveal}</p>
            <p className="revealExtra">{GIFT.extra}</p>
          </div>
        )}
      </div>
    </Section>
  );
}
