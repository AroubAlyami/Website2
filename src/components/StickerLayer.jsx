import React, { useMemo, useState, useEffect } from "react";

import { STICKERS } from "../data";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StickerLayer({ enabled = true, density = 1 }) {
  const sources = STICKERS || [];
  const [placed, setPlaced] = useState([]);

  const pick = useMemo(() => {
    return sources.length ? sources : [];
  }, [sources]);
  useEffect(() => {
  if (!enabled || pick.length === 0) return;

  const interval = setInterval(() => {
    const src = pick[Math.floor(Math.random() * pick.length)];

    const newSticker = {
      id: crypto.randomUUID(),
      src,
      x: rand(5, window.innerWidth - 5),
      y: rand(5, window.innerHeight - 5),
      size: rand(50, 95),
      rot: rand(-30, 30),
    };

    setPlaced((p) => [...p, newSticker].slice(-80));
  }, 2500); // every 2.5 seconds

  return () => clearInterval(interval);
}, [enabled, pick]);


  const drop = (e) => {
    if (!enabled || pick.length === 0) return;

    // If you click buttons/inputs/links, don't spam stickers
    const tag = e.target?.tagName?.toLowerCase();
    if (["button", "a", "input", "textarea", "select"].includes(tag)) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newOnes = Array.from({ length: count }).map(() => {
    const chosen = pick[Math.floor(Math.random() * pick.length)];
    const src = chosen.src;

    return {
      id: crypto.randomUUID(),
      src,
      x: x + rand(-18, 18),
      y: y + rand(-18, 18),
      size: rand(42, 90),
      rot: rand(-25, 25),
  };
});

    setPlaced((p) => [...p, ...newOnes].slice(-80)); // cap to prevent lag
  };

  const clear = () => setPlaced([]);

  return (
    <div className="stickerZone" onClick={drop}>
      <button className="stickerClear" onClick={clear} title="Clear stickers">
        🧽
      </button>

      {placed.map((s) => (
        <img
          key={s.id}
          src={s.src}
          alt=""
          className="sticker"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            transform: `translate(-50%, -50%) rotate(${s.rot}deg)`,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
