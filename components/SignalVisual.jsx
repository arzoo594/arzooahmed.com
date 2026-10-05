"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SignalVisual() {
  const reduceMotion = useReducedMotion();

  const spin = reduceMotion
    ? {}
    : {
        rotate: 360,
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
      };

  const spinReverse = reduceMotion
    ? {}
    : {
        rotate: -360,
        transition: { duration: 28, repeat: Infinity, ease: "linear" },
      };

  const spinSlow = reduceMotion
    ? {}
    : {
        rotate: 360,
        transition: { duration: 60, repeat: Infinity, ease: "linear" },
      };

  const pulse = reduceMotion
    ? {}
    : {
        opacity: [0.3, 0.8, 0.3],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <div className=""
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 520,
        aspectRatio: "1",
        margin: "0 auto",
        transform: "translateY(-90px)"
      }}
    >
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4C8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4C8" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
          </radialGradient>
          <filter id="blur-sm">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <filter id="blur-md">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="arcGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4C8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D4C8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="arcGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
         <clipPath id="profileClip">
  <circle cx="260" cy="260" r="105" />
</clipPath>
        </defs>

        {/* Center glow */}
        <circle cx="260" cy="260" r="80" fill="url(#centerGlow)" />

        {/* Outermost orbit ring */}
        <circle
          cx="260"
          cy="260"
          r="240"
          stroke="rgba(0,212,200,0.07)"
          strokeWidth="1"
        />

        {/* Outer orbit */}
        <motion.g animate={spinSlow} style={{ originX: "260px", originY: "260px" }}>
          <circle
            cx="260"
            cy="260"
            r="200"
            stroke="rgba(0,212,200,0.1)"
            strokeWidth="0.75"
            strokeDasharray="4 10"
          />
          {/* Outer nodes */}
          <circle cx="260" cy="60" r="3" fill="#00D4C8" opacity="0.6" />
          <circle cx="460" cy="260" r="2" fill="#6366F1" opacity="0.5" />
          <circle cx="260" cy="460" r="3" fill="#00D4C8" opacity="0.4" />
          <circle cx="60" cy="260" r="2" fill="#6366F1" opacity="0.5" />

          {/* Corner marks */}
          <line x1="252" y1="60" x2="268" y2="60" stroke="#00D4C8" strokeWidth="1" opacity="0.5" />
          <line x1="260" y1="52" x2="260" y2="68" stroke="#00D4C8" strokeWidth="1" opacity="0.5" />
        </motion.g>

        {/* Middle orbit */}
        <motion.g animate={spinReverse} style={{ originX: "260px", originY: "260px" }}>
          <circle
            cx="260"
            cy="260"
            r="155"
            stroke="rgba(99,102,241,0.12)"
            strokeWidth="1"
            strokeDasharray="1 8"
          />
          {/* Arc segment on middle orbit */}
          <path
            d="M 260 105 A 155 155 0 0 1 415 260"
            stroke="rgba(99,102,241,0.3)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Middle nodes */}
          <circle cx="387" cy="155" r="4" fill="#6366F1" opacity="0.7" />
          <circle cx="133" cy="365" r="3" fill="#00D4C8" opacity="0.5" />
          <circle cx="387" cy="365" r="2" fill="#F59E0B" opacity="0.5" />
        </motion.g>

        {/* Inner orbit */}
        <motion.g animate={spin} style={{ originX: "260px", originY: "260px" }}>
          <circle
            cx="260"
            cy="260"
            r="108"
            stroke="rgba(0,212,200,0.15)"
            strokeWidth="1"
          />
          {/* Glowing arc */}
          <path
            d="M 260 152 A 108 108 0 0 1 368 260"
            stroke="rgba(0,212,200,0.45)"
            strokeWidth="2"
            fill="none"
            filter="url(#blur-sm)"
          />
          <path
            d="M 260 152 A 108 108 0 0 1 368 260"
            stroke="rgba(0,212,200,0.2)"
            strokeWidth="1"
            fill="none"
          />
          {/* Inner node */}
          <circle cx="260" cy="152" r="5" fill="#00D4C8" opacity="0.9" />
          <circle cx="260" cy="152" r="10" fill="#00D4C8" opacity="0.15" filter="url(#blur-sm)" />
        </motion.g>

        {/* Static radial lines */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 260 + Math.cos(rad) * 85;
          const y1 = 260 + Math.sin(rad) * 85;
          const x2 = 260 + Math.cos(rad) * 115;
          const y2 = 260 + Math.sin(rad) * 115;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(0,212,200,0.2)"
              strokeWidth="1"
            />
          );
        })}

        {/* Center monogram ring */}
       {/* Profile image */}
<circle
  cx="260"
  cy="260"
  r="109"
  fill="#061414"
  stroke="rgba(0,212,200,0.25)"
  strokeWidth="2"
/>

<image
  href="https://i.ibb.co.com/zzpHDFN/1000010458.png"
  x="155"
  y="155"
  width="210"
  height="210"
  preserveAspectRatio="xMidYMid slice"
  clipPath="url(#profileClip)"
/>

<circle
  cx="260"
  cy="260"
  r="92"
  fill="none"
  stroke="rgba(0,212,200,0.12)"
  strokeWidth="2"
/>

        {/* Pulsing center dot */}
        {/* <motion.circle
          cx="260"
          cy="260"
          r="6"
          fill="#00D4C8"
          animate={pulse}
        /> */}

        {/* Coordinate labels */}
        <text x="502" y="264" fill="rgba(0,212,200,0.3)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          0°
        </text>
        <text x="245" y="18" fill="rgba(0,212,200,0.3)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          90°
        </text>

        {/* Technical tick marks on outermost ring */}
        {[0, 30, 60, 120, 150, 210, 240, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 260 + Math.cos(rad) * 237;
          const y1 = 260 + Math.sin(rad) * 237;
          const x2 = 260 + Math.cos(rad) * 243;
          const y2 = 260 + Math.sin(rad) * 243;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(0,212,200,0.25)"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Signal label bottom */}
        <text
          x="260"
          y="496"
          textAnchor="middle"
          fill="rgba(0,212,200,0.2)"
          fontSize="8"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="0.15em"
        >
          SIGNAL / ARCHITECTURE
        </text>
      </svg>
    </div>
  );
}
