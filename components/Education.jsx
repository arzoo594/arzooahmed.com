"use client";

import { motion } from "framer-motion";
import { education } from "@/data/profile";
import { BookOpen, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
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
              04
            </span>
            <div className="signal-line-v" style={{ height: 60 }} />
            <span className="text-label">EDUCATION</span>
          </motion.div>

          <div>
            <motion.h2
              id="education-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-editorial"
              style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
            >
              Academic Path
            </motion.h2>

            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                {/* Primary academic block */}
                <div
                  style={{
                    padding: "clamp(24px, 4vw, 40px)",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-elevated)",
                    position: "relative",
                    marginBottom: 24,
                  }}
                >
                  {/* Corner marks */}
                  <div style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: "2px solid var(--accent-primary)", borderLeft: "2px solid var(--accent-primary)", opacity: 0.5 }} />
                  <div style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, borderBottom: "1px solid var(--border-default)", borderRight: "1px solid var(--border-default)" }} />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "clamp(20px, 3vw, 32px)",
                    }}
                    className="edu-inner-grid"
                  >
                    {/* Degree block */}
                    <div>
                      {/* Status badge */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontFamily: "var(--font-mono)",
                            fontSize: 9,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "var(--accent-primary)",
                            padding: "3px 10px",
                            border: "1px solid rgba(0,212,200,0.2)",
                            background: "rgba(0,212,200,0.05)",
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: "var(--accent-primary)",
                            }}
                          />
                          {edu.status}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 9,
                            letterSpacing: "0.12em",
                            color: "var(--fg-muted)",
                            textTransform: "uppercase",
                          }}
                        >
                          {edu.period}
                        </span>
                      </div>

                      {/* Degree title */}
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "clamp(22px, 3vw, 32px)",
                          fontWeight: 700,
                          color: "var(--fg-primary)",
                          letterSpacing: "-0.025em",
                          lineHeight: 1.1,
                          marginBottom: 8,
                        }}
                      >
                        {edu.degree}
                      </div>

                      {/* Field */}
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 15,
                          color: "var(--accent-primary)",
                          marginBottom: 12,
                          opacity: edu.field.startsWith("Add") ? 0.4 : 1,
                        }}
                      >
                        {edu.field}
                      </div>

                      {/* Institution */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          color: "var(--fg-secondary)",
                          marginBottom: 4,
                          opacity: edu.institution.startsWith("Add") ? 0.4 : 1,
                        }}
                      >
                        <BookOpen size={13} style={{ flexShrink: 0 }} />
                        {edu.institution}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          color: "var(--fg-muted)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        <MapPin size={10} style={{ flexShrink: 0 }} />
                        {edu.location}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <div
                        style={{
                          height: 1,
                          background: "var(--border-subtle)",
                          marginBottom: 20,
                        }}
                      />
                      <p className="text-body">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Academic focus areas */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
              }}
              className="focus-grid"
            >
              {[
                { label: "Study Mode", value: "On-Campus" },
                { label: "Parallel Focus", value: "Software Engineering" },
                { label: "Specialisation", value: "MERN Stack" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "16px 18px",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 8,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                      marginBottom: 6,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--fg-primary)",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .edu-inner-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .focus-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
