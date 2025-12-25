import { useEffect, useRef } from "react";

export default function useTypeEasterEgg({ onSunset, onMoon, onWe, onCats }) {
  const buffer = useRef("");

  useEffect(() => {
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const k = e.key;
      if (k.length !== 1) return;

      buffer.current = (buffer.current + k).slice(-30).toLowerCase();

      if (buffer.current.includes("sunset")) {
        onSunset?.();
        buffer.current = "";
      }
      if (buffer.current.includes("moon")) {
        onMoon?.();
        buffer.current = "";
      }
      if (buffer.current.includes("cats")) {
        onCats?.();
        buffer.current = "";
      }
      if (buffer.current.includes("we")) {
        onWe?.();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onMoon, onSunset, onWe, onCats]);
}
