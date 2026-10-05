"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{
        textAlign: align === "center" ? "center" : "left",
        marginBottom: "clamp(40px, 6vw, 80px)",
      }}
    >
      {/* Number + eyebrow row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          justifyContent: align === "center" ? "center" : "flex-start",
          marginBottom: 20,
        }}
      >
        {number && (
          <span
            className="text-mono"
            style={{ color: "var(--fg-muted)", letterSpacing: "0.12em" }}
          >
            {number}
          </span>
        )}
        {eyebrow && (
          <span className="text-label" style={{ color: "var(--accent-primary)" }}>
            {eyebrow}
          </span>
        )}
      </div>

      {/* Title */}
      {title && (
        <h2
          className="text-editorial"
          style={{ color: "var(--fg-primary)", marginBottom: description ? 20 : 0 }}
        >
          {title}
        </h2>
      )}

      {/* Signal line under title */}
      {title && (
        <div
          style={{
            display: align === "center" ? "flex" : "block",
            justifyContent: "center",
            marginTop: 16,
            marginBottom: description ? 24 : 0,
          }}
        >
          <div
            className="signal-line"
            style={{ width: align === "center" ? 60 : 80 }}
          />
        </div>
      )}

      {/* Description */}
      {description && (
        <p
          className="text-body"
          style={{
            maxWidth: 560,
            margin: align === "center" ? "0 auto" : 0,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
