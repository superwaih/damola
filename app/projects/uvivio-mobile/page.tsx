import Navbar from "@/components/Navbar";
import { HeroEntrance, MockupReveal } from "@/components/ui/CaseStudyMotion";
import Image from "next/image";
import Link from "next/link";

type ImageTone = "blue" | "silver" | "dark";

type CaseStudyImageProps = {
  alt: string;
  label: string;
  src?: string;
  aspect?: string;
  tone?: ImageTone;
};

const imageTones: Record<ImageTone, string> = {
  blue:
    "bg-[radial-gradient(circle_at_70%_35%,rgba(74,144,226,0.7),transparent_26%),linear-gradient(135deg,#030711_10%,#071a38_55%,#0a4480)]",
  silver:
    "bg-[radial-gradient(circle_at_74%_48%,rgba(255,255,255,0.98),transparent_14%),linear-gradient(125deg,#263737,#86918f_48%,#d8dad7)]",
  dark: "bg-[linear-gradient(135deg,#030712,#07152f_50%,#101d4d)]",
};

function CaseStudyImage({
  alt,
  label,
  src,
  aspect = "aspect-[2/1]",
  tone = "silver",
}: CaseStudyImageProps) {
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

function StudyTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
      <span className="font-mono text-[2rem] font-black leading-none tracking-[0.08em] text-[#9CA3AF] md:text-[2.25rem]">
        {number}
      </span>
      <h2 className="text-[2rem] font-black uppercase leading-none tracking-[0.14em] text-white md:text-[2.25rem]">
        / {title}
      </h2>
    </div>
  );
}

function TextSection({
  number,
  title,
  children,
  after,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  after?: React.ReactNode;
}) {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-0">
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(31rem,41rem)] md:gap-16">
          <StudyTitle number={number} title={title} />
          <div className="text-[15px] font-semibold leading-[1.35] text-[#9CA3AF] md:text-base">
            {children}
          </div>
        </div>
        {after && <div className="mt-10 md:mt-12">{after}</div>}
      </div>
    </section>
  );
}

type MobileFeature = {
  groupTitle?: string;
  title: string;
  description: string;
  bullets?: string[];
  imageSrc?: string;
};

const metadata = [
  { label: "Role", value: "Product Designer" },
  { label: "Tools", value: "Figma" },
  { label: "Year", value: "2025" },
  { label: "Client", value: "Techcity" },
];

const features: MobileFeature[] = [
  {
    groupTitle: "The Mentee",
    title: "Mentor Discovery and Booking",
    description:
      "Learners can find the right mentor and move from discovery to a confirmed session without leaving the app.",
    bullets: [
      "Search for mentors by skill, industry, or expertise",
      "View detailed mentor profiles",
      "Book sessions based on availability",
    ],
    imageSrc: "/svg/u-mentee.svg",
  },
  {
    title: "Course Exploration",
    description:
      "Learners can browse and enroll in courses, then learn at their own pace through a clear mobile-first catalog.",
    imageSrc: "/svg/u-course.svg",
  },
  {
    title: "Mentor Profile",
    description:
      "Mentees can review a mentor’s skills, background, expertise, courses, and reviews before making a booking decision.",
    imageSrc: "/svg/um-mentor.svg",
  },
  {
    title: "Appointments",
    description:
      "A structured session list makes it easy to manage upcoming, pending, and completed appointments.",
    imageSrc: "/svg/um-appointment.svg",
  },
  {
    title: "Messaging",
    description:
      "Users can have one-on-one conversations with mentors through direct messaging without leaving the learning experience.",
    imageSrc: "/svg/u-messaging.svg",
  },
  {
    title: "Alfred AI",
    description:
      "Learners can request reading summaries, find a mentor, receive course recommendations, and get useful platform guidance.",
    imageSrc: "/svg/u-alfred.svg",
  },
  {
    groupTitle: "The Mentor",
    title: "Mentor Profile",
    description:
      "The mentor profile is the foundation of trust on Uvivio, showcasing expertise, experience, services, and areas of specialization.",
    imageSrc: "/svg/um-mentor.svg",
  },
  {
    title: "Appointments Management",
    description:
      "Mentors manage sessions through a centralized appointment system with clear upcoming, pending, and completed states.",
    imageSrc: "/svg/um-appointment.svg",
  },
  {
    title: "Wallet",
    description:
      "A dedicated wallet gives mentors a clear view of earnings, payouts, and transaction history while keeping financial activity transparent.",
    imageSrc: "/svg/um-mobile.svg",
  },
];

