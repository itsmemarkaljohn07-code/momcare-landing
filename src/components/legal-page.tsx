import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Fragment, type ReactNode } from "react";

import type { LegalBlock, LegalDoc } from "@/content/legal-types";

/** Renders the copied app text, turning its <strong> markers into bold text. */
function rich(text: string): ReactNode {
  return text.split(/<strong>(.*?)<\/strong>/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-ink">{part}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

const muted = "text-muted";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className={`mb-4 ${muted}`}>{rich(block.text)}</p>;
    case "list":
      return (
        <ul className="mb-4 grid list-disc gap-2 pl-5 marker:text-accent-1">
          {block.items.map((item) => (
            <li key={item} className={muted}>{rich(item)}</li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div className="mb-4 rounded-r-[14px] border-l-4 border-accent-1 bg-surface px-5 py-4">
          <p className={`m-0 ${muted}`}>{rich(block.text)}</p>
        </div>
      );
    case "cards":
      return (
        <ul className="mb-4 grid gap-3 sm:grid-cols-2">
          {block.items.map((c) => (
            <li key={c.title} className="rounded-2xl border border-line bg-surface px-[18px] py-4">
              <strong className="text-ink">{c.title}</strong>
              <p className={`mt-1 mb-0 ${muted}`}>{rich(c.text)}</p>
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <ul className="grid gap-2">
          {block.items.map((item) => (
            <li key={item} className={`rounded-[14px] border border-line bg-surface px-4 py-1 break-all ${muted}`}>
              {item.includes("@") ? (
                <a href={`mailto:${item}`} className="inline-flex min-h-11 items-center text-accent-1">{item}</a>
              ) : (
                <span className="inline-flex min-h-11 items-center">{item}</span>
              )}
            </li>
          ))}
        </ul>
      );
  }
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main id="main" className="pt-12 pb-20">
      <div className="container-page">
        <div className="mx-auto max-w-[760px]">
          <Link href="/" prefetch={false} className="mb-4 inline-flex min-h-11 items-center gap-1.5 font-bold text-accent-1 no-underline hover:underline">
            <ArrowLeft size={18} aria-hidden /> Back to home
          </Link>
          <h1 className="mb-2 text-[clamp(2rem,6vw,2.8rem)]">{doc.title}</h1>
          <div className="mt-6 mb-9 rounded-[20px] border border-accent-1/30 bg-gradient-to-br from-accent-1/12 to-accent-2/10 px-6 py-[22px]">
            <p className="m-0">{rich(doc.intro)}</p>
          </div>

          {doc.sections.map((s) => (
            <section key={s.num} aria-labelledby={`s${s.num}`} className="border-t border-line py-7">
              <h2 id={`s${s.num}`} className="mb-3 flex items-baseline gap-3 text-[1.35rem]">
                <span className="text-[.85rem] font-extrabold tracking-[.06em] text-accent-1">{s.num}</span>
                {s.heading}
              </h2>
              {s.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </section>
          ))}

          <div className="border-t border-line pt-6 text-[.9rem] text-muted">
            {doc.footer.map((line) => (
              <p key={line} className="mb-1">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
