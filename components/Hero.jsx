"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { person } from "@/data/profile";
import SignalVisual from "./SignalVisual";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const handleScrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Introduction"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 100,
        paddingBottom: 80,
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(48px, 8vw, 80px)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left column — Identity */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ position: "relative" }}
          >
            {/* Eyebrow status */}
            <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--accent-primary)",
                  padding: "6px 14px",
                  border: "1px solid rgba(0,212,200,0.2)",
                  background: "rgba(0,212,200,0.05)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent-primary)",
                    animation: reduceMotion ? "none" : "pulse 2s ease-in-out infinite",
                  }}
                />
                {person.status}
              </span>
            </motion.div>

            {/* Name — oversized offset editorial treatment */}
            <motion.div
              variants={fadeUp}
              style={{ position: "relative", marginBottom: 4 }}
            >
              {/* Decorative vertical coordinate label */}
              <div
                style={{
                  position: "absolute",
                  left: -32,
                  top: "50%",
                  transform: "translateY(-50%) rotate(-90deg)",
                  transformOrigin: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  color: "var(--fg-faint)",
                  whiteSpace: "nowrap",
                  display: "none",
                }}
                className="coord-label"
              >
                23.8103°N · 90.4125°E
              </div>

              <h1
                aria-label="Arzoo Ahmed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
                  margin: 0,
                }}
              >
                {/* ARZOO — large */}
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(72px, 14vw, 170px)",
                    color: "var(--fg-primary)",
                  }}
                >
                  ARZOO
                </span>
                {/* AHMED — offset right with accent stroke */}
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(72px, 14vw, 170px)",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(0,212,200,0.5)",
                    marginLeft: "clamp(24px, 5vw, 80px)",
                    position: "relative",
                  }}
                >
                  AHMED
                  {/* thin underline signal */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: 0,
                      right: 0,
                      height: 1,
                      background:
                        "linear-gradient(90deg, rgba(0,212,200,0.3), transparent)",
                    }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Divider signal */}
            <motion.div variants={fadeIn} style={{ marginBlock: 28 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div className="signal-line" style={{ width: 48, flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "var(--fg-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  MERN Stack Developer &amp; Full-Stack Engineer
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-body"
              style={{
                maxWidth: 480,
                marginBottom: 40,
                color: "var(--fg-secondary)",
              }}
            >
              {person.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                alignItems: "center",
              }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                Explore My Work
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-ghost"
              >
                Let&apos;s Connect
                <ArrowRight size={12} />
              </a>
            </motion.div>

            {/* Micro labels */}
            <motion.div
              variants={fadeIn}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 24px",
                marginTop: 48,
                paddingTop: 24,
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              {[
                { icon: <MapPin size={10} />, text: "DHAKA, BANGLADESH" },
                { text: "JAVASCRIPT / REACT / NEXT.JS" },
                { text: "FULL-STACK DEVELOPMENT" },
                { text: "OPEN TO OPPORTUNITIES" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    color: "var(--fg-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  {icon}
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — Signal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
            className="hero-visual"
          >
            {/* Ambient glow behind visual */}
            <div
              style={{
                position: "absolute",
                inset: "10%",
                background:
                  "radial-gradient(ellipse at center, rgba(0,212,200,0.08) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />
            <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
              <SignalVisual />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScrollDown}
        aria-label="Scroll to next section"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "var(--fg-muted)",
          padding: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .coord-label {
            display: block !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-visual {
            max-width: 360px;
            margin: 0 auto;
          }
        }
        @media (max-width: 480px) {
          .hero-visual {
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
}
