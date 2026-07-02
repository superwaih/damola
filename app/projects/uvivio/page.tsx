import CaseStudyPage, {
  CaseStudyNavigation,
  CaseStudyTextSection,
} from "@/components/projects/CaseStudyPage";
import Image from "next/image";

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

const metadata = [
  { label: "Role", value: "Product Designer" },
  { label: "Tools", value: "Figma" },
  { label: "Year", value: "2026" },
  { label: "Client", value: "Techsity" },
];

/* ── Page ─────────────────────────────────────────────────────── */
export default function UvivioCase() {
  return (
    <CaseStudyPage
      className="min-h-screen bg-[#000000]"
      rootElement="div"
      hero={{
        variant: "compact",
        title: (
          <>
              UVIVIO: AI POWERED
              <br />
              LEARNING PLATFORM
          </>
        ),
        description: (
          <>
              Architecting a spatial interface for the next generation of ambient
              computing. A study on depth, motion, and tactile digital surfaces.
          </>
        ),
        metadata,
        titleClassName:
          "mb-10 max-w-5xl text-4xl font-normal uppercase leading-[1.18] text-white sm:text-5xl md:text-7xl lg:text-[5.75rem] xl:text-[96px]",
        descriptionClassName:
          "mb-16 max-w-[44rem] text-sm leading-snug text-[#9CA3AF] sm:text-base md:text-xl",
        media: (
          <div className="flex h-64 w-full items-center justify-center gap-4 overflow-hidden rounded-2xl p-8 md:h-[521px]">
              <Image
                width={1280}
                height={522}
                className="h-full w-full object-contain object-center"
                src="/images/uvi.svg"
                alt="Uvivio product interface"
              />
          </div>
        ),
      }}
    >

      {/* ── 01 OVERVIEW ───────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-black pt-14 md:pt-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 md:grid-cols-[1fr_minmax(31rem,41rem)] md:gap-16 md:px-0">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[18px] md:text-3xl font-black leading-none tracking-[-0.03em] text-[#8F96A3] md:text-[2.5rem]">
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
      <CaseStudyTextSection number="02" title="The Problem" variant="compact">
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
      </CaseStudyTextSection>

      {/* ── 03 SOLUTION ───────────────────────────────────────── */}
      <CaseStudyTextSection number="03" title="Solution" variant="compact">
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
      </CaseStudyTextSection>

      {/* ── 04 GOALS ──────────────────────────────────────────── */}
      <CaseStudyTextSection number="04" title="Goals" variant="compact">
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
      </CaseStudyTextSection>

      {/* ── 05 KEY FEATURES ───────────────────────────────────── */}
      <CaseStudyTextSection
        number="05"
        title="Key Features"
        variant="compact"
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
      </CaseStudyTextSection>



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
      <CaseStudyTextSection number="06" title="Design Decisions" variant="compact">
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
      </CaseStudyTextSection>

      {/* ── 07 EXPECTED IMPACT ────────────────────────────────── */}
      <CaseStudyTextSection number="07" title="Expected Impact" variant="compact">
        <div>
          <p>Here are some impacts that the platform is expected to make;</p>
          <ul className="mt-6 list-disc pl-7">
            <li>Improved user confidence and clarity</li>
            <li>Faster time-to-job-readiness</li>
            <li>Increased learning completion rate</li>
            <li>Reduced drop off during career transition</li>
          </ul>
        </div>
      </CaseStudyTextSection>

      {/* ── 08 WHAT I LEARNT ──────────────────────────────────── */}
      <CaseStudyTextSection number="08" title="What I Learnt" variant="compact">
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
      </CaseStudyTextSection>
 
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
      <CaseStudyNavigation
        next={{ href: "/projects/powpup", label: "POWPUP" }}
      />
    </CaseStudyPage>
  );
}
