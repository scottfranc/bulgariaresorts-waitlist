import Link from "next/link";

type BrandVariant =
  | "default"
  | "luxury"
  | "signature"
  | "heritage"
  | "modern"
  | "monoline"
  | "alpine"
  | "noir"
  | "solaire"
  | "coastal"
  | "apex"
  | "atelier"
  | "grand"
  | "pulse";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
  className?: string;
  variant?: BrandVariant;
};

const brandVariant = (process.env.NEXT_PUBLIC_BRAND_STYLE as BrandVariant | undefined) ?? "default";

export function BrandMonogram({
  className,
  variant = brandVariant,
}: {
  className?: string;
  variant?: BrandVariant;
}) {
  const monogramClass =
    variant === "luxury"
      ? "rounded-full border-[1.5px] border-[var(--accent)]/30 bg-[radial-gradient(circle_at_20%_15%,rgba(15,76,92,0.14),transparent_60%)] font-medium tracking-[0.2em] text-[var(--accent)]"
      : variant === "signature"
        ? "rounded-sm border border-[var(--accent)]/40 bg-transparent font-medium tracking-[0.24em] text-[var(--accent)]"
        : variant === "heritage"
          ? "rounded-none border border-[var(--accent)]/45 bg-white font-medium tracking-[0.18em] text-[var(--accent)]"
          : variant === "modern"
            ? "rounded-[0.35rem] border-0 bg-[var(--accent)] font-semibold tracking-[0.12em] text-white"
            : variant === "monoline"
              ? "rounded-full border border-neutral-400/70 bg-transparent font-normal tracking-[0.12em] text-neutral-700"
              : variant === "alpine"
                ? "rounded-md border border-[var(--accent)]/25 bg-[linear-gradient(135deg,rgba(15,76,92,0.12),rgba(255,255,255,0.9))] font-semibold tracking-[0.14em] text-[var(--accent)]"
                : variant === "noir"
                  ? "rounded-[0.3rem] border border-neutral-800 bg-neutral-900 font-medium tracking-[0.16em] text-white"
                  : variant === "solaire"
                    ? "rounded-full border border-amber-700/35 bg-[linear-gradient(160deg,rgba(250,224,165,0.45),rgba(255,255,255,0.95))] font-semibold tracking-[0.12em] text-amber-900"
                    : variant === "coastal"
                      ? "rounded-[0.45rem] border border-cyan-900/15 bg-[linear-gradient(140deg,rgba(34,211,238,0.18),rgba(255,255,255,0.95))] font-semibold tracking-[0.14em] text-cyan-900"
                      : variant === "apex"
                        ? "rounded-none border-y border-[var(--accent)]/55 border-x-0 bg-transparent font-semibold tracking-[0.16em] text-[var(--accent)]"
                        : variant === "atelier"
                          ? "rounded-[0.25rem] border border-rose-900/20 bg-rose-50/80 font-medium tracking-[0.2em] text-rose-900"
                          : variant === "grand"
                            ? "rounded-[0.25rem] border border-[#8b7355]/50 bg-[#f5efe6] font-semibold tracking-[0.16em] text-[#5a4630]"
                            : variant === "pulse"
                              ? "rounded-[0.45rem] border-0 bg-[linear-gradient(135deg,#0f4c5c,#1f7a8c)] font-semibold tracking-[0.14em] text-white shadow-[0_6px_18px_rgba(15,76,92,0.25)]"
        : "rounded-md border border-[var(--accent-soft)] bg-white font-semibold tracking-[0.14em] text-[var(--accent)]";

  return (
    <span
      aria-hidden
      className={`inline-flex h-8 w-8 items-center justify-center text-[11px] ${monogramClass} ${className ?? ""}`}
    >
      BR
    </span>
  );
}

