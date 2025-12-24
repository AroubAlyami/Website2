import { useEffect, useRef } from "react";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a"
];

export default function useKonami(onUnlock) {
  const idx = useRef(0);

  useEffect(() => {
    function onKey(e) {
      const key = e.key;
      if (key === KONAMI[idx.current]) {
        idx.current += 1;
        if (idx.current === KONAMI.length) {
          idx.current = 0;
          onUnlock?.();
        }
      } else {
        idx.current = 0;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onUnlock]);
}
