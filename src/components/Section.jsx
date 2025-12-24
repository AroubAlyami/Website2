import React from "react";
import { motion } from "framer-motion";

export default function Section({ title, children, hint }) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="sectionHeader">
        <h2>{title}</h2>
        {hint && <div className="hint">{hint}</div>}
      </div>
      <div className="sectionBody">{children}</div>
    </motion.section>
  );
}
