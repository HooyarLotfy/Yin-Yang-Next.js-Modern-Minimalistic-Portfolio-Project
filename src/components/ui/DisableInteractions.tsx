'use client';

import { useEffect } from 'react';

// Note: This only deters casual users; DevTools can always be opened.
export default function DisableInteractions() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const block =
        key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (key === 'I' || key === 'J' || key === 'C')) ||
        (e.ctrlKey && key === 'U');
      if (block) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return null;
}
