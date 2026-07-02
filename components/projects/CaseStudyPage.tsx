import Navbar from "@/components/Navbar";
import { HeroEntrance, MockupReveal } from "@/components/ui/CaseStudyMotion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type CaseStudyMetadata = {
  label: string;
  value: string;
};

type HeroVariant = "standard" | "compact";
type SectionVariant = "standard" | "compact";
type ImageTone = "blue" | "purple" | "silver" | "dark" | "neutral-dark";

type CaseStudyHero = {
  title: ReactNode;
  description: ReactNode;
  metadata: CaseStudyMetadata[];
  media: ReactNode;
  titleClassName: string;
  descriptionClassName: string;
  variant?: HeroVariant;
};

type CaseStudyPageProps = {
  hero: CaseStudyHero;
  children: ReactNode;
  navigation?: ReactNode;
  className?: string;
  rootElement?: "main" | "div";
};

type ProjectLink = {
  href: string;
  label: string;
};

const imageTones: Record<ImageTone, string> = {
  blue:
    "bg-[radial-gradient(circle_at_70%_35%,rgba(74,144,226,0.7),transparent_26%),linear-gradient(135deg,#030711_10%,#071a38_55%,#0a4480)]",
  purple:
    "bg-[radial-gradient(circle_at_75%_35%,rgba(111,73,255,0.65),transparent_28%),linear-gradient(135deg,#030207_12%,#13062f_55%,#29108a)]",
  silver:
    "bg-[radial-gradient(circle_at_74%_48%,rgba(255,255,255,0.98),transparent_14%),linear-gradient(125deg,#263737,#86918f_48%,#d8dad7)]",
  dark: "bg-[linear-gradient(135deg,#030712,#07152f_50%,#101d4d)]",
  "neutral-dark": "bg-[linear-gradient(135deg,#111827,#20201f_52%,#09090b)]",
};

export function CaseStudyImage({
  alt,
  label,
  src,
  aspect = "aspect-[2/1]",
  tone = "silver",
}: {
  alt: string;
  label: string;
  src?: string;
  aspect?: string;
  tone?: ImageTone;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspect} ${imageTones[tone]}`}
      data-image-slot={label}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span className="border border-white/20 bg-black/25 px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur-sm">
            {label} image placeholder
          </span>
        </div>
      )}
    </div>
  );
}

export function CaseStudyTitle({
  number,
  title,
  variant = "standard",
}: {
  number: string;
  title: string;
  variant?: SectionVariant;
}) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <span className="font-mono text-lg font-black leading-none tracking-[0.08em] text-[#9CA3AF] md:text-3xl">
          {number}
        </span>
        <span className="text-lg font-black uppercase leading-none tracking-[0.16em] text-white md:text-3xl">
          / {title}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
      <span className="font-mono text-lg font-black leading-none tracking-[0.08em] text-[#9CA3AF] md:text-3xl">
        {number}
      </span>
      <h2 className="text-lg font-black uppercase leading-none tracking-[0.14em] text-white md:text-3xl">
        / {title}
      </h2>
    </div>
  );
}

export function CaseStudyTextSection({
  number,
  title,
  left,
  children,
  after,
  variant = "standard",
}: {
  number: string;
  title: string;
  left?: ReactNode;
  children: ReactNode;
  after?: ReactNode;
  variant?: SectionVariant;
}) {
  if (variant === "compact") {
    return (
      <section className="bg-black py-12 md:py-14">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 md:grid-cols-[1fr_minmax(31rem,41rem)] md:gap-16 md:px-0">
          <div>
            <CaseStudyTitle number={number} title={title} variant="compact" />
            {left}
          </div>

          <div className="text-[14px] leading-[1.28] text-[#9CA3AF] md:text-base">
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-0">
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(31rem,41rem)] md:gap-16">
          <CaseStudyTitle number={number} title={title} />
          <div className="text-[14px] font-semibold leading-[1.35] text-[#9CA3AF] md:text-base">
            {children}
          </div>
        </div>
        {after && <div className="mt-10 md:mt-12">{after}</div>}
      </div>
    </section>
  );
}

export function CaseStudyNavigation({
  previous,
  next,
}: {
  previous?: ProjectLink;
  next?: ProjectLink;
}) {
  const split = Boolean(previous && next);

  const renderLink = (link: ProjectLink, direction: "previous" | "next") => {
    const isPrevious = direction === "previous";

    return (
      <Link
        href={link.href}
        className={`group flex min-h-[218px] flex-col justify-between bg-black px-6 pt-12 pb-6 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white md:min-h-[342px] md:px-12 md:pb-[68px] ${
          split
            ? isPrevious
              ? "items-start"
              : "items-end"
            : "items-center"
        }`}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#858C9A] md:text-xs">
          {isPrevious ? "Previous project" : "Next project"}
        </span>

        <span className="flex items-center gap-4 whitespace-nowrap text-4xl leading-none font-normal uppercase tracking-[-0.045em] text-white md:gap-5 md:text-5xl">
          {isPrevious && (
            <svg
              className="size-8 shrink-0 transition-transform duration-200 ease-[var(--ease-out)] group-hover:-translate-x-1"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M27 16H5m8-8-8 8 8 8" />
            </svg>
          )}
          {link.label}
          {!isPrevious && (
            <svg
              className="size-8 shrink-0 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 16h22m-8-8 8 8-8 8" />
            </svg>
          )}
        </span>
      </Link>
    );
  };

  return (
    <nav
      aria-label="Case study navigation"
      className={`grid ${split ? "md:grid-cols-2" : "grid-cols-1"}`}
    >
      {previous && renderLink(previous, "previous")}
      {next && renderLink(next, "next")}
    </nav>
  );
}

function ProjectHero({
  title,
  description,
  metadata,
  media,
  titleClassName,
  descriptionClassName,
  variant = "standard",
}: CaseStudyHero) {
  const compact = variant === "compact";

  return (
    <header
      className={
        compact
          ? "px-4 pb-0 pt-28 md:px-12 md:pt-32"
          : "px-4 pb-0 pt-40 md:px-8 md:pt-48"
      }
    >
      <div className={"mx-auto max-w-7xl"}>
        <HeroEntrance className="flex w-full flex-col items-center text-center">
          <h1 className={titleClassName}>{title}</h1>
          <p className={descriptionClassName}>{description}</p>

          <div
            className={
              compact
                ? "mb-14 w-full max-w-[896px] border-t border-white/75 pt-8"
                : "mt-12 w-full max-w-[896px] border-t border-white/70 pt-8 md:mt-14"
            }
          >
            <div
              className={
                compact
                  ? "grid grid-cols-2 gap-x-8 gap-y-7 text-left md:grid-cols-4"
                  : "grid grid-cols-2 gap-x-8 gap-y-8 text-left md:grid-cols-4"
              }
            >
              {metadata.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </HeroEntrance>

        <MockupReveal className={compact ? undefined : "mt-16 w-full"} delay={compact ? 0.2 : 0.16}>
          {media}
        </MockupReveal>
      </div>
    </header>
  );
}

export default function CaseStudyPage({
  hero,
  children,
  navigation,
  className = "min-h-screen bg-black",
  rootElement = "main",
}: CaseStudyPageProps) {
  const Root = rootElement;

  return (
    <Root className={className}>
      <Navbar />
      <ProjectHero {...hero} />
      {children}
      {navigation}
    </Root>
  );
}
