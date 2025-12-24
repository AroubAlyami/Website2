import React from "react";
import confetti from "canvas-confetti";

export default function ConfettiButton({ label = "Confetti", message, onAfter }) {
  const fire = () => {
    confetti({
      particleCount: 110,
      spread: 70,
      origin: { y: 0.7 },
    });
    if (message) alert(message);
    onAfter?.();
  };

  return (
    <button className="btn" onClick={fire}>
      {label}
    </button>
  );
}
