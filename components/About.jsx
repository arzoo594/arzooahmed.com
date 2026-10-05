"use client";

import { motion } from "framer-motion";
import { person } from "@/data/profile";

const philosophySteps = [
  { label: "LEARN", desc: "Study the system, not just the syntax." },
  { label: "BUILD", desc: "Write code that solves real problems." },
  { label: "BREAK", desc: "Test assumptions. Find the edge cases." },
  { label: "UNDERSTAND", desc: "Trace the failure. Know exactly why." },
  { label: "IMPROVE", desc: "Refine, document, repeat." },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        position: "relative",
        zIndex: 1,
        paddingBlock: "var(--section-gap)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {/* Editorial grid: number label left, content right */}
        <div className="grid-editorial">
          {/* Left — section marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              paddingTop: 6,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--fg-muted)",
                letterSpacing: "0.12em",
              }}
            >
              01
            </span>
            <div className="signal-line-v" style={{ height: 60 }} />
            <span className="text-label">ABOUT</span>
          </motion.div>

          {/* Right — content */}
          <div>
            {/* Large statement */}
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--fg-primary)",
                marginBottom: "clamp(24px, 4vw, 40px)",
                maxWidth: 700,
              }}
            >
              A developer who thinks in{" "}
              <span style={{ color: "var(--accent-primary)" }}>systems</span>,
              builds with{" "}
              <span style={{ color: "var(--accent-primary)" }}>intention</span>,
              and learns by{" "}
              <span style={{ color: "var(--accent-primary)" }}>doing</span>.
            </motion.h2>

            {/* Two-column text layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "clamp(20px, 3vw, 40px)",
                marginBottom: "clamp(40px, 6vw, 72px)",
              }}
              className="about-text-grid"
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-body"
              >
                {person.bio}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-body"
              >
                {person.bioExtended}
              </motion.p>
            </div>

            {/* Philosophy system */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 8 }}
            >
              <span className="text-label" style={{ marginBottom: 20, display: "block" }}>
                Development Philosophy
              </span>
            </motion.div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {philosophySteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    padding: "16px 0",
                    borderBottom: i < philosophySteps.length - 1
                      ? "1px solid var(--border-subtle)"
                      : "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,200,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {/* Connector arrow */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      flexShrink: 0,
                      width: 32,
                      paddingTop: 2,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        color: "var(--fg-muted)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < philosophySteps.length - 1 && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          color: "var(--accent-primary)",
                          opacity: 0.4,
                          marginTop: 2,
                        }}
                      >
                        ↓
                      </span>
                    )}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        color: "var(--accent-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--fg-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {step.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-text-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
