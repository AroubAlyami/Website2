import React from "react";
import Section from "../components/Section";
import Chat from "../components/Chat";
import { CHAT } from "../data";

import React from "react";

function classifyWho(who = "") {
  const w = who.toLowerCase();

  // Treat narrator/system lines if you ever add them later
  if (w.includes("system") || w.includes("narrator")) return "system";

  // Keep it simple: anything starting with "you" is right side
  if (w.trim().startsWith("you")) return "you";

  // Default: "me" left side
  return "me";
}

function cleanLabel(who = "") {
  return who.replace(/:$/, "").trim();
}

export default function Chat({ items = [] }) {
  return (
    <div className="chatThread">
      {items.map((m, idx) => {
        const side = classifyWho(m.who);
        const label = cleanLabel(m.who);

        return (
          <div key={idx} className={`chatBubble ${side}`}>
            <span className="sender">{label}</span>
            <p className="chatText">{m.text}</p>
          </div>
        );
      })}
    </div>
  );
}
