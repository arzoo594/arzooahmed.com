"use client";

import { GithubIcon, LinkedInIcon } from "./icons";
import { person, social, nav } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border-subtle)",
        paddingBlock: "clamp(40px, 6vw, 72px)",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(32px, 5vw, 56px)",
            marginBottom: "clamp(32px, 5vw, 56px)",
          }}
          className="footer-top-grid"
        >
          {/* Brand */}
          <div>
            {/* AA monogram */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  border: "1px solid rgba(0,212,200,0.2)",
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
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--fg-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {person.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: "var(--fg-muted)",
                    textTransform: "uppercase",
                    marginTop: 2,
                  }}
                >
                  {person.titleShort}
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--fg-muted)",
                textTransform: "uppercase",
              }}
            >
              {person.location}
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                marginBottom: 16,
              }}
            >
              Navigation
            </div>
            <ul
              role="list"
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 24px",
              }}
            >
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-primary)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                marginBottom: 16,
              }}
            >
              Connect
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                <LinkedInIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: "clamp(20px, 3vw, 32px)",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--fg-muted)",
            }}
          >
            © {year} {person.name}. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--fg-faint)",
            }}
          >
            MERN Stack Developer &amp; Full-Stack Engineer
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1.5fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
