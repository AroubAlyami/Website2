import React, { useState } from "react";
import StickerLayer from "../components/StickerLayer";

export default function Kanye() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.kanye.rest");
      const data = await res.json();
      setQuote(data.quote);
    } catch (e) {
      setQuote("The quote portal is currently closed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="pageHero">
        <div className="kicker">API page</div>
        <h1>Kanye Wisdom</h1>
        <p className="muted">Sometimes profound. Sometimes… a tweet wearing a tuxedo.</p>
        <button onClick={fetchQuote} disabled={loading}>
          {loading ? "Summoning Kanye..." : "Another quote"}
        </button>
      </div>

      <div className="section stickerZone">
        <StickerLayer enabled density={1} />
        <div className="card" style={{ marginTop: 12 }}>
          <h2 style={{ marginBottom: 10 }}>🎤</h2>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.7 }}>
            {quote || "Press “Another quote”. Prepare your eyebrows."}
          </p>
        </div>
      </div>
    </div>
  );
}
