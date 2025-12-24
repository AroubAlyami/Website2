import React from "react";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import { LAUGHS } from "../data";

export default function Laughs() {
  return (
    <Section title="Things That Make Me Laugh About You" hint="This page is medically approved dopamine.">
      <CardGrid items={LAUGHS} />
    </Section>
  );
}
