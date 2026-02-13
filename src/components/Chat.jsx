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
  const base = import.meta.env.BASE_URL;

  return (
    <div className="chatThread">
      {items.map((m, idx) => {
        const side = classifyWho(m.who);
        const label = cleanLabel(m.who);

        return (
          <div key={idx} className={`chatBubble ${side}`}>
            <span className="sender">{label}</span>

            {m.sticker && (
              <img
                src={`${base}${m.sticker}`}
                alt="sticker"
                className="chatSticker"
                loading="lazy"
              />
            )}

            <p className="chatText">{m.text}</p>
          </div>
        );
      })}
    </div>
  );
}
