import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  SectionHeader,
  Reveal,
  StatCard,
  StaggerList,
  StaggerListItem,
  HeroEntrance,
  MockupReveal,
} from "@/components/ui/CaseStudyMotion";

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

/* ── Feature card ─────────────────────────────────────────────── */
function FeatureCard({
  label,
  description,
  gradient,
}: {
  label: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
      <MockScreen gradient={gradient} aspect="aspect-[4/3]" />
      <div className="p-5">
        <p className="text-white text-sm font-medium mb-1">{label}</p>
        <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
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
      <header className="pt-32 pb-0 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <HeroEntrance>
            {/* Meta tags */}
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { label: "B2B" },
                { label: "Product Designer" },
                { label: "Year", value: "2024" },
                { label: "Status", value: "Figma" },
                { label: "Figma", value: "Remote" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-gray-600 text-[10px] tracking-[0.15em] uppercase">
                    {label}
                  </span>
                  {value && (
                    <span className="text-gray-300 text-xs">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] tracking-tight max-w-3xl mb-10">
              UVIVIO: AI POWERED
              <br />
              LEARNING PLATFORM
            </h1>

            <p className="text-[#C6C6C6] text-sm md:text-base leading-relaxed max-w-xl mb-12">
              Redesigning a spatial dashboard for the next generation of remote
              learners — building intuitive, impact-driven and more digital
              connections.
            </p>
          </HeroEntrance>

          {/* Hero mockup — slightly delayed scale-in */}
          <MockupReveal delay={0.2}>
            <div className="w-full h-64 md:h-[28rem] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-900 flex items-center justify-center gap-4 p-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-white/10 border border-white/20 rounded-xl flex-1 h-full max-w-[260px] flex flex-col gap-2 p-4 opacity-${i === 1 ? "100" : "60"}`}
                >
                  <div className="h-2 w-3/4 bg-white/30 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
                  <div className="flex-1 bg-white/5 rounded-lg mt-2" />
                  <div className="h-6 w-20 bg-white/20 rounded-lg" />
                </div>
              ))}
            </div>
          </MockupReveal>
        </div>
      </header>

      {/* ── 01 OVERVIEW ───────────────────────────────────────── */}
      <Section number="01" title="Overview">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="flex flex-col gap-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              UVIVIO is an adaptive learning platform designed for the next
              generation of students and professionals. The platform uses AI to
              personalise learning paths, recommend resources, and track
              progress across multiple subjects and skill sets.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              As the lead product designer on V2, I was responsible for
              redesigning the core dashboard experience — moving from a static,
              content-heavy layout to a dynamic, personalised interface that
              reduces cognitive load and increases engagement.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              The redesign involved deep user research, iterative prototyping,
              and close collaboration with engineers and stakeholders to ship a
              cohesive product experience.
            </p>
          </div>

          {/* Screenshot grid */}
          <div className="grid grid-cols-2 gap-3">
            <MockScreen
              gradient="from-indigo-800 via-blue-900 to-purple-900"
              aspect="aspect-[3/4]"
            />
            <MockScreen
              gradient="from-purple-800 via-indigo-700 to-blue-800"
              aspect="aspect-[3/4]"
              className="mt-6"
            />
            <MockScreen
              gradient="from-blue-900 via-purple-800 to-indigo-900"
              aspect="aspect-video"
              className="col-span-2"
            />
          </div>
        </div>
      </Section>

      {/* ── 02 THE PROBLEM ────────────────────────────────────── */}
      <Section number="02" title="The Problem">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Students using the original UVIVIO platform were dropping off
              within the first two weeks of signing up. Exit surveys and
              session recordings pointed to a core UX issue: the platform
              felt overwhelming and impersonal.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Lack of personalised learning paths made navigation feel aimless",
                "No clear hierarchy of tasks meant users didn't know where to start",
                "A content-heavy dashboard overwhelmed new users on first login",
                "Progress tracking was fragmented and hard to interpret",
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="text-purple-500 mt-1 flex-shrink-0">—</span>
                  <p className="text-gray-500 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <p className="text-gray-600 text-xs tracking-[0.15em] uppercase mb-2">
              Key Metrics (Pre-redesign)
            </p>
            {[
              { stat: "68%", desc: "Drop-off within first 2 weeks" },
              { stat: "4.2min", desc: "Average session duration" },
              { stat: "23%", desc: "Course completion rate" },
              { stat: "2.8/5", desc: "User satisfaction score" },
            ].map(({ stat, desc }) => (
              <div key={stat} className="flex items-center gap-4 py-3 border-t border-white/5">
                <span className="text-white font-bold text-xl w-20 flex-shrink-0">
                  {stat}
                </span>
                <span className="text-gray-500 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 03 SOLUTION ───────────────────────────────────────── */}
      <Section number="03" title="Solution">
        <div className="max-w-2xl flex flex-col gap-5 mb-12">
          <p className="text-gray-300 text-sm leading-relaxed">
            The redesigned UVIVIO V2 introduces an AI-driven personalisation
            layer that surfaces the right content at the right time. A smart
            onboarding flow evaluates each user&apos;s goals, background, and
            learning style before they touch the dashboard.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            The result is a fully contextualised experience — every element on
            screen is relevant to that specific user&apos;s journey, reducing
            cognitive overhead and dramatically increasing time-on-platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MockScreen
            gradient="from-violet-800 via-purple-700 to-indigo-800"
            aspect="aspect-[4/5]"
          />
          <MockScreen
            gradient="from-indigo-700 via-blue-800 to-purple-900"
            aspect="aspect-[4/5]"
            className="md:mt-8"
          />
          <MockScreen
            gradient="from-purple-900 via-violet-700 to-indigo-700"
            aspect="aspect-[4/5]"
          />
        </div>
      </Section>

      {/* ── 04 GOALS ──────────────────────────────────────────── */}
      <Section number="04" title="Goals">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              n: "01",
              title: "Reduce early drop-off",
              body: "Increase 2-week retention from 32% to above 60% through personalised onboarding and a clearer first-time experience.",
            },
            {
              n: "02",
              title: "Increase course completion",
              body: "Help learners finish what they start by providing adaptive roadmaps and contextual nudges at the right moments.",
            },
            {
              n: "03",
              title: "Personalise at scale",
              body: "Use AI to tailor the dashboard, recommendations, and progress tracking to each individual user without manual configuration.",
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-3">
              <span className="text-gray-600 text-xs font-mono">{n}</span>
              <h4 className="text-white font-semibold text-sm">{title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 05 KEY FEATURES ───────────────────────────────────── */}
      <Section number="05" title="Key Features">
        <div className="flex flex-col gap-8">
          {/* Feature label intro */}
          <p className="text-gray-500 text-xs tracking-[0.15em] uppercase">
            Features
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {[
              "Personalised Roadmap",
              "On-Demand Video",
              "Recommendations",
              "ThinkPad",
            ].map((f) => (
              <span
                key={f}
                className="text-[#C6C6C6] text-xs border border-white/10 px-3 py-1.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              label="Personalized Roadmap Generator"
              description="Generate tailored learning pathways — users can track step-by-step progress that adapts as they advance, with real-time updates and suggested next courses."
              gradient="from-indigo-800 via-purple-700 to-blue-900"
            />
            <FeatureCard
              label="On-Demand Video Library"
              description="An intelligent video suggestion layer that learns from viewing habits and surfaces the most relevant lectures, tutorials, and explainers at the right moment."
              gradient="from-purple-800 via-indigo-600 to-violet-900"
            />
            <FeatureCard
              label="Smart Recommendations"
              description="AI-powered content engine that cross-references user goals, completed modules, and peer activity to surface high-value resources throughout the session."
              gradient="from-blue-900 via-indigo-800 to-purple-800"
            />
            <FeatureCard
              label="ThinkPad"
              description="An integrated note-taking and idea board workspace that lets students capture thoughts inline while watching lectures or browsing their roadmap."
              gradient="from-violet-900 via-purple-800 to-indigo-700"
            />
          </div>

          {/* Wide feature highlight */}
          <div className="w-full rounded-2xl overflow-hidden">
            <MockScreen
              gradient="from-indigo-900 via-purple-800 to-violet-900"
              aspect="aspect-[21/9]"
            />
          </div>
        </div>
      </Section>

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
          <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-8">
            Dark Mode Mockups
          </p>

          {/* Large mockup grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {[
              "from-[#0d0d1a] via-indigo-950 to-purple-950",
              "from-[#0a0a14] via-purple-950 to-indigo-950",
              "from-[#0d1022] via-blue-950 to-indigo-950",
              "from-[#100a1a] via-violet-950 to-purple-950",
              "from-[#0a0d1c] via-indigo-950 to-blue-950",
              "from-[#110a18] via-purple-950 to-violet-950",
            ].map((g, i) => (
              <MockScreen
                key={i}
                gradient={g}
                aspect={i === 0 || i === 3 ? "aspect-[4/3]" : "aspect-[4/3]"}
              />
            ))}
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
