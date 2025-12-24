import React from "react";

export default function Chat({ items }) {
  return (
    <div className="chat">
      {items.map((m, i) => (
        <div key={i} className={`bubble ${m.who === "You" ? "you" : "him"}`}>
          <div className="who">{m.who}</div>
          <div className="text">{m.text}</div>
        </div>
      ))}
    </div>
  );
}
