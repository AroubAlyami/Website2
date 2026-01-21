import StickerLayer from "../components/StickerLayer";
import React, { useState } from "react";

export default function DoSomething() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchActivity = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://www.boredapi.com/api/activity");
      const data = await res.json();
      setActivity(data);
    } catch (e) {
      setActivity({ activity: "Go dramatically stare out a window for 30 seconds." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="pageHero">
        <div className="kicker">API page</div>
        <h1>Do Something</h1>
        <p className="muted">When your brain says “no thoughts, just vibes.”</p>
        <button className="warm" onClick={fetchActivity} disabled={loading}>
          {loading ? "Generating chaos..." : "Give me an activity"}
        </button>
      </div>

      <div className="section stickerZone">
        <StickerLayer enabled density={1} />

        <div className="card" style={{ marginTop: 12 }}>
          <h2 style={{ marginBottom: 10 }}>🎲</h2>
          <p style={{ fontSize: "1.15rem" }}>
            {activity?.activity || "Click the button. Your destiny awaits."}
          </p>

          {activity?.type && (
            <p className="muted" style={{ marginTop: 10 }}>
              Type: {activity.type} {activity.participants ? `• People: ${activity.participants}` : ""}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
