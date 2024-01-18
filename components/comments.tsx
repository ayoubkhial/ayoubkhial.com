'use client';
import Giscus from '@giscus/react';

export default function Comment() {
  let theme = 'preferred_color_scheme';

  if (typeof window !== 'undefined') {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme && currentTheme !== 'system') {
      theme = currentTheme;
    }
  }

  return (
    <Giscus
      id="comments"
      repo="ayoubkhial/ayoubkhial.com"
      mapping="pathname"
      category="Blog"
      repoId="R_kgDOJYEx6g"
      categoryId="DIC_kwDOJYEx6s4CWnDe"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
}
