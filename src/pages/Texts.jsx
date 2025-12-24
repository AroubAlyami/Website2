import React from "react";
import Section from "../components/Section";
import Chat from "../components/Chat";
import { CHAT } from "../data";

export default function Texts() {
  return (
    <Section title="Us, In Text Messages" hint="A documentary, but make it unserious.">
      <Chat items={CHAT} />
    </Section>
  );
}