const designDecisions = [
  {
    title: "Designing Mobile for Speed and Clarity, Not Complexity",
    body: "Core actions are surfaced quickly, with focused screens and progressive disclosure preventing the product from feeling dense.",
  },
  {
    title: "Prioritizing Consistency Across Core Flows",
    body: "Reusable interaction patterns make discovery, booking, messaging, course exploration, and appointment management feel like one system.",
  },
  {
    title: "Guided Flow Instead of Exploration",
    body: "The interface narrows decisions into clear next steps so users spend less time figuring out the product and more time making progress.",
  },
  {
    title: "Minimizing Dependencies on External Tools",
    body: "Communication, scheduling, learning, and payments stay within Uvivio to reduce context switching and fragmented experiences.",
  },
  {
    title: "Designing for Trust Through Transparency",
    body: "Mentor credentials, availability, appointment states, reviews, earnings, and transaction details remain visible when users need them.",
  },
];

const expectedImpact = [
  {
    title: "Higher Conversion from Discovery to Action",
    body: "Users can move directly from finding a mentor or course to booking or enrollment with fewer interruptions.",
  },
  {
    title: "Increased Mentor Retention",
    body: "Structured appointments, messaging, and transparent earnings give mentors stronger reasons to remain active on the platform.",
  },
  {
    title: "Stronger User Trust",
    body: "Clear profiles, reviews, availability, and visible progress contribute to a more reliable and trustworthy experience.",
  },
  {
    title: "More Consistent User Engagement",
    body: "Guided learning, communication, and booking tools make users more likely to return and continue making progress.",
  },
];

