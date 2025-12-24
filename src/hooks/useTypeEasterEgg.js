import { useEffect, useRef } from "react";

export default function useTypeEasterEgg({ onSunset, onMoon, onWe }) {
  const buffer = useRef("");

  useEffect(() => {
    function onKey(e) {
      // ignore modifiers
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const k = e.key;
      if (k.length !== 1) return;

      buffer.current = (buffer.current + k).slice(-20).toLowerCase();

      if (buffer.current.includes("sunset")) {
        onSunset?.();
        buffer.current = "";
      }
      if (buffer.current.includes("moon")) {
        onMoon?.();
        buffer.current = "";
      }
      if (buffer.current.includes("we")) {
        onWe?.();
        // don’t clear, just ping
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onMoon, onSunset, onWe]);
}