export function BrandLogo({href = "/", compact = false, className, variant = brandVariant}: BrandLogoProps) {
  const defaultWordmarkClass =
    variant === "luxury"
      ? "font-display text-[1.18rem] font-medium tracking-[0.01em] text-neutral-900 sm:text-[1.34rem]"
      : variant === "signature"
        ? "font-display text-[1.05rem] font-medium tracking-[0.03em] text-neutral-900 sm:text-[1.16rem]"
        : variant === "heritage"
          ? "font-display text-[1.1rem] font-medium tracking-[0.04em] text-neutral-900 sm:text-[1.2rem]"
          : variant === "modern"
            ? "text-[0.94rem] font-semibold uppercase tracking-[0.18em] text-neutral-900 sm:text-[1rem]"
            : variant === "monoline"
              ? "text-[1rem] font-light tracking-[0.02em] text-neutral-800 sm:text-[1.08rem]"
              : variant === "alpine"
                ? "font-display text-[1.06rem] font-medium tracking-[0.015em] text-neutral-900 sm:text-[1.15rem]"
                : variant === "noir"
                  ? "text-[0.98rem] font-semibold uppercase tracking-[0.2em] text-neutral-900 sm:text-[1.02rem]"
                  : variant === "solaire"
                    ? "font-display text-[1.08rem] font-medium tracking-[0.02em] text-amber-900 sm:text-[1.18rem]"
                    : variant === "coastal"
                      ? "text-[1rem] font-medium tracking-[0.02em] text-cyan-900 sm:text-[1.08rem]"
                      : variant === "apex"
                        ? "font-display text-[1.1rem] font-semibold tracking-[0.06em] text-neutral-900 sm:text-[1.2rem]"
                        : variant === "atelier"
                          ? "font-display text-[1.05rem] italic font-medium tracking-[0.025em] text-rose-950 sm:text-[1.12rem]"
                          : variant === "grand"
                            ? "font-display text-[1.12rem] font-semibold tracking-[0.03em] text-[#4b3a26] sm:text-[1.22rem]"
                            : variant === "pulse"
                              ? "text-[0.98rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[1.03rem]"
                : "font-display text-lg font-medium tracking-tight text-neutral-900 sm:text-xl";

  const content =
    variant === "signature" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.56rem] uppercase tracking-[0.28em] text-[var(--accent)]/80">
            Travel Atelier
          </span>
        </span>
      </span>
    ) : variant === "heritage" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.54rem] uppercase tracking-[0.22em] text-neutral-500">Est. 2026</span>
        </span>
      </span>
    ) : variant === "modern" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
      </span>
    ) : variant === "monoline" ? (
      <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
        <span className="inline-flex h-2 w-2 rounded-full bg-neutral-700/80" aria-hidden />
        <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
      </span>
    ) : variant === "alpine" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.52rem] uppercase tracking-[0.24em] text-[var(--accent)]/75">
            Mountain & Coast
          </span>
        </span>
      </span>
    ) : variant === "noir" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.5rem] uppercase tracking-[0.28em] text-neutral-500">Private Selection</span>
        </span>
      </span>
    ) : variant === "solaire" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.52rem] uppercase tracking-[0.26em] text-amber-800/80">Sun & Spa</span>
        </span>
      </span>
    ) : variant === "coastal" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.5rem] uppercase tracking-[0.24em] text-cyan-900/75">Sea Edition</span>
        </span>
      </span>
    ) : variant === "apex" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.52rem] uppercase tracking-[0.34em] text-[var(--accent)]/85">Apex Series</span>
        </span>
      </span>
    ) : variant === "atelier" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.5rem] uppercase tracking-[0.22em] text-rose-900/75">Atelier Collection</span>
        </span>
      </span>
    ) : variant === "grand" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.52rem] uppercase tracking-[0.22em] text-[#6f5840]/80">Grand Reserve</span>
        </span>
      </span>
    ) : variant === "pulse" ? (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className="inline-flex flex-col leading-none">
          <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
          <span className="mt-1 text-[0.5rem] uppercase tracking-[0.26em] text-[var(--accent)]/80">Pulse</span>
        </span>
      </span>
    ) : (
      <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
        <BrandMonogram variant={variant} className={compact ? "h-7 w-7 text-[10px]" : ""} />
        <span className={defaultWordmarkClass}>Bulgaria Resorts</span>
      </span>
    );

  if (!href) return content;

  return (
    <Link href={href} className="transition-opacity hover:opacity-90" aria-label="Bulgaria Resorts home">
      {content}
    </Link>
  );
}
