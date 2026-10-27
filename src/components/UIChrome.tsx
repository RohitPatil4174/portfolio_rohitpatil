import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollY';

export default function UIChrome() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isCoarsePointer) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setHovering(true);
      }
    };
    const onLeave = () => setHovering(false);

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onEnter, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 16}px, ${posRef.current.y - 16}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetRef.current.x - 2}px, ${targetRef.current.y - 2}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* Custom cursor — only visible on fine pointer devices */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9998] w-8 h-8 rounded-full border transition-all duration-150 hidden md:block ${
          hovering
            ? 'border-accent bg-accent/10 scale-150'
            : 'border-text-muted/30 bg-transparent'
        }`}
        style={{ top: 0, left: 0, willChange: 'transform' }}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-1 h-1 rounded-full bg-accent hidden md:block"
        style={{ top: 0, left: 0, willChange: 'transform' }}
        aria-hidden="true"
      />
    </>
  );
}
