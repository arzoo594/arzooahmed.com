"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/data/profile";

// Flat list of all skills with metadata
const allSkills = [
  ...skills.core.map((s) => ({ ...s, tier: "Foundation" })),
  ...skills.frontend.map((s) => ({ ...s, tier: "Frontend" })),
  ...skills.backend.map((s) => ({ ...s, tier: "Backend" })),
  ...skills.tools.map((s) => ({ ...s, tier: "Tooling" })),
];

// Architecture hierarchy for the visual map
const architecture = [
  {
    layer: "FULL-STACK",
    items: ["JavaScript", "Git", "REST APIs"],
    accent: "var(--accent-primary)",
    width: "100%",
  },
  {
    layer: "FRONTEND",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    accent: "rgba(0,212,200,0.7)",
    width: "75%",
  },
  {
    layer: "BACKEND",
    items: ["Node.js", "Express.js", "MongoDB"],
    accent: "var(--accent-secondary)",
    width: "60%",
  },
  {
    layer: "TOOLS",
    items: ["GitHub", "VS Code"],
    accent: "rgba(99,102,241,0.6)",
    width: "45%",
  },
];

function SkillTag({ label, accent }) {
  return (
    <motion.span
      whileHover={{ borderColor: accent, color: accent }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 12px",
        border: "1px solid var(--border-subtle)",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.1em",
        color: "var(--fg-muted)",
        textTransform: "uppercase",
        background: "var(--bg-elevated)",
        cursor: "default",
        transition: "all 0.25s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      style={{
        position: "relative",
        zIndex: 1,
        paddingBlock: "var(--section-gap)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {/* Editorial header */}
        <div className="grid-editorial">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: 6, display: "flex", flexDirection: "column", gap: 12 }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", letterSpacing: "0.12em" }}>
              02
            </span>
            <div className="signal-line-v" style={{ height: 60 }} />
            <span className="text-label">CAPABILITIES</span>
          </motion.div>

          <div>
            <motion.h2
              id="skills-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-editorial"
              style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
            >
              The Stack
            </motion.h2>

            {/* Architecture layers — visual system */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginBottom: "clamp(48px, 7vw, 80px)",
              }}
            >
              {architecture.map((layer, i) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Layer bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      padding: "14px 20px",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border-subtle)",
                      cursor: "default",
                      transition: "border-color 0.3s, background 0.3s",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = layer.accent;
                      e.currentTarget.style.background = "var(--bg-surface)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.background = "var(--bg-elevated)";
                    }}
                  >
                    {/* Left color band */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: layer.accent,
                        opacity: 0.6,
                      }}
                    />

                    {/* Layer name */}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        color: "var(--fg-muted)",
                        textTransform: "uppercase",
                        minWidth: 80,
                        flexShrink: 0,
                      }}
                    >
                      {layer.layer}
                    </span>

                    {/* Skill tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                      }}
                    >
                      {layer.items.map((item) => (
                        <SkillTag key={item} label={item} accent={layer.accent} />
                      ))}
                    </div>

                    {/* Background progress bar */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: layer.width,
                        background: `linear-gradient(90deg, ${layer.accent}08, transparent)`,
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connector lines between layers — SVG */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "clamp(12px, 2vw, 20px)",
              }}
              className="skill-stat-grid"
            >
              {[
                { label: "PRIMARY LANGUAGE", value: "JavaScript" },
                { label: "MAIN FRAMEWORK", value: "React / Next.js" },
                { label: "DATABASE", value: "MongoDB" },
                { label: "STACK", value: "MERN" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  style={{
                    padding: "20px",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-elevated)",
                    position: "relative",
                  }}
                >
                  {/* Corner mark */}
                  <div style={{
                    position: "absolute",
                    top: -1, left: -1,
                    width: 8, height: 8,
                    borderTop: "2px solid var(--accent-primary)",
                    borderLeft: "2px solid var(--accent-primary)",
                    opacity: 0.4,
                  }} />
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 8,
                      letterSpacing: "0.16em",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--fg-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skill-stat-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
