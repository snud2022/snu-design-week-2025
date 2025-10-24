'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 자동으로 "@media" 제거
    const normalized = query.replace(/^@media\s*/, '').trim();

    const media = window.matchMedia(normalized);
    const handler = () => setMatches(media.matches);
    handler(); // 초기값
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
