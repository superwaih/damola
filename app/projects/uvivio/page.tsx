import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  HeroEntrance,
  MockupReveal,
} from "@/components/ui/CaseStudyMotion";
import Image from "next/image";

function UvivioStepTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
      <span className="font-mono text-[2rem] font-black leading-none tracking-[0.08em] text-[#9CA3AF] md:text-[2.25rem]">
        {number}
      </span>
      <span className="text-[2rem] font-black uppercase leading-none tracking-[0.16em] text-white md:text-[2.25rem]">
        / {title}
      </span>
    </div>
  );
}

function UvivioTextSection({
  number,
  title,
  left,
  children,
}: {
  number: string;
  title: string;
  left?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black py-12 md:py-14">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6 md:grid-cols-[1fr_minmax(31rem,41rem)] md:gap-16 md:px-0">
        <div>
          <UvivioStepTitle number={number} title={title} />
          {left}
        </div>

        <div className="text-[15px] font-semibold leading-[1.28] text-[#9CA3AF] md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

type UvivioFeature = {
  sectionTitle?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const uvivioFeatures: UvivioFeature[] = [
  {
    title: "Personalized Roadmap Generation:",
    description:
      "Users input their current background + desired career, Alfred generates a step-by-step transition roadmap and tailor it to their skill gaps, pace and goals. Breaks roadmap into digestible lessons and tasks Removes overwhelm by focusing on what matters now",
    imageSrc: "/svg/personalize.svg",
    imageAlt: "Uvivio personalized roadmap interface",
  },
  {
    title: "On-Demand Mentorship:",
    description:
      "Beyond scheduled sessions, users can book additional sessions when needed",
    imageSrc: "/svg/demand.svg",
    imageAlt: "Uvivio on-demand mentorship interface",
  },
  {
    title: "Messaging:",
    description:
      "Users get to have a one on one conversations with their mentors via Direct Messaging",
    imageSrc: "/svg/messaging.svg",
    imageAlt: "Uvivio direct messaging interface",
  },
  {
    sectionTitle: "THE MENTOR",
    title: "Alfred AI Interview:",
    description:
      "Mentor Admission interview ensuring Mentor quality at scale. To maintain a high standard of mentorship, Uvivio uses Alfred AI to conduct structured admission interviews for prospective mentors.",
    imageSrc: "/svg/mentor.svg",
    imageAlt: "Uvivio Alfred AI mentor interview interface",
  },
  {
    title: "Mentee Analytics:",
    description:
      "To enable more effective mentorship, Uvivio provides mentors with a comprehensive analytics dashboard that tracks mentee progress, engagement, and performance.",
    imageSrc: "/svg/mentee.svg",
    imageAlt: "Uvivio mentee analytics interface",
  },
  {
    title: "Wallet:",
    description:
      "Uvivio provides mentors with a dedicated wallet system that allows them to track earnings, manage payouts, and maintain full visibility into their financial activity on the platform. By making earnings transparent and accessible, the platform builds trust and incentivizes mentors to stay active and deliver high-quality mentorship.",
    imageSrc: "/svg/wallet.svg",
    imageAlt: "Uvivio mentor wallet interface",
  },
];

/* ── Page ─────────────────────────────────────────────────────── */
export default function UvivioCase() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="pt-28 md:pt-32 pb-0 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <HeroEntrance className="flex flex-col items-center text-center">
            <h1 className="text-white font-normal text-4xl sm:text-5xl md:text-7xl lg:text-[5.75rem] xl:text-[96px] uppercase leading-[1.18] max-w-5xl mb-10">
              UVIVIO: AI POWERED
              <br />
              LEARNING PLATFORM
            </h1>

            <p className="text-[#9CA3AF] text-sm sm:text-base md:text-xl leading-snug max-w-[44rem] mb-16">
              Architecting a spatial interface for the next generation of ambient
              computing. A study on depth, motion, and tactile digital surfaces.
            </p>

            <div className="w-full max-w-[896px] border-t border-white/75 pt-8 mb-14">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-7 text-left">
                {[
                  { label: "Role", value: "Product Designer" },
                  { label: "Tools", value: "Figma" },
                  { label: "Year", value: "2026" },
                  { label: "Client", value: "Techsity" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-3">
                    <span className="text-[#6B7280] text-[10px] font-bold tracking-[0.2em] uppercase">
                      {label}
                    </span>
                    <span className="text-white text-sm font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </HeroEntrance>

          {/* Hero mockup — slightly delayed scale-in */}
          <MockupReveal delay={0.2}>
            <div className="w-full h-64 md:h-[521px] rounded-2xl overflow-hidden  flex items-center justify-center gap-4 p-8">
              <Image
                width={1280}
                height={522}
                className="w-full h-full object-contain object-center"
                src="/images/uvi.svg"
                alt="Uvivio product interface"
              />
            </div>
          </MockupReveal>
        </div>
      </header>

      {/* ── 01 OVERVIEW ───────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-black pt-14 md:pt-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 md:grid-cols-[1fr_minmax(31rem,41rem)] md:gap-16 md:px-0">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-3xl font-black leading-none tracking-[-0.03em] text-[#8F96A3] md:text-[2.5rem]">
              01 /
            </span>
            <h2 className="text-lg font-black uppercase leading-none tracking-[0.18em] text-white md:text-2xl">
              Overview
            </h2>
          </div>

          <p className="max-w-[41rem] text-sm font-semibold leading-[1.18] text-[#9CA3AF] md:text-base">
            Uvivio is an AI-driven learning platform designed to help
            individuals seamlessly transition from one career path to another.
            By combining personalized learning roadmaps with human mentorship,
            the platform removes the overwhelm and uncertainty that often comes
            with starting over professionally. At the core of the experience is
            Alfred AI — an intelligent assistant that guides users from
            confusion to clarity, and from learning to real-world readiness.
          </p>
        </div>

        <div className="mx-auto mt-7 w-full max-w-[1280px] overflow-hidden px-6 md:mt-8 md:px-0">
          <Image
            src="/images/uvivo-overview.png"
            alt="Uvivio overview interface montage"
            width={1280}
            height={800}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* ── 02 THE PROBLEM ────────────────────────────────────── */}
      <UvivioTextSection number="02" title="The Problem">
        <div className="space-y-5">
          <p>
            Career transition today is broken. People trying to switch careers
            often face:
          </p>

          <ul className="list-disc space-y-0 pl-6 marker:text-[#9CA3AF]">
            <li>Information overload; too many resources, no clear path</li>
            <li>
              Lack of structure; no step-by-step guidance tailored to their
              background
            </li>
            <li>Learning alone without support or accountability</li>
            <li>No way to know if they’re progressing correctly</li>
          </ul>

          <div>
            <p>Most platforms either:</p>
            <ul className="list-disc space-y-0 pl-6 marker:text-[#9CA3AF]">
              <li>Provide generic courses, or</li>
              <li>Offer mentorship without structured learning</li>
            </ul>
          </div>

          <p>
            There is no unified system that combines personalized learning +
            real-time support + progress validation
          </p>
        </div>
      </UvivioTextSection>

      {/* ── 03 SOLUTION ───────────────────────────────────────── */}
      <UvivioTextSection number="03" title="Solution">
        <div className="space-y-5">
          <p>
            Uvivio introduces a guided, AI-powered transition experience where
            users are not just learning — they are being actively guided.
          </p>

          <div>
            <p>Instead of asking:</p>
            <p>“What should I learn next?”</p>
          </div>

          <div>
            <p>Users are told:</p>
            <p>
              “Here’s your next step — and here’s support if you get stuck.”
            </p>
          </div>
        </div>
      </UvivioTextSection>

      {/* ── 04 GOALS ──────────────────────────────────────────── */}
      <UvivioTextSection number="04" title="Goals">
        <div className="space-y-5">
          <p>Design a platform that:</p>

          <ul className="list-disc space-y-0 pl-6 marker:text-[#9CA3AF]">
            <li>
              Provides a clear, personalized roadmap for career transition
            </li>
            <li>Supports users with AI + human mentorship</li>
            <li>Reduces drop-off during the learning journey</li>
            <li>
              Builds confidence through validation and accountability
            </li>
          </ul>
        </div>
      </UvivioTextSection>

      {/* ── 05 KEY FEATURES ───────────────────────────────────── */}
      <UvivioTextSection
        number="05"
        title="Key Features"
        left={
          <div className="mt-8 space-y-5 text-[15px] font-semibold leading-[1.28] text-[#9CA3AF] md:text-base">
            <h3 className="text-xl font-black uppercase leading-none tracking-[0] text-white">
              The Mentee
            </h3>

            <p>
              Alfred AI : This is the Backbone of the Uvivio Experience. It
              acts as;
            </p>

            <ul className="list-disc space-y-0 pl-6 marker:text-[#9CA3AF]">
              <li>A career guide</li>
              <li>A learning architect</li>
              <li>A mentor connector</li>
              <li>A progress validator</li>
            </ul>
          </div>
        }
      >
        <p>
          The key features will be in two sections since we have 2 separate
          user journey, That is,
          <br />
          The Mentee and The Mentor
        </p>
      </UvivioTextSection>



      <div className="mx-auto mt-7 w-full max-w-[1280px] overflow-hidden px-6 md:mt-8 md:px-0">
        <Image
          src="/svg/uvivivo-one.svg"

          alt="Uvivio overview interface montage"
          width={1280}
          height={800}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="h-auto w-full"
        />
      </div>
      <div className="mx-auto mt-7 w-full max-w-[1280px] overflow-hidden px-6 md:mt-8 md:px-0">
        {uvivioFeatures.map(
          ({ sectionTitle, title, description, imageSrc, imageAlt }) => (
            <div key={title} className="mt-4 flex flex-col gap-5">
              {sectionTitle && (
                <h2 className="font-semibold text-white">{sectionTitle}</h2>
              )}

              <h3 className="max-w-3xl text-[#9CA3AF]">
                <span className="text-white">{title}</span> {description}
              </h3>

              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1280}
                height={800}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="h-auto w-full object-cover"
              />
            </div>
          ),
        )}
      </div>

      {/* ── 06 DESIGN DECISIONS ───────────────────────────────── */}
      <UvivioTextSection number="06" title="Design Decisions">
        <div className="space-y-6">
          <div>
            <h3 className="text-white">1. AI-First, Not Course-First</h3>
            <p>Most platforms start with content.</p>
            <p>Uvivio starts with direction.</p>
            <p>Decision: Make Alfred the entry point, not a course catalog.</p>
          </div>

          <div>
            <h3 className="text-white">2. Pre-Access Personalization</h3>
            <p>Before users fully enter the platform:</p>
            <ul className="list-disc pl-7">
              <li>They define their current state + desired future</li>
            </ul>
            <p>
              This allows Alfred to generate immediate value from the first
              interaction.
            </p>
          </div>

          <div>
            <h3 className="text-white">
              3. Guided Flow Instead of Exploration
            </h3>
            <p>Instead of “browse and choose”:</p>
            <ul className="list-disc pl-7">
              <li>Users follow a clear path</li>
            </ul>
            <p>Reduces decision fatigue and improves completion rates.</p>
          </div>

          <div>
            <h3 className="text-white">
              4. Hybrid Support System (AI + Human)
            </h3>
            <p>AI handles:</p>
            <ul className="list-disc pl-7">
              <li>Speed</li>
              <li>Structure</li>
              <li>Availability</li>
            </ul>
            <p>Humans provide:</p>
            <ul className="list-disc pl-7">
              <li>Depth</li>
              <li>Context</li>
              <li>Motivation</li>
            </ul>
            <p>
              This balance prevents both AI coldness and mentor bottlenecks.
            </p>
          </div>

          <div>
            <h3 className="text-white">5. Built-in Accountability</h3>
            <ul className="list-disc pl-7">
              <li>Task verification</li>
              <li>Mentor check-ins</li>
              <li>Progress tracking</li>
            </ul>
            <p>Keeps users consistent and committed.</p>
          </div>
        </div>
      </UvivioTextSection>

      {/* ── 07 EXPECTED IMPACT ────────────────────────────────── */}
      <UvivioTextSection number="07" title="Expected Impact">
        <div>
          <p>Here are some impacts that the platform is expected to make;</p>
          <ul className="mt-6 list-disc pl-7">
            <li>Improved user confidence and clarity</li>
            <li>Faster time-to-job-readiness</li>
            <li>Increased learning completion rate</li>
            <li>Reduced drop off during career transition</li>
          </ul>
        </div>
      </UvivioTextSection>

      {/* ── 08 WHAT I LEARNT ──────────────────────────────────── */}
      <UvivioTextSection number="08" title="What I Learnt">
        <div>
          <p className="text-[#9CA3AF]">
            Designing Uvivio reinforced the importance of guidance over content.
            Users don&apos;t just need more resources, They need clarity,
            structure, and support.
          </p>
          <ul className="mt-6 font-normal text-[#9CA3AF] list-disc pl-7">
            <li className="text-[#9CA3AF]">AI should guide, not overwhelm</li>
            <li className="text-[#9CA3AF]">Mentorship is most effective when contextual</li>
            <li className="text-[#9CA3AF]">Reducing decision fatigue improves engagement</li>
          </ul>
        </div>
      </UvivioTextSection>
 
      {/* ── DARK MODE MOCKUPS ─────────────────────────────────── */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="mx-auto mt-7 w-full max-w-7xl overflow-hidden px-6 md:mt-8 md:px-0">
          <p className="text-white text-center text-lg md:text-2xl tracking-[0.2em] uppercase mb-8">
            Dark Mode Mockups
          </p>
          <div className="w-full overflow-hidden  ">
            <Image
              src="/images/uvivio-dark-mode-mockups.svg"
              alt="Uvivio dark mode interface mockups"
              width={1280}
              height={800}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ──────────────────────────────────────── */}
      <div className="border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-gray-500 text-xs tracking-[0.15em] hover:text-white transition-colors"
          >
            ← BACK TO PROJECTS
          </Link>
          <Link
            href="/projects/powpup"
            className="flex items-center gap-3 text-white text-sm font-semibold tracking-widest hover:text-gray-300 transition-colors group"
          >
            POPWUP
            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
