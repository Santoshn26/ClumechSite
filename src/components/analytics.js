document.addEventListener('DOMContentLoaded', () => {
  // Check if gtag is available
  if (typeof gtag !== 'function') {
    // Silently fail if GA4 is not loaded (e.g., due to ad blockers or if not configured)
    return;
  }

  // Select all elements intended for CTA tracking
  const trackableElements = document.querySelectorAll('[data-ga-cta]');

  trackableElements.forEach(element => {
    element.addEventListener('click', () => {
      const ctaName = element.dataset.gaCta;
      const ctaLocation = element.dataset.gaLocation;

      if (!ctaName || !ctaLocation) {
        console.warn('GA4 CTA tracking is missing "data-ga-cta" or "data-ga-location" on element:', element);
        return;
      }

      // GA4 event for a call-to-action click
      gtag('event', 'cta_click', {
        'cta_name': ctaName, // e.g., 'Request a Quote'
        'cta_location': ctaLocation, // e.g., 'Navbar' or 'Hero Section'
      });
    });
  });
});