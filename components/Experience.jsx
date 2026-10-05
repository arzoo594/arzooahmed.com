"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/profile";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  // Only render if there is real experience data
  const hasReal = experience.some(
    (e) => !e.role.startsWith("Add") && !e.company.startsWith("Add")
  );

  return (
    <section
      aria-labelledby="experience-heading"
      style={{
        position: "relative",
        zIndex: 1,
        paddingBlock: "var(--section-gap)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div className="grid-editorial">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: 6, display: "flex", flexDirection: "column", gap: 12 }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", letterSpacing: "0.12em" }}>
              05
            </span>
            <div className="signal-line-v" style={{ height: 60 }} />
            <span className="text-label">JOURNEY</span>
          </motion.div>

          <div>
            <motion.h2
              id="experience-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-editorial"
              style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
            >
              Professional Journey
            </motion.h2>

            {!hasReal && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  padding: "clamp(24px, 4vw, 40px)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated)",
                  marginBottom: 32,
                  position: "relative",
                }}
              >
                <div style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: "1px solid var(--border-default)", borderLeft: "1px solid var(--border-default)" }} />

                <div className="text-label" style={{ marginBottom: 16 }}>
                  CURRENTLY BUILDING
                </div>

                <p className="text-body" style={{ maxWidth: 560 }}>
                  Currently focused on building a strong foundation in full-stack development through personal projects, open-source contributions, and continuous learning. Actively seeking junior developer and internship opportunities.
                </p>

                <div
                  style={{
                    marginTop: 28,
                    paddingTop: 20,
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {["JavaScript", "React", "Next.js", "Node.js", "MongoDB"].map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Experience entries */}
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "clamp(16px, 2.5vw, 28px)",
                  padding: "clamp(20px, 3vw, 32px) 0",
                  borderTop: i === 0 ? "1px solid var(--border-subtle)" : "none",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
                className="exp-entry-grid"
              >
                {/* Left: period + type */}
                <div style={{ paddingTop: 3 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 8,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      opacity: exp.period.startsWith("Add") ? 0.3 : 1,
                    }}
                  >
                    <Calendar size={10} />
                    {exp.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      color: "var(--accent-primary)",
                      opacity: exp.type.includes("Add") ? 0.3 : 0.7,
                    }}
                  >
                    {exp.type}
                  </div>
                </div>

                {/* Right: role + company + description */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(18px, 2.5vw, 22px)",
                      fontWeight: 600,
                      color: "var(--fg-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: 4,
                      opacity: exp.role.startsWith("Add") ? 0.3 : 1,
                    }}
                  >
                    {exp.role}
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "var(--accent-primary)",
                      marginBottom: 12,
                      opacity: exp.company.startsWith("Add") ? 0.3 : 0.8,
                    }}
                  >
                    {exp.company}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--fg-muted)",
                      marginBottom: 16,
                      opacity: exp.location.startsWith("Add") ? 0.3 : 1,
                    }}
                  >
                    <MapPin size={10} />
                    {exp.location}
                  </div>

                  <p
                    className="text-body"
                    style={{ opacity: exp.description.startsWith("Add") ? 0.3 : 1 }}
                  >
                    {exp.description}
                  </p>

                  {exp.technologies.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                      {exp.technologies.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .exp-entry-grid {
            grid-template-columns: 160px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
