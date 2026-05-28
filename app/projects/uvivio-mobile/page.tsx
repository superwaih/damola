import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  SectionHeader,
  Reveal,
  StaggerList,
  StaggerListItem,
  HeroEntrance,
  MockupReveal,
} from "@/components/ui/CaseStudyMotion";

/* ── Section wrapper ──────────────────────────────────────────── */
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

/* ── Phone mockup ─────────────────────────────────────────────── */
function PhoneMock({
  gradient = "from-blue-800 via-indigo-700 to-violet-900",
  elevated = false,
  className = "",
}: {
  gradient?: string;
  elevated?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`
        ${elevated ? "relative -translate-y-4" : ""}
        ${className}
        w-full max-w-[160px] mx-auto rounded-[2.2rem] overflow-hidden
        ring-2 ring-white/10 shadow-2xl shadow-black/60
        bg-gradient-to-b ${gradient}
        flex flex-col p-3 gap-2
      `}
      style={{ aspectRatio: "9/19" }}
    >
      {/* notch */}
      <div className="flex justify-center">
        <div className="w-10 h-1.5 bg-black/40 rounded-full" />
      </div>
      {/* header row */}
      <div className="flex items-center justify-between px-1">
        <div className="w-10 h-1.5 bg-white/20 rounded-full" />
        <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20" />
      </div>
      {/* content area */}
      <div className="flex-1 flex flex-col gap-2 opacity-50 px-0.5">
        <div className="h-16 bg-white/10 rounded-xl" />
        <div className="h-2 w-3/4 bg-white/25 rounded-full" />
        <div className="h-2 w-1/2 bg-white/15 rounded-full" />
        <div className="flex gap-1 mt-1">
          <div className="h-10 flex-1 bg-white/10 rounded-lg" />
          <div className="h-10 flex-1 bg-white/10 rounded-lg" />
        </div>
        <div className="h-2 w-2/3 bg-white/15 rounded-full" />
        <div className="h-8 bg-blue-500/20 rounded-lg" />
      </div>
      {/* bottom tab bar */}
      <div className="flex justify-around pt-1 border-t border-white/10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-sm ${i === 0 ? "bg-blue-400/60" : "bg-white/15"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Feature row – phones + label + description ───────────────── */
function FeatureRow({
  label,
  title,
  description,
  count = 3,
  gradient,
  flip = false,
}: {
  label: string;
  title: string;
  description: string;
  count?: number;
  gradient?: string;
  flip?: boolean;
}) {
  const grads = [
    "from-blue-800 via-indigo-700 to-violet-900",
    "from-indigo-700 via-blue-800 to-purple-900",
    "from-violet-800 via-indigo-700 to-blue-900",
    "from-blue-900 via-violet-800 to-indigo-700",
  ];

  const phones = (
    <div className="flex gap-3 items-end justify-center">
      {[...Array(count)].map((_, i) => (
        <PhoneMock
          key={i}
          gradient={gradient ?? grads[i % grads.length]}
          elevated={count > 2 && i === Math.floor(count / 2)}
        />
      ))}
    </div>
  );

  const text = (
    <div className="flex flex-col gap-4">
      <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase">
        {label}
      </span>
      <h3 className="text-white font-semibold text-base md:text-lg leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-12 border-t border-white/5 first:border-0">
      {flip ? (
        <>
          {phones}
          {text}
        </>
      ) : (
        <>
          {text}
          {phones}
        </>
      )}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function UvivioMobileCase() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="pt-32 pb-0 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <HeroEntrance>
            {/* Meta */}
            <div className="flex flex-wrap gap-6 mb-6">
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Year", value: "2024" },
                { label: "Tool", value: "Figma" },
                { label: "Platform", value: "iOS / Android" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-gray-600 text-[10px] tracking-[0.15em] uppercase">
                    {label}
                  </span>
                  <span className="text-gray-300 text-xs">{value}</span>
                </div>
              ))}
            </div>

            <h1 className="text-white font-black text-3xl md:text-5xl lg:text-[3.5rem] uppercase leading-[1.05] tracking-tight max-w-3xl mb-6">
              UVIVIO V1
              <br />
              (MOBILE APP):
            </h1>

            <p className="text-[#C6C6C6] text-sm md:text-base leading-relaxed max-w-xl mb-12">
              AI-Friendly, Remote-Oriented Learning Experience brought
              through a Mobile Interface — putting the full power of the
              UVIVIO platform in the learner&apos;s pocket.
            </p>
          </HeroEntrance>

          {/* Hero phone cluster */}
          <MockupReveal delay={0.2}>
            <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-950 py-14 px-6 flex items-end justify-center">
              <div className="flex gap-4 items-end justify-center w-full max-w-2xl">
                <PhoneMock gradient="from-blue-900 via-indigo-800 to-violet-900" />
                <PhoneMock
                  gradient="from-indigo-700 via-blue-800 to-purple-900"
                  elevated
                  className="scale-105"
                />
                <PhoneMock gradient="from-violet-800 via-indigo-700 to-blue-900" />
              </div>
            </div>
          </MockupReveal>
        </div>
      </header>

      {/* ── 01 OVERVIEW ───────────────────────────────────────── */}
      <Section number="01" title="Overview">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Screenshot mosaic */}
          <div className="grid grid-cols-2 gap-3 items-end">
            {[
              { g: "from-blue-800 via-indigo-700 to-violet-900", mt: false },
              { g: "from-indigo-700 via-purple-700 to-blue-900", mt: true },
              { g: "from-violet-800 via-blue-700 to-indigo-800", mt: false },
              { g: "from-blue-900 via-violet-800 to-indigo-700", mt: true },
            ].map(({ g, mt }, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden ring-1 ring-white/10 ${mt ? "mt-6" : ""}`}
              >
                <div
                  className={`w-full aspect-[9/16] bg-gradient-to-b ${g} flex flex-col p-3 gap-2`}
                >
                  <div className="w-8 h-1 bg-white/20 rounded-full mb-1" />
                  <div className="flex-1 flex flex-col gap-2 opacity-40">
                    <div className="h-2 w-3/4 bg-white/50 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/30 rounded-full" />
                    <div className="flex-1 bg-white/10 rounded-xl" />
                    <div className="h-6 bg-blue-400/30 rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              UVIVIO V1 Mobile is the first native application for the
              UVIVIO learning platform, built to serve learners who
              primarily access content on the go. The app brings AI-driven
              personalisation, a live learning feed, peer messaging, and
              a full course roadmap into a single mobile-native experience.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Unlike the web platform, the mobile app is built around
              micro-learning sessions — short, focused interactions designed
              to fit into commutes, breaks, and transitional moments.
              Every screen decision prioritises depth of focus over
              breadth of options.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              As the sole product designer on V1, I designed the complete
              mobile system from scratch: information architecture,
              component library, all core flows, and the dark mode
              variant.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 02 THE PROBLEM ────────────────────────────────────── */}
      <Section number="02" title="The Problem">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              The UVIVIO web platform was gaining traction, but analytics
              revealed that 63% of active users were accessing it on mobile
              browsers — and dropping off at more than twice the rate of
              desktop users. The responsive web experience was tolerable,
              but it was not designed for the thumb.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Mobile web sessions averaged 2.1 minutes vs 11 minutes on desktop",
                "Course roadmap and progress tools were unusable below 768px",
                "Push notification capability was absent — no re-engagement mechanism",
                "AI chat interface required horizontal scrolling on most phones",
                "No offline capability meant poor performance on low-bandwidth connections",
              ].map((p) => (
                <div key={p} className="flex gap-3">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">—</span>
                  <p className="text-gray-500 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 flex flex-col gap-4 self-start">
            <p className="text-gray-600 text-[10px] tracking-[0.15em] uppercase mb-2">
              Baseline Metrics (Mobile Web)
            </p>
            {[
              { stat: "63%", desc: "Of active users accessed UVIVIO on mobile" },
              { stat: "2.1m", desc: "Average mobile web session duration" },
              { stat: "2×", desc: "Higher drop-off rate on mobile vs desktop" },
              { stat: "14%", desc: "Course completion on mobile web" },
              { stat: "0%", desc: "Push notification reach (web, no prompt)" },
            ].map(({ stat, desc }) => (
              <div key={stat} className="flex gap-4 py-3 border-t border-white/5 items-center">
                <span className="text-white font-bold text-lg w-16 flex-shrink-0">
                  {stat}
                </span>
                <span className="text-gray-500 text-sm leading-snug">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 03 GOALS ──────────────────────────────────────────── */}
      <Section number="03" title="Goals">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              n: "01",
              title: "Mobile-native performance",
              body: "Achieve sub-2 second load times and 60fps scrolling across all core screens, including offline-first data caching for roadmap content.",
            },
            {
              n: "02",
              title: "Increase session depth",
              body: "Design micro-learning interactions that extend average mobile sessions from 2.1 minutes to 8+ minutes through contextual content sequencing.",
            },
            {
              n: "03",
              title: "Recover mobile completion rates",
              body: "Bring mobile course completion from 14% up to parity with desktop (≈ 35%) through smart progress nudges and a thumb-optimised roadmap.",
            },
            {
              n: "04",
              title: "Enable re-engagement",
              body: "Build a push notification system for streaks, reminders, and social activity that drives daily active use habits.",
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

      {/* ── 04 SOLUTION ───────────────────────────────────────── */}
      <Section number="04" title="Solution">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              UVIVIO V1 Mobile is built around four primary surfaces: the
              Feed, the Roadmap, Messages, and the AI Copilot. Each maps
              to a distinct learning behaviour — discovery, progression,
              collaboration, and guidance — and is accessible in one tap
              from a persistent bottom navigation bar.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              The app is designed for thumb-zone dominance: primary
              actions sit within the bottom 40% of the screen at all times.
              Content scrolls vertically with no horizontal navigation
              or nested tabs that would require lateral movement.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              An offline-first data layer caches roadmap progress, recent
              messages, and queued AI responses, ensuring the core
              experience remains usable without a network connection.
            </p>
          </div>

          <div className="flex gap-4 items-end justify-center">
            <PhoneMock gradient="from-blue-900 via-indigo-800 to-violet-900" />
            <PhoneMock
              gradient="from-indigo-700 via-blue-800 to-purple-900"
              elevated
            />
          </div>
        </div>
      </Section>

      {/* ── 05 KEY FEATURES ───────────────────────────────────── */}
      <Section number="05" title="Key Features">
        <div className="flex flex-col">

          <FeatureRow
            label="The Feed"
            title="Make Discovery Personal and Immediate"
            description="The Feed surfaces AI-curated content — course snippets, peer activity, trending topics, and mentor recommendations — in a vertically scrolling, card-based layout. Content type is indicated by a coloured tag so learners can scan quickly without reading every card. The feed updates in real time and respects the user's declared learning goals."
            count={3}
            gradient="from-blue-800 via-indigo-700 to-violet-900"
          />

          <FeatureRow
            label="Roadmap"
            title="Get the Most From Your Learning Path"
            description="The mobile Roadmap condenses the full web roadmap into a vertically scrollable timeline. Each milestone is expandable in-place — no context switch to a new screen. Progress rings sit at the edge of the screen for glanceable completion tracking during a commute without requiring the user to open the app fully."
            count={3}
            gradient="from-indigo-700 via-violet-700 to-blue-900"
            flip
          />

          <FeatureRow
            label="Appointments"
            title="Schedule and Join Sessions Instantly"
            description="The Appointments view consolidates live sessions, mentor calls, and self-scheduled study blocks in a single calendar surface. Users can join a live session with a single tap — no URL copying, no browser redirect. Upcoming sessions trigger smart reminders 10 minutes before start."
            count={2}
            gradient="from-blue-900 via-indigo-800 to-violet-800"
          />

          <FeatureRow
            label="Messages"
            title="Learn Together, Stay Connected"
            description="The Messages tab supports direct conversations with mentors, peer study groups, and course-level channels. Inline media preview means learners can view shared resources without leaving the chat. Read receipts and typing indicators are visible to reduce the communication anxiety common in async learning."
            count={3}
            gradient="from-violet-800 via-blue-700 to-indigo-800"
            flip
          />

          <FeatureRow
            label="Diff / XP"
            title="Progress You Can See and Feel"
            description="A persistent XP streak counter sits in the top bar of the Feed and Roadmap screens, reinforcing daily habit formation. Weekly progress diff summaries — 'You completed 3 more modules than last week' — are pushed as notifications and shown as a card in the Feed, turning raw data into meaningful momentum."
            count={2}
            gradient="from-blue-800 via-violet-700 to-indigo-900"
          />

          <FeatureRow
            label="The Match"
            title="AI-Powered Peer and Mentor Matching"
            description="The Match uses the user's learning style profile, roadmap stage, and availability to suggest the right study partner or mentor at the right moment. Match cards appear in the Feed and in a dedicated tab, with one-tap connection requests and a 24-hour response window that maintains urgency without pressure."
            count={3}
            gradient="from-indigo-900 via-blue-800 to-violet-800"
            flip
          />

          <FeatureRow
            label="Space Arrangement"
            title="Build Your Own Study Environment"
            description="A customisable home screen widget system lets users pin their active roadmap, a current streak counter, an upcoming appointment, and a shortcut to the AI Copilot. Power users can rearrange these blocks; casual learners get a sensible default that surfaces the most relevant action without configuration."
            count={2}
            gradient="from-violet-900 via-indigo-700 to-blue-800"
          />

          <FeatureRow
            label="Core Plan + AI Copilot"
            title="Your Personal Learning Assistant, Always On"
            description="The AI Copilot is accessible from a persistent floating button across all screens. It answers curriculum questions, explains concepts, suggests what to study next, and generates practice questions on demand. Responses are streamed in real time and persist in a conversation history tied to the user's roadmap context."
            count={3}
            gradient="from-blue-700 via-indigo-800 to-violet-900"
            flip
          />

        </div>
      </Section>

      {/* ── 06 DESIGN DECISIONS ───────────────────────────────── */}
      <Section number="06" title="Design Decisions">
        <div className="flex flex-col">
          {[
            {
              title: "Designing Bottom-Up to Support Clarity and Reach",
              body: "All primary actions live in the bottom 40% of the screen. This wasn't a stylistic choice — it was a biomechanical one. Thumb reach analysis on common phone sizes showed that 73% of interactive targets in the original web-responsive layout required a two-handed grip. Bottom-anchored navigation and floating action buttons solved this entirely.",
              gradient: "from-blue-800 via-indigo-700 to-violet-900",
            },
            {
              title: "A Guided Plan Helps in Practice — Not Just Theory",
              body: "Early prototypes showed the Roadmap as a top-level tab. Testing revealed users rarely navigated there voluntarily — they waited to be told what to do next. Moving roadmap progress into the Feed as a contextual card ('You're 2 lessons from your next milestone') drove a 3× increase in Roadmap visits in usability testing.",
              gradient: "from-indigo-700 via-blue-900 to-violet-800",
            },
            {
              title: "Matching Experience Across the Core Tabs",
              body: "Each of the four bottom tabs was initially designed by a different interaction model (Feed as infinite scroll, Roadmap as tree, Messages as thread list, Copilot as chat). Unifying the card component — same corner radius, same tap target size, same spacing system — created coherence across radically different content types without flattening their distinctiveness.",
              gradient: "from-violet-800 via-indigo-700 to-blue-900",
            },
            {
              title: "Opening Information to Increase Clarity — Not Overwhelm",
              body: "The first prototype of the Feed showed 8 cards above the fold on a standard iPhone. Testing showed users felt overwhelmed and scrolled past content without engaging. Reducing to 3 cards above the fold — with a clear visual 'more below' indicator — increased first-session engagement with Feed content by 41%.",
              gradient: "from-blue-900 via-violet-800 to-indigo-700",
            },
            {
              title: "A Large Plus Button in Practice — Not Just a Design Cliché",
              body: "The floating action button for 'Start a session', 'Log progress', and 'Open Copilot' was contested in stakeholder reviews as 'too prominent'. But testing confirmed it: users who had the FAB visited an average of 2.4 more screens per session than those using the text-only navigation variant. Prominence drove engagement.",
              gradient: "from-indigo-800 via-blue-700 to-violet-900",
            },
          ].map(({ title, body, gradient }, i) => (
            <div
              key={title}
              className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-10 border-t border-white/5"
            >
              {i % 2 === 0 ? (
                <>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold text-sm md:text-base leading-snug">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                  </div>
                  <div className="flex gap-4 items-end justify-center">
                    <PhoneMock gradient={gradient} />
                    <PhoneMock gradient={gradient} elevated />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-4 items-end justify-center order-last md:order-first">
                    <PhoneMock gradient={gradient} elevated />
                    <PhoneMock gradient={gradient} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold text-sm md:text-base leading-snug">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── 07 EXPECTED IMPACT ────────────────────────────────── */}
      <Section number="07" title="Expected Impact">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {[
            { stat: "↑3.8×", label: "Avg. session duration", sub: "2.1m → 8+ min target" },
            { stat: "↑35%", label: "Course completion (mobile)", sub: "14% → 49% target" },
            { stat: "↓58%", label: "Mobile drop-off rate", sub: "vs web baseline" },
            { stat: "70%", label: "Push opt-in target", sub: "re-engagement channel" },
            { stat: "4.6★", label: "App store rating target", sub: "UX as differentiator" },
          ].map(({ stat, label, sub }) => (
            <div key={stat} className="bg-[#1a1a1a] rounded-2xl p-5">
              <p className="text-white font-black text-2xl mb-1.5">{stat}</p>
              <p className="text-gray-300 text-xs leading-snug mb-1">{label}</p>
              <p className="text-gray-600 text-[10px]">{sub}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl">
          <p className="text-gray-500 text-sm leading-relaxed">
            The native mobile app is projected to become UVIVIO&apos;s primary
            acquisition and retention channel within 12 months of launch.
            Micro-learning sessions, push-driven re-engagement, and peer
            social features combine to create a daily habit loop that the
            web platform cannot replicate.
          </p>
        </div>
      </Section>

      {/* ── 08 WHAT I LEARNT ──────────────────────────────────── */}
      <Section number="08" title="What I Learnt">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Mobile is not a smaller web — it's a different intent",
                body: "Web users come to UVIVIO with 30 minutes to spare. Mobile users come with 3. Designing for the same content in both contexts isn't responsive design — it's a category error. The mobile product needed its own information architecture, not a scaled-down version of the desktop one.",
              },
              {
                title: "Thumb zones are non-negotiable",
                body: "Every round of usability testing confirmed the same finding: if a primary action isn't reachable with one thumb, users will complete it less often — regardless of how important or how well-labelled it is. Bottom-up layout is a principle, not an aesthetic.",
              },
              {
                title: "Streaks and XP only work if they feel earned",
                body: "Early gamification prototypes felt hollow because they rewarded passive behaviour (opening the app) rather than active learning (completing a module, answering a question). Tying rewards to meaningful milestones increased streak participation and reduced the feeling of being 'gamed'.",
              },
              {
                title: "The FAB is divisive — and usually right",
                body: "The floating action button generated more stakeholder debate than any other element. Every time I removed it to appease reviewers, testing performance dropped. The lesson: design decisions that feel 'too obvious' in reviews often perform best with real users.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h4 className="text-white text-sm font-semibold mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <p className="text-gray-600 text-[10px] tracking-[0.15em] uppercase mb-4">
                Tools & Methods
              </p>
              {[
                "Figma (design & component library)",
                "FigJam (IA workshop & flows)",
                "Maze (unmoderated usability tests)",
                "Principle (micro-interaction prototypes)",
                "Hotjar (mobile web session recordings)",
                "Notion (research documentation)",
              ].map((t) => (
                <div key={t} className="flex gap-3 py-2.5 border-t border-white/5 items-center">
                  <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                  <span className="text-[#C6C6C6] text-xs">{t}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 items-end justify-center pt-4">
              {["from-blue-900 via-indigo-800 to-violet-900", "from-indigo-700 via-violet-800 to-blue-900"].map((g, i) => (
                <PhoneMock key={i} gradient={g} elevated={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── DARK MODE MOCKUPS ─────────────────────────────────── */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-10">
            Dark Mode Mockups
          </p>

          {/* Wide banner */}
          <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#050510] via-[#0a0520] to-[#080312] mb-4 py-10 px-6">
            <div className="flex gap-4 items-end justify-center max-w-3xl mx-auto">
              {[
                "from-[#0d1535] via-[#0a1040] to-[#130d35]",
                "from-[#0a0d30] via-[#10154a] to-[#0d0a3a]",
                "from-[#130a30] via-[#0d1040] to-[#0a1535]",
                "from-[#0a1040] via-[#0d0a30] to-[#10154a]",
              ].map((g, i) => (
                <PhoneMock
                  key={i}
                  gradient={g}
                  elevated={i === 1 || i === 2}
                />
              ))}
            </div>
          </div>

          {/* Smaller grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "from-[#050520] via-[#0a0d35] to-[#100a30]",
              "from-[#0a0520] via-[#0d1030] to-[#050d25]",
              "from-[#080310] via-[#0d0a2a] to-[#050520]",
              "from-[#100530] via-[#0a0d20] to-[#050a30]",
              "from-[#050a30] via-[#0a0520] to-[#0d0a30]",
              "from-[#0a0d2a] via-[#080315] to-[#100530]",
            ].map((g, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden bg-gradient-to-br ${g} flex items-center justify-center py-6`}
              >
                <PhoneMock gradient={g} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM NAV ────────────────────────────────────────── */}
      <div className="border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/projects/powpup"
            className="flex items-center gap-3 text-white text-sm font-semibold tracking-widest hover:text-gray-300 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            POWPUP
          </Link>
          <Link
            href="/"
            className="text-gray-500 text-xs tracking-[0.15em] hover:text-white transition-colors"
          >
            ALL PROJECTS →
          </Link>
        </div>
      </div>
    </div>
  );
}
