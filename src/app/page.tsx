import Image from "next/image";
import {
  Baby,
  BookOpen,
  CalendarDays,
  Camera,
  HeartPulse,
  ListChecks,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

import { DownloadButton, DownloadNote } from "@/components/download-button";
import { ScreenshotCarousel } from "@/components/screenshot-carousel";
import { StaffLink } from "@/components/staff-link";
import { buttonClass } from "@/lib/button";

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Baby, title: "Weekly baby development", text: "See how your baby is growing each week, with size and weight for that stage." },
  { icon: ListChecks, title: "Daily checklist", text: "A short to-do list for each day, with reminders so nothing slips by." },
  { icon: CalendarDays, title: "Appointments", text: "Upcoming and past visits with reminders, and a way to request a cancellation." },
  { icon: Camera, title: "Snapshots", text: "Share bump and ultrasound photos and read comments from your care team." },
  { icon: HeartPulse, title: "Health tracker", text: "Log blood pressure, weight, fetal kicks and mood, and look back over recent entries." },
  { icon: BookOpen, title: "Insights", text: "Short articles matched to your week and trimester, from checkups to body changes." },
];

const clinicPoints = [
  { title: "Snapshots and health readings.", text: "Assigned doctors and clinic admins can see the photos and health logs their patients share." },
  { title: "Comments on snapshots.", text: "Doctors and admins reply to a patient's snapshot, and the comment appears in the app." },
  { title: "Appointments.", text: "The clinic manages patients' appointments and reviews their cancellation requests." },
  { title: "Limited to the clinic.", text: "Other patients cannot see a patient's snapshots, readings or appointments." },
];

const steps = [
  { title: "Download the file", text: "Tap the Download button on this page to get the MomCare APK file.", download: true },
  { title: "Allow this source", text: "When Android asks, allow installing apps from your browser or file manager." },
  { title: "Open the file", text: "Open the downloaded file from your notifications or Downloads folder and tap Install." },
  { title: "Sign up", text: "Open MomCare, create your account and enter your pregnancy details." },
];

const section = "relative overflow-hidden py-[72px] md:py-[104px]";
const sectionHead = "reveal mx-auto mb-11 max-w-[640px] text-center";
const h2 = "mb-2 text-[clamp(1.75rem,4.5vw,2.5rem)]";
const sectionLead = "m-0 text-[1.075rem] text-muted";
const eyebrow = "mb-3.5 inline-block text-[.8rem] font-extrabold tracking-[.12em] text-accent-1 uppercase";
const card = "rounded-[28px] border border-line bg-surface p-6";

