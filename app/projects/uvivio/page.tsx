import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  SectionHeader,
  StaggerList,
  StaggerListItem,
  HeroEntrance,
  MockupReveal,
} from "@/components/ui/CaseStudyMotion";
import Image from "next/image";

/* ── Reusable section wrapper ─────────────────────────────────── */
function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeader number={number} title={title} />
        {children}
      </div>
    </section>
  );
}

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

/* ── Mock screen placeholder ──────────────────────────────────── */
function MockScreen({
  gradient = "from-indigo-900 via-purple-800 to-blue-900",
  className = "",
  aspect = "aspect-video",
}: {
  gradient?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} rounded-xl overflow-hidden bg-gradient-to-br ${gradient} flex items-end p-4`}
    >
      {/* Fake UI chrome */}
      <div className="w-full flex flex-col gap-1.5 opacity-40">
        <div className="h-1.5 w-3/4 bg-white/40 rounded-full" />
        <div className="h-1.5 w-1/2 bg-white/25 rounded-full" />
        <div className="flex gap-1.5 mt-1">
          <div className="h-6 w-16 bg-white/20 rounded" />
          <div className="h-6 w-10 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
}

/* ── Design decision row ──────────────────────────────────────── */
function DesignDecision({
  number,
  title,
  body,
  gradient,
}: {
  number: string;
  title: string;
  body: string;
  gradient: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-10 border-t border-white/5 first:border-0">
      <div className="flex flex-col gap-4">
        <span className="text-gray-600 text-xs font-mono tracking-wider">
          {number}
        </span>
        <h4 className="text-white font-semibold text-base md:text-lg leading-snug">
          {title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
      </div>
      <MockScreen gradient={gradient} aspect="aspect-[16/10]" />
    </div>
  );
}

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

      {/* ── 06 DESIGN DECISIONS ───────────────────────────────── */}
      <Section number="06" title="Design Decisions">
        <DesignDecision
          number="1."
          title="Pre-Guided Personal Evaluation"
          body="Before the user ever sees the dashboard, a short onboarding flow captures their learning goals, background level, and available time. This data seeds the AI recommendation engine and ensures every first-session experience feels immediately relevant — eliminating the blank-slate problem."
          gradient="from-indigo-800 via-purple-700 to-blue-900"
        />
        <DesignDecision
          number="2."
          title="Humanising the Feature of Education"
          body="We stripped back clinical UI patterns in favour of warm, readable layouts with breathing room. Section headers, progress indicators, and CTA copy were rewritten to feel conversational, not instructional — reducing the intimidation factor for learners returning to education."
          gradient="from-purple-800 via-violet-700 to-indigo-800"
        />
        <DesignDecision
          number="3."
          title="Course Selector System (AI-enabled)"
          body="Rather than presenting a flat catalogue, the course selector surfaces a curated shortlist ranked by relevance to the user's stated goals. Users can filter, preview, and commit to a course in under three taps — dramatically reducing decision fatigue."
          gradient="from-blue-900 via-indigo-700 to-purple-800"
        />
        <DesignDecision
          number="4."
          title="Context-Free Product in Calculate"
          body="Every metric shown on the dashboard — streaks, scores, completion rates — is presented with plain-language context. Instead of 'Score: 74%', users see 'You're performing better than 68% of learners at this stage.' This framing turns abstract data into motivating feedback."
          gradient="from-violet-800 via-purple-900 to-blue-800"
        />
      </Section>

      {/* ── 07 EXPECTED IMPACT ────────────────────────────────── */}
      <Section number="07" title="Expected Impact">
        <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" stagger={0.09}>
          {[
            { stat: "2×", desc: "Increase in 2-week retention", sub: "Target: 32% → 65%+" },
            { stat: "↑41%", desc: "Course completion rate", sub: "Target: 23% → 64%" },
            { stat: "↑3.2×", desc: "Avg. session duration", sub: "4.2min → 13.6min" },
            { stat: "4.7/5", desc: "User satisfaction target", sub: "Up from 2.8/5" },
          ].map(({ stat, desc, sub }) => (
            <StaggerListItem key={stat}>
              <div className="bg-[#1a1a1a] rounded-2xl p-6 h-full">
                <p className="text-white font-black text-2xl md:text-3xl mb-2">{stat}</p>
                <p className="text-gray-300 text-xs leading-snug mb-1">{desc}</p>
                <p className="text-gray-600 text-[10px]">{sub}</p>
              </div>
            </StaggerListItem>
          ))}
        </StaggerList>

        <div className="max-w-2xl">
          <p className="text-gray-500 text-sm leading-relaxed">
            The V2 redesign is projected to increase overall platform revenue by
            reducing churn and increasing the number of learners who reach the
            paid tier of the product. Long-term, the personalisation system
            creates a flywheel: more engagement generates better AI data,
            which improves recommendations, which drives more engagement.
          </p>
        </div>
      </Section>

      {/* ── 08 WHAT I LEARNT ──────────────────────────────────── */}
      <Section number="08" title="What I Learnt">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-5">
            {[
              {
                title: "AI features need human anchors",
                body: "The most impactful design decision was giving the AI a human voice. Users trusted personalised suggestions far more when they were framed as 'based on your goals' rather than appearing as algorithmic outputs.",
              },
              {
                title: "Onboarding is the product",
                body: "The onboarding flow was initially scoped as a 'quick win'. It ended up being the most consequential design surface — the quality of data captured there determined the quality of every subsequent interaction.",
              },
              {
                title: "Progress visibility is motivation",
                body: "Adding contextual benchmarks (e.g. 'You're 2 lessons away from completing this module') had a measurable effect on completion rates in usability testing — a reminder that small copy decisions have big product consequences.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-2">
                <h4 className="text-white text-sm font-semibold">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-3 self-start">
            <p className="text-gray-600 text-xs tracking-[0.15em] uppercase mb-2">
              Tools & Methods
            </p>
            {[
              "Figma (design & prototyping)",
              "FigJam (user journey mapping)",
              "Maze (usability testing)",
              "Hotjar (session recordings)",
              "Notion (documentation)",
            ].map((tool) => (
              <div key={tool} className="flex items-center gap-3 py-2.5 border-t border-white/5">
                <span className="w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                <span className="text-[#C6C6C6] text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DARK MODE MOCKUPS ─────────────────────────────────── */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-white text-center text-xs tracking-[0.2em] uppercase mb-8">
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
