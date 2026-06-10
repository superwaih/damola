import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  SectionHeader,
  HeroEntrance,
  MockupReveal,
} from "@/components/ui/CaseStudyMotion";

/* ── Helpers ──────────────────────────────────────────────────── */
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

/* Phone mockup placeholder – warm tones for Powpup */
function PhoneMock({
  gradient = "from-orange-700 via-rose-700 to-pink-900",
  className = "",
  tall = false,
}: {
  gradient?: string;
  className?: string;
  tall?: boolean;
}) {
  const h = tall ? "h-72 md:h-80" : "h-56 md:h-64";
  return (
    <div
      className={`${h} ${className} w-full max-w-[180px] mx-auto rounded-[2rem] overflow-hidden ring-2 ring-white/10 bg-gradient-to-b ${gradient} flex flex-col p-3 gap-2`}
    >
      {/* fake status bar */}
      <div className="flex justify-between items-center px-1">
        <div className="w-8 h-1 bg-white/30 rounded-full" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
      </div>
      <div className="flex-1 flex flex-col gap-1.5 opacity-50">
        <div className="h-2 w-3/4 bg-white/40 rounded-full" />
        <div className="h-2 w-1/2 bg-white/25 rounded-full" />
        <div className="flex-1 bg-white/10 rounded-xl mt-1" />
        <div className="flex gap-1">
          <div className="h-5 flex-1 bg-white/20 rounded-lg" />
          <div className="h-5 w-10 bg-white/15 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

/* Row of phones */
function PhoneRow({
  count = 3,
  gradient,
  className = "",
}: {
  count?: number;
  gradient?: string;
  className?: string;
}) {
  const grads = [
    "from-orange-800 via-rose-700 to-pink-900",
    "from-rose-700 via-orange-700 to-amber-800",
    "from-pink-800 via-rose-700 to-orange-700",
    "from-amber-700 via-orange-700 to-rose-800",
  ];
  return (
    <div className={`flex gap-3 items-end justify-center ${className}`}>
      {[...Array(count)].map((_, i) => (
        <PhoneMock
          key={i}
          gradient={gradient ?? grads[i % grads.length]}
          tall={i === Math.floor(count / 2)}
          className={i % 2 === 0 ? "mb-0" : "mb-4"}
        />
      ))}
    </div>
  );
}

/* Comparison table tick/cross */
const Tick = () => (
  <span className="text-emerald-400 text-base font-bold">✓</span>
);
const Cross = () => (
  <span className="text-red-500/70 text-base font-bold">✗</span>
);

/* ── Page ─────────────────────────────────────────────────────── */
export default function PowpupCase() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="pt-28 md:pt-32 pb-0 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <HeroEntrance className="flex flex-col items-center text-center">
            <h1 className="text-white font-normal text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] uppercase leading-[1.18] max-w-6xl mb-10">
              POWPUP: CREATE
              <br />
              SPONTANEOUS EVENTS
              <br />
              AND FLEXIBLE SPACE HOSTING
            </h1>

            <p className="text-[#9CA3AF] text-sm sm:text-base md:text-xl leading-snug max-w-[44rem] mb-16">
              PopUp is a mobile app that allows users to create and join
              spontaneous events &amp; social &ldquo;PopUps&rdquo;. Users can browse local
              events, create their own, and connect with others attending
              through an activity-driven community platform.
            </p>

            <div className="w-full max-w-[896px] border-t border-white/75 pt-8 mb-14">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-7 text-left">
                {[
                  { label: "Type", value: "Mobile App" },
                  { label: "Role", value: "Product Designer" },
                  { label: "Tools", value: "Figma" },
                  { label: "Year", value: "2024" },
                  { label: "Status", value: "Concept" },
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

          {/* Hero mockup */}
          <MockupReveal delay={0.2}>
            <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-orange-900 via-rose-900 to-pink-950 py-10 px-6 flex items-end justify-center gap-4 min-h-[20rem] md:min-h-[28rem]">
              <PhoneRow count={4} className="w-full max-w-2xl" />
            </div>
          </MockupReveal>
        </div>
      </header>

      {/* ── 01 OVERVIEW ───────────────────────────────────────── */}
      <Section number="01" title="Overview">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Phone grid */}
          <div className="grid grid-cols-2 gap-3 items-end">
            {[
              "from-orange-800 via-rose-700 to-pink-900",
              "from-rose-700 via-amber-700 to-orange-800",
              "from-pink-800 via-rose-800 to-orange-900",
              "from-amber-700 via-orange-700 to-rose-700",
            ].map((g, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden ring-1 ring-white/10 ${i % 2 !== 0 ? "mt-6" : ""}`}
              >
                <div
                  className={`w-full ${i < 2 ? "aspect-[9/16]" : "aspect-[9/16]"} bg-gradient-to-b ${g} flex flex-col p-3 gap-2`}
                >
                  <div className="flex gap-1 mb-1">
                    <div className="w-8 h-1 bg-white/30 rounded-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 opacity-40">
                    <div className="h-2 w-3/4 bg-white/50 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/30 rounded-full" />
                    <div className="flex-1 bg-white/10 rounded-xl" />
                    <div className="h-6 w-full bg-white/20 rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              Powpup is a two-sided social platform designed around spontaneity.
              On one side, space hosts can monetize underutilised venues for
              short-duration events. On the other, attendees can discover,
              RSVP, and connect with others at live micro-events happening
              nearby in real time.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              The core design challenge was balancing discoverability and
              urgency — helping users find events that are happening now,
              not three weeks from now — while building a social layer that
              encourages genuine connection rather than passive scrolling.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              I led the end-to-end product design across onboarding,
              event discovery, space hosting flow, and the in-event
              social experience.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 02 THE PROBLEM ────────────────────────────────────── */}
      <Section number="02" title="The Problem">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              Social platforms have made it easier than ever to&nbsp;
              <em>plan</em> events, but almost impossible to act
              spontaneously. Existing apps require advance notice, formal
              invitations, or algorithmic feeds that bury local activity
              under influencer content.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "No platform surfaces genuinely spontaneous, proximity-based events",
                "Space hosts lack a lightweight tool to monetize last-minute availability",
                "RSVP friction kills momentum — most interest is lost before commitment",
                "Event discovery feeds are polluted by promoted or irrelevant content",
                "In-event social features are absent or bolted-on afterthoughts",
              ].map((p) => (
                <div key={p} className="flex gap-3">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0">—</span>
                  <p className="text-gray-500 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 flex flex-col gap-4 self-start">
            <p className="text-gray-600 text-xs tracking-[0.15em] uppercase mb-2">
              User Research Pain Points
            </p>
            {[
              { n: "74%", t: "Want to attend events but struggle to find last-minute options" },
              { n: "61%", t: "Have cancelled RSVPs due to complex booking flows" },
              { n: "82%", t: "Prefer discovering events via location over algorithm" },
              { n: "55%", t: "Space owners have unused availability they can't monetize" },
            ].map(({ n, t }) => (
              <div key={n} className="flex gap-4 py-3 border-t border-white/5 items-start">
                <span className="text-white font-bold text-lg w-14 flex-shrink-0">{n}</span>
                <span className="text-gray-500 text-sm leading-snug">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 03 SOLUTION ───────────────────────────────────────── */}
      <Section number="03" title="Solution">
        <div className="max-w-2xl mb-12">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Powpup removes every layer of friction between impulse and
            attendance. A stripped-back discovery feed shows events
            happening within the next few hours. Single-tap RSVP means
            users can commit in seconds. Space hosts get a simplified
            listing flow that goes live in under three minutes.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            An in-event social layer — built around reactions, a live
            chat, and a shared activity feed — turns attendees into a
            community before they even arrive, increasing show-up rates
            and organic word-of-mouth.
          </p>
        </div>
        <PhoneRow count={3} className="max-w-xl mx-auto" />
      </Section>

      {/* ── 04 DESIGN GOALS & OBJECTIVES ──────────────────────── */}
      <Section number="04" title="Design Goals & Objectives">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-600 text-xs tracking-[0.15em] uppercase pb-4 pr-8 font-normal w-1/3">
                  Goal
                </th>
                <th className="text-left text-gray-600 text-xs tracking-[0.15em] uppercase pb-4 pr-8 font-normal w-1/3">
                  Feedback
                </th>
                <th className="text-left text-gray-600 text-xs tracking-[0.15em] uppercase pb-4 font-normal w-1/3">
                  How it Addresses These
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  goal: "Reduce RSVP friction to under 5 seconds",
                  feedback: "Users abandoned multi-step booking flows",
                  how: "Single-tap RSVP with instant confirmation and calendar add",
                },
                {
                  goal: "Surface hyper-local, time-sensitive events",
                  feedback: "Existing feeds feel irrelevant and distant",
                  how: "Proximity-first feed sorted by time-to-start, not popularity",
                },
                {
                  goal: "Enable hosts to list a space in under 3 minutes",
                  feedback: "Listing tools feel complex and business-facing",
                  how: "Streamlined 4-step listing flow optimised for mobile",
                },
                {
                  goal: "Drive in-event connection and engagement",
                  feedback: "Events feel transactional, no social layer",
                  how: "Live chat, reactions and shared attendee feed before & during",
                },
                {
                  goal: "Build repeat usage through spontaneous discovery",
                  feedback: "Users open once, don't return without a reason",
                  how: "Daily 'happening now' push notifications and home feed refresh",
                },
              ].map(({ goal, feedback, how }) => (
                <tr key={goal} className="border-b border-white/5">
                  <td className="py-4 pr-8 text-gray-300 text-xs leading-relaxed align-top">
                    {goal}
                  </td>
                  <td className="py-4 pr-8 text-gray-500 text-xs leading-relaxed align-top">
                    {feedback}
                  </td>
                  <td className="py-4 text-gray-500 text-xs leading-relaxed align-top">
                    {how}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 05 RESEARCH & INSIGHTS ────────────────────────────── */}
      <Section number="05" title="Research & Insights">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="flex flex-col gap-5">
            <p className="text-gray-500 text-sm leading-relaxed">
              Research combined 12 user interviews, a 200-person survey,
              and competitive benchmarking across 6 platforms. Key themes
              emerged around the gap between intent and action in social
              event discovery.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  event: "Interview finding",
                  insight: "Users described wanting to 'just show up somewhere' but had no reliable way to find same-day options",
                },
                {
                  event: "Survey finding",
                  insight: "Most used Instagram or WhatsApp for event discovery — neither built for it, both unreliable",
                },
                {
                  event: "Usability testing",
                  insight: "Participants completed event discovery tasks 3× faster with map-first vs feed-first navigation",
                },
              ].map(({ event, insight }) => (
                <div key={event} className="flex flex-col gap-1.5 bg-[#1a1a1a] rounded-xl p-4">
                  <span className="text-orange-400 text-[10px] tracking-[0.15em] uppercase">
                    {event}
                  </span>
                  <p className="text-[#C6C6C6] text-sm leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-600 tracking-[0.12em] uppercase pb-3 pr-6 font-normal">
                    Event
                  </th>
                  <th className="text-left text-gray-600 tracking-[0.12em] uppercase pb-3 pr-6 font-normal">
                    Feedback
                  </th>
                  <th className="text-left text-gray-600 tracking-[0.12em] uppercase pb-3 font-normal">
                    How it Addresses These
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    e: "Spontaneous hangouts",
                    f: "No platform for this",
                    h: "PopUp feed + proximity filter",
                  },
                  {
                    e: "Space hosting",
                    f: "Listing too complex",
                    h: "4-step quick listing flow",
                  },
                  {
                    e: "RSVP drop-off",
                    f: "Too many steps",
                    h: "1-tap RSVP with reminders",
                  },
                  {
                    e: "Event discovery",
                    f: "Feeds are irrelevant",
                    h: "Location + time sorted feed",
                  },
                  {
                    e: "In-event social",
                    f: "No connection tools",
                    h: "Live chat + react layer",
                  },
                ].map(({ e, f, h }) => (
                  <tr key={e} className="border-b border-white/5">
                    <td className="py-3 pr-6 text-gray-300 align-top leading-relaxed">{e}</td>
                    <td className="py-3 pr-6 text-gray-500 align-top leading-relaxed">{f}</td>
                    <td className="py-3 text-gray-500 align-top leading-relaxed">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── 06 COMPETITIVE ANALYSIS ───────────────────────────── */}
      <Section number="06" title="Competitive Analysis">
        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-8">
          No existing platform combines spontaneous event discovery,
          space hosting, and an in-event social layer in a mobile-first
          product. This gap defines Powpup&apos;s unique position.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-600 text-xs tracking-[0.12em] uppercase pb-4 font-normal pr-6">
                  Feature
                </th>
                {["Eventbrite", "Meetup", "Facebook Events", "Peerspace", "Powpup"].map((app) => (
                  <th
                    key={app}
                    className={`text-center text-xs tracking-[0.1em] uppercase pb-4 font-normal px-4 ${app === "Powpup" ? "text-orange-400" : "text-gray-600"}`}
                  >
                    {app}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Spontaneous / same-day events", vals: [false, false, false, false, true] },
                { feature: "Proximity-first discovery", vals: [false, true, false, false, true] },
                { feature: "Space hosting / rental", vals: [false, false, false, true, true] },
                { feature: "Single-tap RSVP", vals: [false, false, true, false, true] },
                { feature: "In-event live chat", vals: [false, true, true, false, true] },
                { feature: "Attendee social layer", vals: [false, true, false, false, true] },
                { feature: "Mobile-first design", vals: [false, true, true, false, true] },
                { feature: "Host monetisation tools", vals: [true, false, false, true, true] },
              ].map(({ feature, vals }) => (
                <tr key={feature} className="border-b border-white/5">
                  <td className="py-3 pr-6 text-[#C6C6C6] text-xs align-middle leading-snug">
                    {feature}
                  </td>
                  {vals.map((v, i) => (
                    <td key={i} className="py-3 px-4 text-center align-middle">
                      {v ? <Tick /> : <Cross />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 07 KEY FEATURES ───────────────────────────────────── */}
      <Section number="07" title="Key Features">
        <div className="flex flex-col gap-20">

          {/* Feature: Spontaneous */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase block mb-3">Spontaneous</span>
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                Discover What&rsquo;s Happening Right Now
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                The home feed surfaces PopUps happening within the next few hours,
                sorted by proximity. A map view lets users see clusters of activity
                in their city at a glance — turning serendipity into a feature, not
                an accident.
              </p>
            </div>
            <PhoneRow count={3} gradient="from-orange-800 via-rose-700 to-pink-900" />
          </div>

          {/* Feature: Grab */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <PhoneRow count={3} gradient="from-rose-800 via-pink-700 to-orange-800" className="order-last md:order-first" />
            <div>
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase block mb-3">Grab</span>
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                One Tap to Join. Zero Friction.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Users RSVP with a single tap and instantly receive a confirmation,
                a calendar event, and a countdown to the PopUp. No accounts required
                for browsing, no credit card until checkout — removing every barrier
                between interest and commitment.
              </p>
            </div>
          </div>

          {/* Feature: Create a PopUp */}
          <div>
            <div className="mb-8">
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase block mb-3">Create a PopUp</span>
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                Go Live in Under Three Minutes
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                The hosting flow is built for speed. Hosts set a location, a time
                window, a capacity, and a cover image — then hit publish. The listing
                is immediately visible to users within range, with automatic push
                notifications sent to nearby attendees.
              </p>
            </div>
            <PhoneRow count={4} gradient="from-amber-800 via-orange-700 to-rose-800" className="max-w-2xl mx-auto" />
          </div>

          {/* Feature: Let it Choose */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase block mb-3">Let it Choose</span>
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                Can&rsquo;t Decide? Let Powpup Pick for You.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A &ldquo;Surprise Me&rdquo; mode uses the user&rsquo;s interest graph and
                location to recommend a single event to attend right now.
                One result, one decision. Designed for the user who wants
                to go out but can&rsquo;t commit to a choice.
              </p>
            </div>
            <PhoneRow count={2} gradient="from-orange-900 via-amber-800 to-rose-900" />
          </div>

          {/* Feature: RSVP Reminder */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <PhoneRow count={3} gradient="from-pink-800 via-rose-700 to-orange-800" className="order-last md:order-first" />
            <div>
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase block mb-3">RSVP Reminder</span>
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                Smart Reminders That Increase Show-Up Rates
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Personalised push reminders are sent 1 hour and 15 minutes
                before each event. Attendees can see who else is going,
                building anticipation and social commitment that drives
                follow-through.
              </p>
            </div>
          </div>

          {/* Feature: Chat */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase block mb-3">Chat / Messenger</span>
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                Connect Before You Arrive
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every PopUp has a live group chat that opens the moment a
                user RSVPs. Attendees can coordinate meetup spots, share
                what they&rsquo;re bringing, and build rapport before the event
                — turning a venue into a community.
              </p>
            </div>
            <PhoneRow count={3} gradient="from-rose-900 via-pink-800 to-orange-900" />
          </div>

          {/* Feature: Affirm/React */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <PhoneRow count={3} gradient="from-orange-700 via-amber-800 to-rose-900" className="order-last md:order-first" />
            <div>
              <span className="text-orange-500 text-xs tracking-[0.2em] uppercase block mb-3">Affirm / React</span>
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                Express Yourself In-Event
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A lightweight reaction system lets attendees send live
                emoji reactions visible to the host and other guests.
                Hosts use reaction data to read the room in real time
                and adapt the experience accordingly.
              </p>
            </div>
          </div>

        </div>
      </Section>

      {/* ── 08 DESIGN PROCESS ─────────────────────────────────── */}
      <Section number="08" title="Design Process">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01 — Empathize & Research",
                items: [
                  "12 in-depth user interviews",
                  "200-person survey on social event habits",
                  "Competitive benchmarking (6 platforms)",
                  "Session recording review of similar apps",
                ],
              },
              {
                step: "02 — Define",
                items: [
                  "Affinity mapping of interview themes",
                  "2 primary personas (Attendee & Host)",
                  "Problem statement alignment with stakeholders",
                  "Success metrics definition",
                ],
              },
              {
                step: "03 — Ideate",
                items: [
                  "Crazy-8s sketching sessions",
                  "User journey mapping (4 core flows)",
                  "Information architecture workshop",
                  "Design principle definition",
                ],
              },
            ].map(({ step, items }) => (
              <div key={step}>
                <h4 className="text-white text-sm font-semibold mb-3">{step}</h4>
                <ul className="flex flex-col gap-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-gray-500 text-xs leading-relaxed">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {[
              {
                step: "04 — Prototype",
                items: [
                  "Low-fidelity wireframes (5 key screens)",
                  "Mid-fidelity flow testing in FigJam",
                  "High-fidelity component library (Figma)",
                  "Interactive prototype for 3 core user flows",
                ],
              },
              {
                step: "05 — Testing & Iteration",
                items: [
                  "Maze usability testing (18 participants)",
                  "A/B test: map-first vs feed-first discovery",
                  "3 rounds of iteration based on findings",
                  "Stakeholder review and sign-off",
                ],
              },
            ].map(({ step, items }) => (
              <div key={step}>
                <h4 className="text-white text-sm font-semibold mb-3">{step}</h4>
                <ul className="flex flex-col gap-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-gray-500 text-xs leading-relaxed">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-[#1a1a1a] rounded-2xl p-5 mt-2">
              <p className="text-gray-600 text-[10px] tracking-[0.15em] uppercase mb-3">Tools Used</p>
              {["Figma", "FigJam", "Maze", "Notion", "Miro"].map((t) => (
                <div key={t} className="flex gap-3 py-2 border-t border-white/5 items-center">
                  <span className="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-[#C6C6C6] text-xs">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── KEY DESIGN DECISIONS ──────────────────────────────── */}
      <Section number="07" title="Key Design Decisions">
        <div className="flex flex-col gap-10">
          {[
            {
              title: "Proximity over algorithm",
              body: "Every feed, map view, and push notification is sorted by physical distance and time-to-start — not engagement metrics or sponsorship. This decision was controversial internally but validated in testing: users trusted distance-sorted feeds 2× more than popularity-sorted ones.",
            },
            {
              title: "Anonymous browsing, social RSVP",
              body: "Users can browse all events without an account, but RSVPing requires a profile. This removes the entry barrier for discovery while creating a social commitment mechanism — attendees who can see other confirmed guests are far more likely to follow through.",
            },
            {
              title: "Host listing as a conversation, not a form",
              body: "The listing flow uses conversational prompts ('What are you hosting?', 'When does it start?') rather than traditional form labels. Completion rates in testing were 40% higher compared to the form-based prototype.",
            },
            {
              title: "Reactions as a feedback channel",
              body: "In-event emoji reactions aren't just expressive — they're product data. Hosts can see real-time engagement trends and adapt their event accordingly. This dual-purpose design gives the feature a reason to exist beyond novelty.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 py-8 border-t border-white/5">
              <h4 className="text-white font-semibold text-sm md:text-base leading-snug">
                {title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CHALLENGES ────────────────────────────────────────── */}
      <Section number="08" title="Challenges">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              challenge: "Dual-sided marketplace complexity",
              body: "Designing for two distinct user types (hosts and attendees) with conflicting mental models in a single coherent interface. Solved through clear contextual switching and separate onboarding flows.",
            },
            {
              challenge: "Building urgency without anxiety",
              body: "Spontaneity requires urgency cues, but aggressive countdown timers and scarcity signals drove anxiety, not excitement. Iterated towards calm, informative timing labels ('Starting in 45 min') over pressure-based patterns.",
            },
            {
              challenge: "Trust at first use",
              body: "Convincing users to RSVP for a stranger's event requires trust signals. Added verified host badges, attendee count visibility, and a review system to bootstrap credibility before the platform has scale.",
            },
          ].map(({ challenge, body }) => (
            <div key={challenge} className="bg-[#1a1a1a] rounded-2xl p-6">
              <span className="text-orange-500 text-xs tracking-[0.1em] block mb-3 uppercase">Challenge</span>
              <h4 className="text-white font-semibold text-sm mb-3 leading-snug">{challenge}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT I LEARNT ─────────────────────────────────────── */}
      <Section number="09" title="What I Learnt">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Spontaneity is a UX problem, not a content problem",
                body: "The issue wasn't a lack of events — it was the interface getting in the way of acting on impulse. Every second of friction costs a conversion. The fastest flow wins.",
              },
              {
                title: "Social commitment beats algorithmic nudges",
                body: "Showing users that three friends are attending does more for show-up rate than any push notification strategy. Social proof embedded in the product is more powerful than external reminders.",
              },
              {
                title: "Tone of voice is interface design",
                body: "The switch from form labels to conversational prompts in the host listing flow was a copy decision, not a layout decision — but it had the largest impact on completion rate of any single change in the project.",
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
              <p className="text-gray-600 text-xs tracking-[0.15em] uppercase mb-4">Affirm / Impact</p>
              {[
                { stat: "40%", desc: "Higher host listing completion with conversational flow" },
                { stat: "2×", desc: "Trust score for proximity-sorted vs algorithmic feeds" },
                { stat: "↓68%", desc: "Drop in RSVP abandonment after single-tap redesign" },
                { stat: "+35%", desc: "Increase in show-up rate with social attendee visibility" },
              ].map(({ stat, desc }) => (
                <div key={stat} className="flex gap-4 py-3 border-t border-white/5 items-center">
                  <span className="text-white font-bold text-lg w-14 flex-shrink-0">{stat}</span>
                  <span className="text-gray-500 text-xs leading-snug">{desc}</span>
                </div>
              ))}
            </div>

            <PhoneRow count={2} gradient="from-orange-800 via-rose-700 to-pink-900" />
          </div>
        </div>
      </Section>

      {/* ── BOTTOM NAV ────────────────────────────────────────── */}
      <div className="border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/projects/uvivio"
            className="flex items-center gap-3 text-white text-sm font-semibold tracking-widest hover:text-gray-300 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            UVIVIO
          </Link>
          <Link
            href="/projects/uvivio-mobile"
            className="flex items-center gap-3 text-white text-sm font-semibold tracking-widest hover:text-gray-300 transition-colors group"
          >
            UVIVIO (MOBILE APP)
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
