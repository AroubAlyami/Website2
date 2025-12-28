import React from "react";
import Section from "../components/Section";
import ImageCard from "../components/ImageCard";
import ConfettiButton from "../components/ConfettiButton";
import { CATS } from "../data";

export default function Cats() {
  return (
    <Section title="Our Future Cats 🐾" hint="This page is extremely serious.">
      <div className="catsTop">
        <p className="lead">
          Names are pending. Personalities are guaranteed.
        </p>

        <ConfettiButton label="Approve the cats" />
      </div>

      <div className="catsGrid">
        {CATS.map((c, idx) => (
          <ImageCard
            key={idx}
            src={c.image}
            alt={c.name}
            title={c.name}
            subtitle={c.title}
          />
        ))}
      </div>

      <div className="miniNote">
        FYI: Void is a non-negotiable. You get your raw chicken, I get my blackhole.
      </div>
    </Section>
  );
}
