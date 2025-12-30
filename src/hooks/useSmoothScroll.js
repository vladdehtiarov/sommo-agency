// Smooth scroll disabled for better performance
// Using native CSS scroll-behavior: smooth instead

export const getLenis = () => null;

export const scrollToTop = (immediate = false) => {
  window.scrollTo({ 
    top: 0, 
    behavior: immediate ? 'auto' : 'smooth' 
  });
};

export const useSmoothScroll = () => {
  // No-op - using native smooth scroll
  return { current: null };
};

