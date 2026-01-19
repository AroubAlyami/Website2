import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { SITE } from "../data";

export default function Home() {
  return (
    <Section
      title={`Happy Birthday, ${SITE.name} 🌅🌙`}
      hint="Look at you...all grown up (and old)"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
        <p className="lead">
          Welcome to your birthday website. It contains affection, chaos, and very light cybersecurity (practically none. pls don't hack it).
        </p>

        <div className="pillRow">
          <span className="pill">Welcome to your birthday website. It contains affection, chaos, and very light cybersecurity (practically none. pls don't hack it).</span>
        </div>

        <div className="giggleGifWrap">
          <img src="/gifs/feet.gif" alt="kicking feet" className="giggleGif" />
        </div>



        <div className="miniNote">
          <strong>Note:</strong> This site is intentionally cozy, not intense. You are allowed to smile.
        </div>
      </motion.div>
    </Section>
  );
}
