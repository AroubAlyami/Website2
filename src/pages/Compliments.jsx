import React, { useMemo, useState } from "react";
import Section from "../components/Section";
import ConfettiButton from "../components/ConfettiButton";
import { COMPLIMENTS } from "../data";

function pickDifferent(list, current) {
  if (!list.length) return "";
  if (list.length === 1) return list[0];

  let next = current;
  while (next === current) {
    next = list[Math.floor(Math.random() * list.length)];
  }
  return next;
}

export default function Compliments() {
  const first = useMemo(() => (COMPLIMENTS[0] || ""), []);
  const [text, setText] = useState(first);
  const [count, setCount] = useState(0);

  const onNew = () => {
    const next = pickDifferent(COMPLIMENTS, text);
    setText(next);
    setCount((c) => c + 1);
  };

  return (
    <Section title="Compliment Generator" hint="One at a time. On purpose.">
      <div className="card">
        <div className="complimentBox">
          <div className="complimentText">{text}</div>
          <div className="complimentMeta">Clicks: {count}</div>
        </div>

        <div className="complimentActions">
          <button onClick={onNew}>New one</button>

          <ConfettiButton
            label="Extra"
            message="Approved. Keep going."
          />
        </div>

        <div className="miniNote">
          (I can see you giggling).
        </div>
      </div>
    </Section>
  );
}
