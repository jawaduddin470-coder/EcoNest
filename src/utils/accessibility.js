/**
 * EcoNest Accessibility and System Capability Utilities
 */

export const isReducedMotionPreferred = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isWebGLAvailable = () => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
};

export const getIntroSeenStatus = () => {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem('econest_intro_completed') === 'true';
  } catch {
    return false;
  }
};

export const setIntroSeenStatus = (status) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('econest_intro_completed', status ? 'true' : 'false');
  } catch (e) {
    console.warn('LocalStorage not available for intro status:', e);
  }
};
