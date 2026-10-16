"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { DownloadButton } from "@/components/download-button";
import { StaffLink } from "@/components/staff-link";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#install", label: "How to install" },
  { href: "/#clinics", label: "For clinics" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[.06] bg-bg/80 backdrop-blur-[14px]">
      <div className="container-page flex min-h-[68px] items-center justify-between gap-4">
        <Link href="/" prefetch={false} aria-label="MomCare home" className="inline-flex min-h-11 items-center gap-2.5 text-[1.3rem] font-extrabold text-ink no-underline">
          <Image src="/logo.webp" width={36} height={36} alt="" priority />
          <span>Mom<span className="grad-text">Care</span></span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-grid size-12 cursor-pointer place-items-center rounded-xl border-[1.5px] border-line bg-transparent text-ink min-[900px]:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>

        <nav
          id="nav-menu"
          aria-label="Main"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a[href]")) setOpen(false);
          }}
          className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-line bg-bg-tint px-4 pt-2 pb-5 min-[900px]:static min-[900px]:block min-[900px]:border-0 min-[900px]:bg-transparent min-[900px]:p-0`}
        >
          <ul className="flex flex-col gap-1 min-[900px]:flex-row min-[900px]:items-center">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="flex min-h-11 items-center rounded-[10px] px-3 font-bold text-ink no-underline hover:text-accent-1">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <StaffLink id="staff-nav" appearance="nav" />
            </li>
            <li className="mt-2 min-[900px]:mt-0 min-[900px]:ml-2">
              <DownloadButton size="sm" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
