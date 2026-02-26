/**
 * Scrolls the window to the top smoothly or instantly.
 * @param {boolean} [hasSmoothAnimation] - Whether to animate the scroll.
 */

export const scrollToTop = (hasSmoothAnimation = true) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: hasSmoothAnimation ? 'smooth' : 'instant',
  });

  // Move focus back to the top. preventScroll is needed to allow the smooth animation to happen.
  document.querySelector('header')?.focus({
    preventScroll: true,
  });
};
