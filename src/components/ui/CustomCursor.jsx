import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { isReducedMotionPreferred } from '../../utils/accessibility';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorBadgeRef = useRef(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Only activate for fine pointer devices (desktop mouse/trackpad)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer || isReducedMotionPreferred()) return;

    document.body.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      setIsVisible(true);

      // Instantly position center dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        setCursorLabel(cursorTarget.getAttribute('data-cursor') || '');
      } else {
        setCursorLabel('');
      }

      const isTargetInteractive = !!(
        cursorTarget ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive')
      );
      setIsInteractive(isTargetInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp physics for the outer ring
    const renderLoop = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      if (cursorBadgeRef.current) {
        cursorBadgeRef.current.style.transform = `translate3d(${ringX}px, ${ringY + 28}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  if (!mounted || typeof document === 'undefined') return null;

  // Render directly into document.body portal to guarantee topmost stacking order above all modals/intros
  return createPortal(
    <div className="custom-cursor-container pointer-events-none fixed inset-0 z-[99999] overflow-visible">
      {/* Outer Ring with high-contrast dual-tone borders */}
      <div
        ref={cursorRingRef}
        className={`custom-cursor-element pointer-events-none fixed top-0 left-0 rounded-full transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 ${
          !isVisible ? 'opacity-0 scale-50' : 'opacity-100'
        } ${
          isInteractive
            ? 'w-11 h-11 bg-econest-fresh/30 border-2 border-econest-primary shadow-organic-glow scale-110'
            : 'w-7 h-7 bg-white/10 border border-econest-primary/70 backdrop-blur-[0.5px] shadow-sm'
        }`}
        style={{
          willChange: 'transform',
          boxShadow: isInteractive
            ? '0 0 20px rgba(61, 139, 87, 0.45), inset 0 0 8px rgba(120, 185, 120, 0.3)'
            : '0 0 0 1px rgba(255, 255, 255, 0.6), 0 2px 6px rgba(0, 0, 0, 0.15)'
        }}
      />

      {/* Contextual Action Badge (DRAG, SELECT, TRACE, EXPLORE) */}
      <div
        ref={cursorBadgeRef}
        className={`custom-cursor-element pointer-events-none fixed top-0 left-0 transition-opacity duration-150 ${
          !isVisible || !cursorLabel ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`}
        style={{
          willChange: 'transform'
        }}
      >
        <span className="px-2 py-0.5 rounded-full bg-econest-deep/95 text-econest-natural text-[9px] font-mono tracking-widest uppercase font-bold border border-econest-forest/40 shadow-organic backdrop-blur-xs">
          {cursorLabel}
        </span>
      </div>

      {/* Inner Precision Anchor Dot with luminous center and crisp white rim */}
      <div
        ref={cursorDotRef}
        className={`custom-cursor-element pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          willChange: 'transform',
          backgroundColor: '#2A7244',
          border: '1.5px solid #FFFFFF',
          boxShadow: '0 0 4px rgba(0,0,0,0.35), 0 0 8px rgba(120, 185, 120, 0.8)'
        }}
      />
    </div>,
    document.body
  );
}
