import React from "react";

export default function ThemeToggle({ theme, onToggle }) {
  const icon = theme === "sunset" ? "🌙" : "🌅";
  const label = theme === "sunset" ? "Switch to moon" : "Switch to sunset";

  return (
    <button className="toggle" onClick={onToggle} aria-label={label} title={label}>
      <span className="toggleIcon" aria-hidden>{icon}</span>
    </button>
  );
}
