"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/data/profile";
import Image from "next/image";

function ProjectImagePlaceholder({ number, accentColor }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${number}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={accentColor} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${number})`} />
      </svg>

      {/* Diagonal lines */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={accentColor} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={accentColor} strokeWidth="1" />
      </svg>

      {/* Project number */}
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(48px, 8vw, 80px)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: `1px ${accentColor}30`,
          letterSpacing: "-0.04em",
          zIndex: 1,
          userSelect: "none",
        }}
      >
        {number}
      </span>

      {/* Label */}
      <span
        style={{
          position: "absolute",
          bottom: 14,
          right: 14,
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.14em",
          color: `${accentColor}50`,
          textTransform: "uppercase",
        }}
      >
        ADD IMAGE
      </span>
    </div>
  );
}

function FeaturedProject({ project }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Featured project: ${project.title}`}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "clamp(32px, 5vw, 56px)",
        marginBottom: "clamp(64px, 10vw, 120px)",
        padding: "clamp(24px, 4vw, 48px)",
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-elevated)",
        position: "relative",
        overflow: "hidden",
      }}
      className="featured-project-grid"
    >
      {/* Corner marks */}
      <div style={{ position: "absolute", top: -1, left: -1, width: 12, height: 12, borderTop: `2px solid ${project.accentColor}`, borderLeft: `2px solid ${project.accentColor}` }} />
      <div style={{ position: "absolute", bottom: -1, right: -1, width: 12, height: 12, borderBottom: `2px solid ${project.accentColor}`, borderRight: `2px solid ${project.accentColor}` }} />

      {/* Image */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: -1,
            background: `linear-gradient(135deg, ${project.accentColor}15, transparent)`,
            zIndex: 0,
          }}
        />
        <motion.div
          whileHover={reduce ? {} : { scale: 1.01 }}
          transition={{ duration: 0.4 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          ) : (
            <ProjectImagePlaceholder
              number={project.number}
              accentColor={project.accentColor}
            />
          )}
        </motion.div>
      </div>

      {/* Meta */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span className="text-label" style={{ color: project.accentColor }}>
            FEATURED PROJECT
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.14em",
              color: "var(--fg-muted)",
            }}
          >
            / {project.number}
          </span>
        </div>

        <h3
          className="text-title"
          style={{ marginBottom: 16, color: "var(--fg-primary)" }}
        >
          {project.title}
        </h3>

        <p className="text-body" style={{ marginBottom: 24 }}>
          {project.description}
        </p>

        {/* Tech */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label={`View ${project.title} live`}
            >
              Live Project <ExternalLink size={12} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub <GithubIcon size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectRow({ project, index }) {
  const isEven = index % 2 === 0;
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-label={`Project ${project.number}: ${project.title}`}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "clamp(24px, 4vw, 48px)",
        padding: "clamp(20px, 3vw, 36px) 0",
        borderTop: "1px solid var(--border-subtle)",
      }}
      className="project-row-grid"
    >
      {/* Image */}
      <motion.div
        whileHover={reduce ? {} : { scale: 1.02 }}
        transition={{ duration: 0.4 }}
        style={{ order: isEven ? 0 : 1 }}
        className="project-row-visual"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <ProjectImagePlaceholder
            number={project.number}
            accentColor={project.accentColor}
          />
        )}
      </motion.div>

      {/* Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          order: isEven ? 1 : 0,
        }}
        className="project-row-info"
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.14em",
              color: "var(--fg-muted)",
            }}
          >
            PROJECT / {project.number}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.1em",
              color: project.accentColor,
              padding: "2px 8px",
              border: `1px solid ${project.accentColor}30`,
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
        </div>

        <h3
          className="text-title"
          style={{ marginBottom: 14, color: "var(--fg-primary)" }}
        >
          {project.title}
        </h3>

        <p className="text-body" style={{ marginBottom: 20 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: 10 }}
              aria-label={`View ${project.title} live`}
            >
              Live <ExternalLink size={11} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: 10 }}
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub <GithubIcon size={11} />
            </a>
          )}
        </div> */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label={`View ${project.title} live`}
            >
              Live Project <ExternalLink size={12} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub <GithubIcon size={12} />
            </a>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .project-row-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
              03
            </span>
            <div className="signal-line-v" style={{ height: 60 }} />
            <span className="text-label">WORK</span>
          </motion.div>

          <div>
            <motion.h2
              id="projects-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-editorial"
              style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
            >
              Selected Work
            </motion.h2>

            {/* Featured projects */}
            {featured.map((p) => (
              <FeaturedProject key={p.id} project={p} />
            ))}

            {/* Other projects */}
            {rest.map((p, i) => (
              <ProjectRow key={p.id} project={p} index={i} />
            ))}
          </div>
          
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .featured-project-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
