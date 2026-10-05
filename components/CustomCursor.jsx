"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only activate on pointer (non-touch) devices
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    // Respect reduced motion
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (reducedMotion.matches) return;

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        const style = window.getComputedStyle(target);
        const isPtr =
          style.cursor === "pointer" ||
          target.closest("a, button, [role='button']") !== null;
        setIsPointer(isPtr);
      }
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.1);
        ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.1);
        ringRef.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "var(--accent-primary)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s, width 0.2s, height 0.2s, background-color 0.2s",
          willChange: "transform",
          ...(isPointer && {
            width: 12,
            height: 12,
            backgroundColor: "var(--accent-secondary)",
          }),
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(0,212,200,0.4)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: isVisible ? (isPointer ? 0.7 : 0.35) : 0,
          transition: "opacity 0.3s, width 0.25s, height 0.25s, border-color 0.25s",
          willChange: "transform",
          ...(isPointer && {
            width: 44,
            height: 44,
            borderColor: "rgba(99,102,241,0.5)",
          }),
        }}
      />
    </>
  );
}
