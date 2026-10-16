// Shared class strings for buttons and button-like links.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-transparent text-center font-extrabold leading-tight no-underline transition duration-200 ease-soft";

const sizes = {
  md: "min-h-12 px-6 py-3 text-base",
  sm: "min-h-11 px-[18px] py-2.5 text-[.95rem]",
} as const;

const variants = {
  primary:
    "bg-grad text-on-accent shadow-[0_10px_30px_-10px_rgb(224_126_184/.55)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-10px_rgb(224_126_184/.7)] hover-lift",
  ghost:
    "border-line bg-white/[.04] text-ink hover:border-accent-2 hover:bg-accent-2/10",
  disabled:
    "cursor-not-allowed border-line bg-surface-2 text-muted",
} as const;

export function buttonClass(
  variant: keyof typeof variants = "primary",
  size: keyof typeof sizes = "md",
) {
  return `${base} ${sizes[size]} ${variants[variant]}`;
}
