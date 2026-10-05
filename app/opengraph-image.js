import { ImageResponse } from "next/og";
import { person, seo } from "@/data/profile";

export const runtime = "nodejs";
export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#050708",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(0,212,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(0,212,200,0.1) 0%, transparent 65%)",
          }}
        />

        {/* Radial glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)",
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* AA monogram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              border: "1px solid rgba(0,212,200,0.35)",
              color: "#00D4C8",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            AA
          </div>

          {/* Status badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(0,212,200,0.2)",
              background: "rgba(0,212,200,0.07)",
              padding: "6px 14px",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#00D4C8",
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00D4C8",
                display: "flex",
              }}
            />
            <span style={{ display: "flex" }}>OPEN TO OPPORTUNITIES</span>
          </div>
        </div>

        {/* Center — Name */}
        <div
          style={{
            position: "relative",
            lineHeight: 1,
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: "#EDF2F4",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              marginBottom: 4,
              display: "flex",
            }}
          >
            {person.firstName.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: "transparent",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              WebkitTextStroke: "1px rgba(0,212,200,0.5)",
              marginLeft: 48,
              display: "flex",
            }}
          >
            {person.lastName.toUpperCase()}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#EDF2F4",
                letterSpacing: "-0.01em",
                display: "flex",
              }}
            >
              {person.title}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#4A6570",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                display: "flex",
              }}
            >
              {person.location} · JavaScript · React · Next.js
            </div>
          </div>

          {/* Right signal decoration */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
            }}
          >
            <div
              style={{
                width: 80,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(0,212,200,0.6))",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 48,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(0,212,200,0.4))",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 24,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(0,212,200,0.2))",
                display: "flex",
              }}
            />
          </div>
        </div>

        {/* Bottom edge line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,212,200,0.4) 30%, rgba(99,102,241,0.4) 70%, transparent 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
