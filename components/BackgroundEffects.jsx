"use client";

export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Deep radial — top left origin (hero area) */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "70vw",
          height: "70vw",
          background:
            "radial-gradient(ellipse at center, rgba(0,212,200,0.045) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Secondary radial — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.04) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Micro warm accent — mid-right */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "8%",
          width: "20vw",
          height: "20vw",
          background:
            "radial-gradient(ellipse at center, rgba(245,158,11,0.025) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Technical grid overlay */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.018,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#00D4C8"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="grid-coarse"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 180 0 L 0 0 0 180"
              fill="none"
              stroke="#00D4C8"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-coarse)" opacity="0.4" />
      </svg>

      {/* Horizontal signal lines */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,212,200,0.08) 30%, rgba(0,212,200,0.12) 50%, rgba(0,212,200,0.08) 70%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.06) 20%, rgba(99,102,241,0.1) 50%, rgba(99,102,241,0.06) 80%, transparent 100%)",
        }}
      />

      {/* Vertical signal line — right side */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "8%",
          width: "1px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,212,200,0.06) 20%, rgba(0,212,200,0.1) 50%, rgba(0,212,200,0.06) 80%, transparent 100%)",
        }}
      />

      {/* Noise texture overlay — subtle grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.022,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