export default function Home() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-[72px] lg:pt-[88px] lg:pb-28">
        <div className="glow top-10 -right-40" aria-hidden />
        <div className="container-page relative z-[1] grid items-center gap-12 min-[960px]:grid-cols-[1.1fr_.9fr] min-[960px]:gap-10">
          <div className="reveal">
            <p className={eyebrow}>Pregnancy companion for Android</p>
            <h1 className="mb-4 text-[clamp(2.1rem,7vw,3.6rem)]">
              Your pregnancy, <span className="grad-text">with your clinic</span> beside you
            </h1>
            <p className="max-w-[36em] text-lg text-muted">
              MomCare follows your baby&apos;s growth week by week, keeps your checklist, appointments and health
              readings in one place, and lets your care team see the snapshots you share.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <DownloadButton />
              <a href="#install" className={buttonClass("ghost")}>How to install</a>
            </div>
            <DownloadNote />
          </div>

          <div className="reveal relative flex justify-center py-2">
            <div className="phone absolute top-10 left-1/2 z-[1] w-[min(230px,52vw)] translate-x-[8%] rotate-[8deg] opacity-55 min-[960px]:w-[260px] min-[960px]:translate-x-[10%] min-[960px]:rotate-[6deg]" aria-hidden>
              <Image src="/screenshots/snapshot-health.webp" width={540} height={1115} alt="" />
            </div>
            <div className="phone relative z-[2] w-[min(270px,64vw)] min-[960px]:w-[300px] min-[960px]:-translate-x-10 min-[960px]:-rotate-3">
              <Image
                src="/screenshots/home-week.webp"
                width={540}
                height={1115}
                priority
                alt="MomCare home screen showing week 7 of pregnancy, a week selector and an illustration of the baby's development with length and weight."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" aria-labelledby="features-title" className={section}>
        <div className="container-page relative z-[1]">
          <header className={sectionHead}>
            <h2 id="features-title" className={h2}>Everything for the weeks ahead</h2>
            <p className={sectionLead}>Built around the care you already get from your clinic.</p>
          </header>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {features.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="reveal hover-lift rounded-[28px] border border-line bg-gradient-to-b from-surface to-surface/60 px-6 py-[26px] transition duration-250 ease-soft hover:-translate-y-1 hover:border-accent-1/45 hover:shadow-[0_18px_40px_-24px_rgb(224_126_184/.45)]"
              >
                <span className="inline-grid size-12 place-items-center rounded-[14px] border border-accent-1/30 bg-gradient-to-br from-accent-1/[.18] to-accent-2/[.18]" aria-hidden>
                  <Icon size={24} strokeWidth={1.8} className="text-accent-1" />
                </span>
                <h3 className="mt-4 mb-2 text-xl">{title}</h3>
                <p className="m-0 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screens" aria-labelledby="screens-title" className={`${section} bg-bg-tint`}>
        <div className="glow top-[10%] -left-[260px]" aria-hidden />
        <div className="container-page relative z-[1]">
          <header className={sectionHead}>
            <h2 id="screens-title" className={h2}>A look inside the app</h2>
            <p className={sectionLead}>Real screens from the MomCare Android app.</p>
          </header>
          <ScreenshotCarousel />
        </div>
      </section>

      {/* For clinics */}
      <section id="clinics" aria-labelledby="clinics-title" className={section}>
        <div className="container-page relative z-[1] grid items-center gap-10 min-[960px]:grid-cols-2 min-[960px]:gap-16">
          <div className="reveal">
            <p className={eyebrow}>For clinics</p>
            <h2 id="clinics-title" className={h2}>A web dashboard for your care team</h2>
            <p className="max-w-[36em] text-lg text-muted">
              MomCare comes with a separate web dashboard for clinic admins and healthcare providers. The app and the
              dashboard share the same records, so the care team sees what patients choose to share.
            </p>
            <div className="mt-6">
              <StaffLink id="staff-clinics" appearance="button" />
            </div>
          </div>
          <ul className="reveal grid gap-3.5">
            {clinicPoints.map((p) => (
              <li key={p.title} className="flex gap-3.5 rounded-[20px] border border-line bg-surface p-5 text-muted">
                <span className="check-icon mt-0.5" aria-hidden />
                <span>
                  <strong className="text-ink">{p.title}</strong> {p.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to install */}
      <section id="install" aria-labelledby="install-title" className={`${section} bg-bg-tint`}>
        <div className="glow -right-[280px] bottom-0" aria-hidden />
        <div className="container-page relative z-[1]">
          <header className={sectionHead}>
            <h2 id="install-title" className={h2}>How to install</h2>
            <p className={sectionLead}>MomCare is installed from this page, not from the Google Play Store.</p>
          </header>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className={`reveal ${card} transition-colors hover:border-accent-2/50`}>
                <span className="bg-grad inline-grid size-10 place-items-center rounded-full font-extrabold text-on-accent" aria-hidden>
                  {i + 1}
                </span>
                <h3 className="mt-3.5 mb-2 text-lg">{s.title}</h3>
                <p className={`text-muted ${s.download ? "mb-3.5" : "m-0"}`}>{s.text}</p>
                {s.download && <DownloadButton size="sm" />}
              </li>
            ))}
          </ol>
          <div role="note" className="reveal mt-6 flex items-start gap-3.5 rounded-[20px] border border-warn/35 bg-warn/[.08] px-[22px] py-5 text-warn-ink">
            <TriangleAlert size={22} strokeWidth={1.8} className="mt-0.5 shrink-0 text-warn" aria-hidden />
            <p className="m-0">
              <strong className="text-[#fff3e2]">Play Protect may show a warning.</strong> Because MomCare is not from
              the Play Store, Android may warn you before installing. Only install MomCare from this page; do not
              install copies shared elsewhere.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section aria-label="Disclaimer" className="pt-10 pb-14 md:pt-12 md:pb-[72px]">
        <div className="container-page">
          <p className="reveal mx-auto max-w-[760px] rounded-[20px] border border-dashed border-line px-6 py-[22px] text-center font-semibold text-muted">
            MomCare supports but does not replace care from your clinic. This is a capstone project. Do not use it for
            emergencies.
          </p>
        </div>
      </section>
    </main>
  );
}
