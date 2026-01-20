import React, { useState } from "react";
import StickerLayer from "../components/StickerLayer";

export default function YesNo() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      setAnswer(data);
    } catch (e) {
      setAnswer({ answer: "error", image: "", forced: false });
    } finally {
      setLoading(false);
    }
  };

  const label =
    answer?.answer === "yes" ? "YES ✅" : answer?.answer === "no" ? "NO ❌" : answer?.answer ? "MAYBE 🤷‍♀️" : "";

  return (
    <div className="page">
      <div className="pageHero">
        <div className="kicker">API page</div>
        <h1>Yes / No Oracle</h1>
        <p className="muted">Ask the universe. It answers with a GIF.</p>
        <button onClick={ask} className="warm" disabled={loading}>
          {loading ? "Consulting the void..." : "Ask again"}
        </button>
      </div>

      <StickerLayer enabled density={1} />

        <div className="section">
        <div className="card" style={{ marginTop: 12 }}>

          <h2 style={{ marginBottom: 10 }}>{label || "Click “Ask again” 😗"}</h2>

          {answer?.image ? (
            <img
              src={answer.image}
              alt={answer.answer}
              style={{
                width: "100%",
                maxWidth: 520,
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(0,0,0,0.2)",
                display: "block",
              }}
            />
          ) : (
            <p className="muted">{answer?.answer === "error" ? "API hiccup. Try again." : ""}</p>
          )}
        </div>
      </div>
    </div>
  );
}
