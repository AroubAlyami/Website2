import React, { useMemo, useState, useEffect } from "react";
import { STICKERS } from "../data";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StickerLayer({ enabled = true, density = 1 }) {
  const sources = STICKERS || [];
  const [placed, setPlaced] = useState([]);

  const pick = useMemo(() => (sources.length ? sources : []), [sources]);

  /* RANDOM AUTO STICKERS */
  useEffect(() => {
    if (!enabled || pick.length === 0) return;

    const interval = setInterval(() => {
      const chosen = pick[Math.floor(Math.random() * pick.length)];

      const newSticker = {
        id: crypto.randomUUID(),
        src: chosen.src,
        x: rand(20, window.innerWidth - 20),
        y: rand(20, window.innerHeight - 20),
        size: rand(55, 95),
        rot: rand(-30, 30),
      };

      setPlaced((p) => [...p, newSticker].slice(-80));
    }, 2500);

    return () => clearInterval(interval);
  }, [enabled, pick]);

  /* CLICK STICKERS */
  const drop = (e) => {
    if (!enabled || pick.length === 0) return;

    const tag = e.target?.tagName?.toLowerCase();
    if (["button", "a", "input", "textarea", "select"].includes(tag)) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const count = Math.max(1, Math.round(density));

    const newOnes = Array.from({ length: count }).map(() => {
      const chosen = pick[Math.floor(Math.random() * pick.length)];

      return {
        id: crypto.randomUUID(),
        src: chosen.src,
        x: x + rand(-20, 20),
        y: y + rand(-20, 20),
        size: rand(45, 85),
        rot: rand(-25, 25),
      };
    });

    setPlaced((p) => [...p, ...newOnes].slice(-80));
  };

  const clear = () => setPlaced([]);

  return (
    <div className="stickerZone" onClick={drop}>
      <button className="stickerClear" onClick={clear}>🧽</button>

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
            position: "fixed",
            transform: `translate(-50%, -50%) rotate(${s.rot}deg)`,
            pointerEvents: "none",
            zIndex: 999,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
