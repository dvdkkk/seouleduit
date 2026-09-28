import React from 'react';

export const APPLICATION_URL = 'https://naver.me/GEIxHQS0';
export const INQUIRY_PHONE = '1661-8126';

/**
 * Opens the consultation/application form in a new window.
 */
export const openApplicationUrl = () => {
  window.open(APPLICATION_URL, '_blank', 'noopener,noreferrer');
};

/**
 * Handles telephone click according to device environment:
 * - On PC desktop: Opens the consultation URL in a new window.
 * - On mobile environment: Triggers native phone dialing (tel:1661-8126).
 */
export const handlePhoneClick = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  // Detect mobile environment via userAgent or narrow viewport
  const isMobile =
    typeof navigator !== 'undefined' &&
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (typeof window !== 'undefined' && window.innerWidth < 768));

  if (isMobile) {
    window.location.href = `tel:${INQUIRY_PHONE}`;
  } else {
    window.open(APPLICATION_URL, '_blank', 'noopener,noreferrer');
  }
};
