import React from "react";

function classifyWho(who = "") {
  const w = who.toLowerCase();
  if (w.includes("system") || w.includes("narrator")) return "system";
  if (w.trim().startsWith("you")) return "you";
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
