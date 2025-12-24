import React from "react";

export default function CardGrid({ items }) {
  return (
    <div className="grid">
      {items.map((t, i) => (
        <div className="tile" key={i}>{t}</div>
      ))}
    </div>
  );
}
