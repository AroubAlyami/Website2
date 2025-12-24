import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { SITE } from "../data";
import AudioPlayer from "../components/AudioPlayer";

export default function Home() {
  return (
    <Section
      title={`Happy Birthday, ${SITE.name} 🌅🌙`}
      hint="Try typing: sunset, moon, or the Konami code 👀"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
        <p className="lead">
          Welcome to your birthday website. It contains affection, chaos, and very light cybersecurity.
        </p>

        <div className="pillRow">
          <span className="pill">🌅 for my {SITE.nicknameForYou}</span>
          <span className="pill">🌙 for your moon era</span>
          <span className="pill">☕ coffee reviews welcome</span>
        </div>

        <AudioPlayer />

        <div className="miniNote">
          <strong>Note:</strong> This site is intentionally cozy, not intense. You are allowed to smile.
        </div>
      </motion.div>
    </Section>
  );
}
