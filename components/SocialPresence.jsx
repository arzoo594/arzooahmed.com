"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon, FacebookIcon } from "./icons";
import { social, person } from "@/data/profile";

export default function SocialPresence() {
  return (
    <section
      aria-labelledby="social-heading"
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
              06
            </span>
            <div className="signal-line-v" style={{ height: 60 }} />
            <span className="text-label">PRESENCE</span>
          </motion.div>

          <div>
            <motion.h2
              id="social-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-editorial"
              style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
            >
              Digital Presence
            </motion.h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 2,
              }}
              className="presence-grid"
            >
              {/* LinkedIn — large panel */}
              <motion.a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ borderColor: "rgba(99,102,241,0.4)", background: "rgba(99,102,241,0.05)" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(28px, 4vw, 44px)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated)",
                  textDecoration: "none",
                  cursor: "pointer",
                  minHeight: 200,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                {/* Background shape */}
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                      }}
                    >
                      <LinkedInIcon size={20} color="#6366F1" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      color="var(--fg-muted)"
                      style={{ transition: "color 0.2s" }}
                    />
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 600,
                      color: "var(--fg-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    LinkedIn
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "var(--fg-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Connect professionally. View my background and let&apos;s talk about opportunities.
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    linkedin.com/in/arzoo-ahmed2003
                  </span>
                  <span className="text-label" style={{ color: "#6366F1" }}>
                    CONNECT →
                  </span>
                </div>
              </motion.a>

              {/* GitHub panel */}
              <motion.a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ borderColor: "rgba(0,212,200,0.4)", background: "rgba(0,212,200,0.04)" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(28px, 4vw, 44px)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated)",
                  textDecoration: "none",
                  cursor: "pointer",
                  minHeight: 200,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: -30,
                    left: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,212,200,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(0,212,200,0.08)",
                        border: "1px solid rgba(0,212,200,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                      }}
                    >
                      <GithubIcon size={20} color="var(--accent-primary)" />
                    </div>
                    <ArrowUpRight size={18} color="var(--fg-muted)" />
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 600,
                      color: "var(--fg-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    GitHub
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "var(--fg-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Explore my repositories, projects, and contributions.
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    github.com/arzoo594
                  </span>
                  <span className="text-label">VIEW →</span>
                </div>
              </motion.a>

              {/* Facebook panel */}
              <motion.a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook profile"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ borderColor: "rgba(99,102,241,0.35)", background: "rgba(99,102,241,0.04)" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(28px, 4vw, 44px)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated)",
                  textDecoration: "none",
                  cursor: "pointer",
                  minHeight: 200,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                      }}
                    >
                      <FacebookIcon size={20} color="#6366F1" />
                    </div>
                    <ArrowUpRight size={18} color="var(--fg-muted)" />
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 600,
                      color: "var(--fg-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    Facebook
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "var(--fg-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Follow along and connect on Facebook.
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    facebook.com/arzoo.ahmed.017
                  </span>
                  <span className="text-label" style={{ color: "#6366F1" }}>VIEW →</span>
                </div>
              </motion.a>

              {/* Email panel */}
              <motion.a
                href={`mailto:${person.email}`}
                aria-label="Send an email"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ borderColor: "rgba(245,158,11,0.35)", background: "rgba(245,158,11,0.04)" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(28px, 4vw, 44px)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated)",
                  textDecoration: "none",
                  cursor: "pointer",
                  minHeight: 200,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                      }}
                    >
                      <Mail size={20} color="#F59E0B" />
                    </div>
                    <ArrowUpRight size={18} color="var(--fg-muted)" />
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 600,
                      color: "var(--fg-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "var(--fg-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Prefer direct contact? Drop me an email.
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {person.email}
                  </span>
                  <span className="text-label" style={{ color: "#F59E0B" }}>MAIL →</span>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .presence-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
