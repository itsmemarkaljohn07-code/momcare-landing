"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades .reveal elements in as they scroll into view. Content stays visible
 * without JS, and CSS skips the effect when reduced motion is requested.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) return;

    // Anything already on screen is shown immediately so it never flickers out.
    const vh = window.innerHeight;
    for (const el of items) {
      if (el.getBoundingClientRect().top < vh) el.classList.add("is-visible");
    }
    document.documentElement.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 },
    );
    for (const el of items) if (!el.classList.contains("is-visible")) io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
