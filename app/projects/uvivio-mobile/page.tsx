import CaseStudyPage, {
  CaseStudyImage,
  CaseStudyNavigation,
  CaseStudyTextSection,
  CaseStudyTitle,
} from "@/components/projects/CaseStudyPage";
import { MockupReveal } from "@/components/ui/CaseStudyMotion";

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
    <CaseStudyPage
      hero={{
        title: (
          <>
              Uvivio V1
              <br />
              (Mobile App)
          </>
        ),
        description: (
          <>
              A smarter, human-centered learning experience through mentorship.
          </>
        ),
        metadata,
        titleClassName:
          "text-[clamp(3rem,7vw,6rem)] font-normal uppercase leading-[1.15] tracking-[-0.045em] text-white",
        descriptionClassName:
          "mt-10 max-w-[48rem] text-sm font-semibold leading-[1.35] text-[#D1D5DB] sm:text-base md:mt-12 md:text-xl",
        media: (
          <CaseStudyImage
            label="Hero"
            alt="Uvivio V1 mobile application hero screens"
            aspect="aspect-[1280/521]"
            tone="blue"
            src="/svg/u-hero.svg"
          />
        ),
      }}
    >

      <CaseStudyTextSection number="01" title="Overview">
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
      </CaseStudyTextSection>

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

      <CaseStudyTextSection number="02" title="The Problem">
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
      </CaseStudyTextSection>

      <CaseStudyTextSection number="03" title="Goals">
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
      </CaseStudyTextSection>

      <CaseStudyTextSection number="04" title="Solution">
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
      </CaseStudyTextSection>

      <section className="bg-black py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-0">
          <CaseStudyTitle number="05" title="Key Features" />
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

      <CaseStudyTextSection number="06" title="Design Decisions">
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
      </CaseStudyTextSection>

      <CaseStudyTextSection number="07" title="Expected Impact">
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
      </CaseStudyTextSection>

      <CaseStudyTextSection number="08" title="What I Learnt">
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
      </CaseStudyTextSection>

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

      <CaseStudyNavigation
        previous={{ href: "/projects/powpup", label: "Powpup" }}
        mobileNext={{ href: "/projects/uvivio", label: "Uvivio" }}
      />
    </CaseStudyPage>
  );
}
