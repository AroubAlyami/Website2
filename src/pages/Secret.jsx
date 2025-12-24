import React from "react";
import Section from "../components/Section";
import ConfettiButton from "../components/ConfettiButton";

export default function Secret() {
  return (
    <Section title="Secret Page 🔓" hint="Unlocked. You’re officially a menace now.">
      <div className="card">
        <p className="lead">
          If you’re here, you typed the Konami code. Which means you’re legally obligated to smile.
        </p>
        <ConfettiButton label="Extra confetti" message="Happy birthday. Now go get coffee." />
        <p className="miniNote">
          Easter egg: Type “we” a few times on any page. It does… something.
        </p>
      </div>
    </Section>
  );
}
