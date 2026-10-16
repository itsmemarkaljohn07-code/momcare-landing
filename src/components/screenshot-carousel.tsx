"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shots = [
  { src: "/screenshots/home-week.webp", label: "Weekly development", alt: "Home screen at week 7 with a week selector and an illustration of the baby's development." },
  { src: "/screenshots/snapshot-health.webp", label: "Health tracker", alt: "Snapshot screen, Health Tracker tab: blood pressure, weight, fetal kicks and mood cards above a list of recent logs." },
  { src: "/screenshots/appointments.webp", label: "Appointments", alt: "Appointments screen listing two upcoming in-person visits: an anomaly scan and a glucose tolerance test." },
  { src: "/screenshots/insights.webp", label: "Insights", alt: "Insights screen with a featured article for this week, 'Checkups: when, how, and why', and more articles for the trimester." },
  { src: "/screenshots/profile.webp", label: "Profile", alt: "Profile screen with an avatar, pregnancy progress bar, dark mode and account settings." },
];

const btnClass =
  "inline-grid size-12 cursor-pointer place-items-center rounded-full border-[1.5px] border-line bg-surface text-ink transition-colors enabled:hover:border-accent-2 enabled:hover:bg-surface-2 disabled:cursor-default disabled:opacity-35";

export function ScreenshotCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ overflow: true, atStart: true, atEnd: false });

  const update = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    setState({ overflow: max > 2, atStart: t.scrollLeft <= 2, atEnd: t.scrollLeft >= max - 2 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const item = t.querySelector("li");
    const step = item ? item.getBoundingClientRect().width + 20 : 240;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollBy({ left: step * dir, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="reveal">
      <ul
        ref={trackRef}
        id="carousel-track"
        tabIndex={0}
        aria-label="App screenshots, scroll horizontally"
        onScroll={update}
        className="grid snap-x snap-mandatory auto-cols-[210px] grid-flow-col gap-5 overflow-x-auto overscroll-x-contain scroll-px-1 px-1 pt-2 pb-5 [scrollbar-color:var(--color-line)_transparent] [scrollbar-width:thin] md:auto-cols-[220px] md:gap-6"
      >
        {shots.map((s) => (
          <li key={s.src} className="group snap-start text-center">
            <div className="phone phone--sm transition-transform duration-200 ease-soft group-hover:-translate-y-1 hover-lift">
              <Image src={s.src} width={540} height={1115} alt={s.alt} />
            </div>
            <p className="mt-3.5 font-bold text-muted">{s.label}</p>
          </li>
        ))}
      </ul>
      {state.overflow && (
        <div className="mt-3 flex justify-center gap-3">
          <button type="button" aria-controls="carousel-track" aria-label="Previous screenshots" disabled={state.atStart} onClick={() => scroll(-1)} className={btnClass}>
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button type="button" aria-controls="carousel-track" aria-label="Next screenshots" disabled={state.atEnd} onClick={() => scroll(1)} className={btnClass}>
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
}