export default function UvivioMobileCase() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <header className="px-6 pb-0 pt-40 md:px-8 md:pt-48">
        <div className="mx-auto max-w-[1280px]">
          <HeroEntrance className="flex flex-col items-center text-center">
            <h1 className="text-[clamp(3rem,7vw,6rem)] font-normal uppercase leading-[1.15] tracking-[-0.045em] text-white">
              Uvivio V1
              <br />
              (Mobile App)
            </h1>

            <p className="mt-10 max-w-[48rem] text-sm font-semibold leading-[1.35] text-[#D1D5DB] sm:text-base md:mt-12 md:text-xl">
              A smarter, human-centered learning experience through mentorship.
            </p>

            <div className="mt-12 w-full max-w-[896px] border-t border-white/70 pt-8 md:mt-14">
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 text-left md:grid-cols-4">
                {metadata.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </HeroEntrance>

          <MockupReveal className="mt-16" delay={0.16}>
            <CaseStudyImage
              label="Hero"
              alt="Uvivio V1 mobile application hero screens"
              aspect="aspect-[1280/521]"
              tone="blue"
              src="/svg/u-hero.svg"

            />
          </MockupReveal>
        </div>
      </header>

      <TextSection number="01" title="Overview">
        <div className="space-y-5">
          <p>
            Uvivio V1 is a mobile-first learning platform that blends
            structured education with human mentorship.
          </p>
          <p>
            Unlike traditional learning platforms, Uvivio focuses not only on
            consuming content but on connecting learners directly with mentors
            for guidance, accountability, and real-world expertise.
          </p>
          <p>
            This version represents the first full mobile release, combining
            learning discovery, mentorship, and support around core user needs.
          </p>
        </div>
      </TextSection>

      <div className="mx-auto max-w-[1280px]">
        <MockupReveal className="mt-16" delay={0.16}>
          <CaseStudyImage
            label="Hero"
            alt="Uvivio V1 mobile application hero screens"
                         aspect="aspect-[1280/721]"

            tone="blue"
            src="/svg/u-overview.svg"

          />
        </MockupReveal>
      </div>

      <TextSection number="02" title="The Problem">
        <div className="space-y-5">
          <p>
            Most online learning platforms fall into one critical trap: content
            without direction.
          </p>
          <p>Learners often face:</p>
          <ul className="list-disc pl-6">
            <li>Courses they start and never finish</li>
            <li>No clear path from learning to real-world application</li>
            <li>No real-time access to experienced human experts</li>
            <li>Fragmented and unstructured mentorship experiences</li>
          </ul>
          <p>
            Learning is not only about content—it is about guidance, clarity,
            and feedback.
          </p>
        </div>
      </TextSection>

      <TextSection number="03" title="Goals">
        <div>
          <p>Design a mobile platform that:</p>
          <ul className="mt-5 list-disc pl-6">
            <li>Combines learning and mentorship in one place</li>
            <li>Gives users a clear and structured journey</li>
            <li>Supports courses alongside human guidance</li>
            <li>Enables real-time communication</li>
            <li>Reduces friction in accessing support</li>
          </ul>
        </div>
      </TextSection>

      <TextSection number="04" title="Solution">
        <div className="space-y-5">
          <p>
            Uvivio V1 was designed as a focused, mentorship-driven learning
            platform that combines structured education with human support—all
            within a simple, mobile-first experience.
          </p>
          <p>
            Instead of asking users to figure things out alone, the platform
            connects learners with mentors, provides guided learning paths, and
            enables real-time support.
          </p>
        </div>
      </TextSection>

      <section className="bg-black py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-0">
          <StudyTitle number="05" title="Key Features" />
          <p className="mt-8 max-w-[41rem] text-[15px] font-semibold leading-[1.35] text-[#9CA3AF] md:ml-auto md:text-base">
            The key features are organized around the two journeys at the heart
            of Uvivio: the mentee and the mentor.
          </p>

          <div className="mt-12 space-y-16 md:space-y-20">
            {features.map(
              ({ groupTitle, title, description, bullets, imageSrc }) => (
                <article key={`${groupTitle ?? "feature"}-${title}`}>
                  {groupTitle && (
                    <h3 className="mb-8 text-lg font-black uppercase tracking-[0.08em] text-white">
                      {groupTitle}
                    </h3>
                  )}
                  <div className="mb-7 max-w-[72rem] text-[15px] font-semibold leading-[1.35] text-[#9CA3AF] md:text-base">
                    <h4 className="mb-2 text-white">{title}</h4>
                    <p>{description}</p>
                    {bullets && (
                      <ul className="mt-2 list-disc pl-6">
                        {bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <CaseStudyImage
                    label={title}
                    alt={`Uvivio mobile ${title.toLowerCase()} interface screens`}
                    src={imageSrc}
                  />
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <TextSection number="06" title="Design Decisions">
        <ol className="space-y-7">
          {designDecisions.map(({ title, body }, index) => (
            <li key={title}>
              <h3 className="text-white">
                {index + 1}. {title}
              </h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </TextSection>

      <TextSection number="07" title="Expected Impact">
        <ol className="space-y-7">
          {expectedImpact.map(({ title, body }, index) => (
            <li key={title}>
              <h3 className="text-white">
                {index + 1}. {title}
              </h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </TextSection>

      <TextSection number="08" title="What I Learnt">
        <div className="space-y-5">
          <p>
            Designing Uvivio provided valuable insights into building a
            structured, two-sided marketplace for mentorship and learning.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Visibility drives accountability—users engage more when progress
              and appointment states are clear
            </li>
            <li>
              AI is most effective as a support tool, not a replacement for
              user control
            </li>
            <li>
              Trust is not assumed; it must be designed through features and
              interactions
            </li>
          </ul>
        </div>
      </TextSection>

      <section className="bg-black py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-0">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
            Dark Mode Mockups
          </p>
          <CaseStudyImage
            label="Dark mode mockups"
            alt="Uvivio mobile dark mode interface mockups"
            aspect="aspect-[1280/640]"
            tone="dark"
            src="/svg/um-dark.svg"
          />
        </div>
      </section>

      <nav aria-label="Case study navigation" className="border-t border-white/30">
        <Link
          href="/projects/powpup"
          className="flex min-h-40 items-end px-6 py-8 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-none md:px-12"
        >
          <span className="mr-3">←</span>
          Powpup
        </Link>
      </nav>
    </main>
  );
}
