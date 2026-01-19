import React, { useMemo, useState, useEffect } from "react";
import { STICKERS } from "../data";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StickerLayer({ enabled = true, density = 1 }) {
  const sources = STICKERS || [];
  const [placed, setPlaced] = useState([]);

  const pick = useMemo(() => (sources.length ? sources : []), [sources]);

  // Spawn helper
  const makeSticker = ({ x, y }) => {
    const chosen = pick[Math.floor(Math.random() * pick.length)];
    return {
      id: crypto.randomUUID(),
      src: chosen.src,
      x,
      y,
      size: rand(45, 95),
      rot: rand(-25, 25),
      // float behavior
      vy: rand(0.25, 0.75),      // speed down (px per tick)
      vx: rand(-0.12, 0.12),     // tiny side drift
      spin: rand(-0.12, 0.12),   // tiny rotation drift
      life: 0,
    };
  };

  // AUTO SPAWN (random)
  useEffect(() => {
    if (!enabled || pick.length === 0) return;

    const interval = setInterval(() => {
      const s = makeSticker({
        x: rand(40, window.innerWidth - 40),
        y: rand(-60, 40), // start slightly above/top
      });

      setPlaced((p) => [...p, s].slice(-120));
    }, 2000);

    return () => clearInterval(interval);
  }, [enabled, pick]);

  // FLOAT ANIMATION LOOP
  useEffect(() => {
    if (!enabled) return;

    let raf = 0;

    const tick = () => {
      setPlaced((prev) => {
        const h = window.innerHeight;

        const next = prev
          .map((s) => {
            const h = window.innerHeight;
            const fadeStart = h * 0.65;   // start fading after 65% down
            const fadeEnd = h * 0.95;     // almost invisible near bottom

            let opacity = 1;
            if (s.y > fadeStart) {
            opacity = Math.max(0, 1 - (s.y - fadeStart) / (fadeEnd - fadeStart));
              }

      return {
        ...s,
        x: s.x + s.vx,
        y: s.y + s.vy,
        rot: s.rot + s.spin,
        life: s.life + 1,
        opacity,
  };
})

          // remove once it drifts off the bottom (with a little buffer)
          .filter((s) => s.y < h + 140);

        return next;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  // CLICK SPAWN (burst)
  const drop = (e) => {
    if (!enabled || pick.length === 0) return;

    const tag = e.target?.tagName?.toLowerCase();
    if (["button", "a", "input", "textarea", "select"].includes(tag)) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const count = Math.max(1, Math.round(density));

    const newOnes = Array.from({ length: count }).map(() =>
      makeSticker({
        x: x + rand(-20, 20),
        y: y + rand(-20, 20),
      })
    );

    setPlaced((p) => [...p, ...newOnes].slice(-120));
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
