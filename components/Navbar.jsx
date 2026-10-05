"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon, FacebookIcon } from "./icons";
import { person, social, nav } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
          ...(scrolled && {
            background: "rgba(5,7,8,0.88)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }),
        }}
      >
        <div className="container">
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: scrolled ? 60 : 80,
              transition: "height 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Logo / Monogram */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              aria-label={`${person.name} — Home`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              {/* AA monogram mark */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  border: "1px solid rgba(0,212,200,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--accent-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  AA
                </span>
                {/* Corner accent */}
                <div style={{
                  position: "absolute",
                  top: -2, left: -2,
                  width: 6, height: 6,
                  borderTop: "2px solid var(--accent-primary)",
                  borderLeft: "2px solid var(--accent-primary)",
                }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--fg-primary)",
                  letterSpacing: "0.01em",
                  display: "none",
                }}
                className="sm-name"
              >
                ARZOO
              </span>
            </a>

            {/* Desktop Nav Links */}
            <ul
              role="list"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(20px, 3vw, 40px)",
                listStyle: "none",
              }}
              className="desktop-nav"
            >
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--fg-secondary)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      padding: "4px 0",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-primary)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-secondary)"; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right: social + CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
              className="desktop-nav"
            >
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{ color: "var(--fg-muted)", transition: "color 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{ color: "var(--fg-muted)", transition: "color 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
                style={{ color: "var(--fg-muted)", transition: "color 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={`mailto:${person.email}`}
                aria-label="Send email"
                style={{ color: "var(--fg-muted)", transition: "color 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                <Mail size={16} />
              </a>

              <div
                style={{
                  width: 1,
                  height: 20,
                  background: "var(--border-default)",
                }}
              />

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent-primary)",
                  textDecoration: "none",
                  padding: "8px 16px",
                  border: "1px solid rgba(0,212,200,0.25)",
                  transition: "all 0.3s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,200,0.08)";
                  e.currentTarget.style.borderColor = "rgba(0,212,200,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(0,212,200,0.25)";
                }}
              >
                Let&apos;s Connect
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                color: "var(--fg-primary)",
                cursor: "pointer",
                padding: 8,
              }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Navigation menu"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(5,7,8,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              paddingTop: 100,
              paddingInline: "clamp(20px, 5vw, 40px)",
            }}
          >
            <ul role="list" style={{ listStyle: "none" }}>
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 0",
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(24px, 6vw, 36px)",
                      fontWeight: 500,
                      color: "var(--fg-secondary)",
                      textDecoration: "none",
                      letterSpacing: "-0.02em",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-primary)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-secondary)"; }}
                  >
                    <span>{item.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--fg-muted)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: "flex",
                gap: 20,
                marginTop: 40,
              }}
            >
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "var(--fg-muted)" }}
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "var(--fg-muted)" }}
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: "var(--fg-muted)" }}
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={`mailto:${person.email}`}
                aria-label="Email"
                style={{ color: "var(--fg-muted)" }}
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (min-width: 640px) {
          .sm-name { display: block !important; }
        }
      `}</style>
    </>
  );
}
