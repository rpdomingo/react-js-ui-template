import { useState, useEffect } from 'react';

export const useSidebar = () => {
  // Start with sidebar open on desktop, closed on mobile
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true; // Default to open for SSR
  });

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      // Auto-adjust based on screen size, but preserve user preference if they manually toggled
      if (window.innerWidth < 1024) {
        // On mobile, default to closed but don't force if user opened it
        // setIsOpen(false);
      } else {
        // On desktop, default to open but don't force if user closed it
        // setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return {
    isOpen,
    toggle,
    close,
    open,
  };
};
