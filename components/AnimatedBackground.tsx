"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

// Lightweight canvas network plus Motion-driven ambient glows. Kept in its own
// dynamically imported module so the initial document stays lean.
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frameId = 0;
    let particles: Particle[] = [];
    const motionIsReduced = Boolean(prefersReducedMotion);

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const oldWidth = width;
      const oldHeight = height;
      width = bounds.width;
      height = bounds.height;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (particles.length && oldWidth && oldHeight) {
        const scaleX = width / oldWidth;
        const scaleY = height / oldHeight;
        particles = particles.map((particle) => ({
          ...particle,
          x: particle.x * scaleX,
          y: particle.y * scaleY,
        }));
      } else {
        const count = Math.min(38, Math.max(18, Math.round((width * height) / 33000)));
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.16,
          radius: Math.random() * 1.5 + 0.7,
        }));
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        if (!motionIsReduced) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < -8 || particle.x > width + 8) particle.vx *= -1;
          if (particle.y < -8 || particle.y > height + 8) particle.vy *= -1;
        }

        for (let neighborIndex = index + 1; neighborIndex < particles.length; neighborIndex += 1) {
          const neighbor = particles[neighborIndex];
          const dx = particle.x - neighbor.x;
          const dy = particle.y - neighbor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 145;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.18;
            context.beginPath();
            context.strokeStyle = `rgba(183, 246, 122, ${opacity})`;
            context.lineWidth = 0.7;
            context.moveTo(particle.x, particle.y);
            context.lineTo(neighbor.x, neighbor.y);
            context.stroke();
          }
        }

        context.beginPath();
        context.fillStyle = "rgba(201, 255, 159, 0.55)";
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (!motionIsReduced && !document.hidden) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const handleVisibility = () => {
      window.cancelAnimationFrame(frameId);
      if (!document.hidden && !motionIsReduced) frameId = window.requestAnimationFrame(draw);
      if (motionIsReduced) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReducedMotion]);

  const reduced = Boolean(prefersReducedMotion);

  return (
    <div className="animated-background" aria-hidden="true">
      <div className="hero-grid-texture" />
      <canvas ref={canvasRef} className="network-canvas" />
      <motion.div
        className="ambient-orb ambient-orb--lime"
        animate={reduced ? undefined : { x: [0, 18, -7, 0], y: [0, -14, 7, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb--teal"
        animate={reduced ? undefined : { x: [0, -16, 9, 0], y: [0, 12, -9, 0] }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-vignette" />
    </div>
  );
}
