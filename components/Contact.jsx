"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon, FacebookIcon } from "./icons";
import { person, social } from "@/data/profile";

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        position: "relative",
        zIndex: 1,
        paddingBlock: "var(--section-gap)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Large ambient glow behind section */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,212,200,0.055) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div className="signal-line" style={{ width: 40 }} />
            <span className="text-label">07 / CONTACT</span>
            <div className="signal-line" style={{ width: 40 }} />
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(32px, 6vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--fg-primary)",
              marginBottom: 24,
            }}
          >
            Let&apos;s build something{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(0,212,200,0.6)",
              }}
            >
              meaningful.
            </span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-body"
            style={{ marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}
          >
            I&apos;m open to junior developer roles, internships, collaborative projects, and conversations worth having. If you&apos;re building something and looking for a focused, motivated developer — reach out.
          </motion.p>

          {/* CTA links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 56,
            }}
          >
            {person.email !== "EMAIL_PLACEHOLDER" ? (
              <a
                href={`mailto:${person.email}`}
                className="btn-primary"
                aria-label="Send email"
              >
                <Mail size={14} />
                Send a Message
                <ArrowRight size={14} />
              </a>
            ) : (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  border: "1px solid var(--border-default)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  opacity: 0.5,
                  cursor: "default",
                }}
                title="Update EMAIL_PLACEHOLDER in data/profile.js"
              >
                <Mail size={14} />
                Add Your Email
              </div>
            )}

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="Connect on LinkedIn"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(0,212,200,0.2) 20%, rgba(0,212,200,0.4) 50%, rgba(0,212,200,0.2) 80%, transparent)",
              marginBottom: 40,
              transformOrigin: "center",
            }}
          />

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
            }}
          >
            {[
              { href: social.github, icon: <GithubIcon size={18} />, label: "GitHub" },
              { href: social.linkedin, icon: <LinkedInIcon size={18} />, label: "LinkedIn" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                {link.icon}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
