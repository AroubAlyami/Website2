import React from "react";
import Section from "../components/Section";
import { SUN_MOON } from "../data";

export default function SunMoon() {
  return (
    <Section title="Sunsets & Moons" hint="Two-way street. Even when you didn’t know it.">
      <div className="split">
        <div className="panel sunset">
          <h3>Sunsets 🌅</h3>
          <p>{SUN_MOON.sunset}</p>
          <div className="mini">PS: orange is now officially a safe color again.</div>
        </div>

        <div className="panel moon">
          <h3>Moons 🌙</h3>
          <p>{SUN_MOON.moon}</p>
          <div className="mini">PPS: phases are just moods with better PR.</div>
        </div>
      </div>
    </Section>
  );
}
