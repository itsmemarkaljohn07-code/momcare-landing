import Link from "next/link";
import Image from "next/image";

const linkClass =
  "inline-flex min-h-11 items-center px-2 font-semibold text-ink no-underline break-all hover:text-accent-1 hover:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[.06] pt-9 pb-11">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <Link href="/" prefetch={false} aria-label="MomCare home" className="inline-flex min-h-11 items-center gap-2.5 text-[1.3rem] font-extrabold text-ink no-underline">
          <Image src="/logo.webp" width={32} height={32} alt="" />
          <span>Mom<span className="grad-text">Care</span></span>
        </Link>
        <ul className="flex flex-wrap gap-x-2 gap-y-1">
          <li><Link href="/privacy/" prefetch={false} className={linkClass}>Privacy Policy</Link></li>
          <li><Link href="/terms/" prefetch={false} className={linkClass}>Terms</Link></li>
          <li><a href="mailto:momscare.noreply@gmail.com" className={linkClass}>momscare.noreply@gmail.com</a></li>
        </ul>
        <p className="m-0 w-full text-[.9rem] text-muted">
          Capstone project, BSIT, Northwest Samar State University, S.Y. 2026–2027
        </p>
      </div>
    </footer>
  );
}
