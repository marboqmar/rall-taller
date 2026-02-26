import { useEffect } from 'react';

export const useScrollLock = isLocked => {
  useEffect(() => {
    // If the scroll is not being locked, stop the execution
    if (!isLocked) return;

    const bodyStyles = window.getComputedStyle(document.body);

    // Save current overflow to restore it when scroll is unlocked
    const originalOverflow = bodyStyles.overflow;

    // Save current right padding to handle absence of scroll bar when scroll is locked
    const originalPadding = bodyStyles.paddingRight;

    // Convert string with units to number (e.g. "50px" to 50)
    const parsedPadding = parseFloat(originalPadding) || 0;

    // Add scroll bar width to current padding when the scroll bar is not displayed to prevent "jumping"
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${parsedPadding + scrollBarWidth}px`;
    }

    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Clean up function to restore overflow and padding when scroll is unlocked
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
    };
  }, [isLocked]);
};
