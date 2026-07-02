import CaseStudyPage, {
  CaseStudyImage,
  CaseStudyNavigation,
  CaseStudyTextSection,
  CaseStudyTitle,
} from "@/components/projects/CaseStudyPage";

const metadata = [
  { label: "Role", value: "Product Designer" },
  { label: "Tools", value: "Figma" },
  { label: "Year", value: "2025" },
  { label: "Client", value: "PowpUp" },
];

const researchRows = [
  {
    scope: "12 people interviewed",
    feedback: ["80% wished for more spontaneous, real-world hangouts."],
    outcome: [
      "Introduced a real-time Explore feed showing active PowpUps and available spaces nearby.",
      "Added mood-based filters for faster emotional alignment and simpler decisions.",
    ],
  },
  {
    scope: "Hosts and space owners",
    feedback: [
      "65% had unused spaces they would consider sharing, but listing felt stressful.",
    ],
    outcome: [
      "Created a dedicated List Your Space flow separate from event creation.",
      "Added AI support for event names, descriptions, and vibe tags.",
    ],
  },
];

type PowpupFeature = {
  title: string;
  paragraphs: string[];
  label: string;
  imageSrc?: string;
};

const features: PowpupFeature[] = [
  {
    title: "Onboarding",
    paragraphs: [
      "From the moment a new user downloads PowpUp, they are welcomed into an experience that feels fast, familiar, and personal. After a quick sign-up, the app introduces users to vibe tags, preferred interests, and preferred times.",
      "Based on these inputs, the app tailors suggestions and notifications so users see PowpUps and spaces that match their lifestyle.",
    ],
    label: "Onboarding",
    
    imageSrc: "/svg/p-onboard.svg",
  },
  {
    title: "Feed",
    paragraphs: [
      "The main feed is dynamic, constantly showing nearby PowpUps or spaces that align with the user’s selected mood, availability, and social interests.",
      "Cards are easy to preview—users can open details, message the host, or RSVP instantly, keeping discovery light and spontaneous.",
    ],
    label: "Feed",
       imageSrc: "/svg/p-feed.svg",

  },
  {
    title: "Create a PowpUp",
    paragraphs: [
      "Creating a PowpUp is intentionally simple and expressive. Users begin by selecting a mood and naming their event, with the built-in AI assistant available to generate a starting point.",
      "They choose a date and time, set visibility, add a short description and rules, then publish. The goal is to make organizing something feel more like posting a story than planning an event.",
    ],
    label: "Create a PowpUp",
       imageSrc: "/svg/p-create.svg",

  },
  {
    title: "List a Space",
    paragraphs: [
      "Users with an apartment, rooftop, studio, or backyard worth sharing can list their space in a few guided steps.",
      "They add photos, a description, capacity, rules, availability, and pricing. Inclusive defaults make it clear that users do not need a large or formal venue to host.",
    ],
    label: "List a Space",
    imageSrc: "/svg/p-list.svg",
  },
  {
    title: "In App Messaging",
    paragraphs: [
      "Once someone joins a PowpUp or books a space, they are added to a dedicated chat where attendees can coordinate, ask questions, and receive last-minute updates.",
      "Users can also contact space hosts before booking, keeping communication out of scattered direct messages and inside the product experience.",
    ],
    label: "In-app messaging",
    imageSrc: "/svg/p-message.svg",
  },
  {
    title: "AI Powered Assistant",
    paragraphs: [
      "Whether a user is creating a PowpUp or listing a space, the AI assistant acts as a brainstorming partner. It can suggest titles, descriptions, discoverability tags, and event rules.",
      "Suggestions adapt to mood, location, and category, helping users move from idea to publish-ready in seconds without overwhelming the core flow.",
    ],
    label: "AI assistant",
    imageSrc: "/svg/p-assitant.svg",
  },
];

const processSteps = [
  {
    title: "1. Research & Insights",
    items: [
      "User interviews",
      "Competitive analysis",
      "Pain-point synthesis",
    ],
  },
  {
    title: "2. User Journey",
    items: [
      "Mapped the attendee and host journeys",
      "Identified high-friction decision points",
      "Defined the smallest viable actions",
    ],
  },
  {
    title: "3. Wireframing",
    items: [
      "Low-fidelity concepts",
      "Information architecture",
      "Core task flows",
    ],
  },
  {
    title: "4. UI Design",
    items: [
      "Visual language and component system",
      "Accessible interaction states",
      "Responsive prototypes",
    ],
  },
  {
    title: "5. Usability Testing",
    items: [
      "Task-based prototype testing",
      "Iteration from observed behavior",
      "Final interaction refinements",
    ],
  },
];

const designDecisions = [
  {
    title: "One Core Purpose, Not Add-ons",
    body: "Every surface reinforces spontaneous real-world connection. Features that did not directly improve discovery, hosting, or joining were removed from the primary flow.",
  },
  {
    title: "Powerful Features Without Cognitive Overload",
    body: "Complex host and attendee tasks are progressively disclosed. Each screen asks for one clear decision, while the AI assistant remains supportive rather than dominant.",
  },
  {
    title: "Designed Around Real-Life Spontaneity",
    body: "Time, proximity, mood, and availability shape discovery before popularity metrics. This keeps the product focused on what a user can actually do right now.",
  },
];

const challenges = [
  {
    title: "Balancing Two User Types",
    body: "Hosts and attendees have different goals, so the experience needed distinct flows without feeling like two separate products.",
  },
  {
    title: "Building Urgency Without Pressure",
    body: "The interface had to communicate that events were time-sensitive while avoiding scarcity patterns that create anxiety.",
  },
  {
    title: "Making AI Feel Optional",
    body: "AI needed to remove blank-page friction without interrupting users who already knew exactly what they wanted to create.",
  },
  {
    title: "Trust at First Use",
    body: "Clear host details, attendee visibility, and practical event information were essential for helping people commit to unfamiliar spaces and groups.",
  },
];

const learnings = [
  {
    title: "Designing for Emotion, Not Just Tasks",
    body: "Spontaneous decisions are shaped by confidence and mood. Clear, reassuring language mattered as much as reducing the number of taps.",
  },
  {
    title: "Feature Consolidation Creates More Value",
    body: "Combining discovery, hosting, and communication made the experience feel coherent and removed the need to coordinate across several products.",
  },
  {
    title: "Small Moments of Context Reduce Friction",
    body: "Showing who is attending, when an event begins, and what to expect gave users enough certainty to act quickly.",
  },
  {
    title: "Visual Design Must Support Behavior",
    body: "The interface works best when hierarchy directs users toward one immediate action instead of presenting every possible option at once.",
  },
  {
    title: "The Best AI Feels Like Helpful Guidance",
    body: "AI was most effective when it accelerated an existing intent, not when it attempted to take ownership of the experience.",
  },
];

export default function PowpupCase() {
  return (
    <CaseStudyPage
      hero={{
        title: (
          <>
              PowpUp: Create
              <br />
              Spontaneous Events and
              <br />
              Flexible Space Hosting
          </>
        ),
        description: (
          <>
              PowpUp is a mobile app that allows users to create or join
              spontaneous events (called “PowpUps”) and discover bookable
              spaces instantly. It&apos;s designed for people who want real-life
              experiences without the pressure of extensive planning.
          </>
        ),
        metadata,
        titleClassName:
          "max-w-[1280px] text-[clamp(2.6rem,6.7vw,6rem)] font-normal uppercase leading-[1.25] tracking-[-0.045em] text-white",
        descriptionClassName:
          "mt-10 max-w-[64rem] text-sm font-semibold leading-[1.35] text-[#D1D5DB] sm:text-base md:mt-12 md:text-xl",
        media: (
          <CaseStudyImage
            label="Hero"
            src="/svg/p-hero.svg"
            alt="PowpUp mobile application hero screens"
            aspect="aspect-[1280/521]"
            tone="purple"
          />
        ),
      }}
    >

      <CaseStudyTextSection
        number="01"
        title="Overview"
        after={
          <CaseStudyImage
            label="Overview"
            alt="PowpUp mobile application overview screens"
            aspect="aspect-[1280/800]"
            tone="neutral-dark"
              src="/svg/p-overview.svg"

          />
        }
      >
        <div className="space-y-5">
          <p>
            PowpUp is a mobile app that allows users to create or join
            spontaneous events and discover bookable spaces instantly.
          </p>
          <p>
            The product brings event discovery and flexible space hosting into
            one experience, helping users move from “I want to do something” to
            a real plan with far less friction.
          </p>
        </div>
      </CaseStudyTextSection>

      <CaseStudyTextSection number="02" title="The Problem">
        <div className="space-y-5">
          <p>
            Creating small-scale events and finding suitable spaces is
            unnecessarily difficult. From research and observation:
          </p>
          <ul className="list-disc space-y-0 pl-6">
            <li>Event creation tools are often complex and time-consuming</li>
            <li>People have ideas but do not know how to structure them</li>
            <li>Personal spaces are difficult to list or monetize simply</li>
            <li>Hosts struggle with visibility and audience reach</li>
            <li>Attendees, logistics, and payments are fragmented</li>
          </ul>
        </div>
      </CaseStudyTextSection>

      <CaseStudyTextSection number="03" title="Solution">
        <div className="space-y-5">
          <p>PowpUp introduces a dual-sided platform:</p>
          <ol className="list-decimal pl-6">
            <li>PowpUps — create, explore, and attend events</li>
            <li>Spaces — list and book spaces for those events</li>
          </ol>
          <p>
            Both journeys are supported by an AI assistant that helps users
            generate structured, high-quality listings instantly.
          </p>
        </div>
      </CaseStudyTextSection>

      <CaseStudyTextSection number="04" title="Design Goals & Objectives">
        <div>
          <p>Design a platform that:</p>
          <ul className="mt-5 list-disc pl-6">
            <li>Enables users to create or join events in real time</li>
            <li>Makes listing and booking spaces feel effortless</li>
            <li>Matches people by mood, interest, and location</li>
            <li>Reduces planning stress through AI-powered suggestions</li>
          </ul>
        </div>
      </CaseStudyTextSection>

      <CaseStudyTextSection
        number="05"
        title="Research & Insights"
        after={
          <div className="overflow-x-auto border-y border-white/20">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/30">
                  {[
                    "Scope",
                    "Feedback",
                    "How it informed PowpUp",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-6 py-7 font-semibold text-white first:w-1/4"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {researchRows.map(({ scope, feedback, outcome }) => (
                  <tr key={scope} className="border-b border-white/20 last:border-0">
                    <td className="px-6 py-7 align-top font-semibold text-[#D1D5DB]">
                      {scope}
                    </td>
                    <td className="px-6 py-7 align-top text-[#9CA3AF]">
                      <ul className="list-disc space-y-3 pl-5">
                        {feedback.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-7 align-top text-[#9CA3AF]">
                      <ul className="list-disc space-y-3 pl-5">
                        {outcome.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      >
        <p>
          I conducted interviews with young professionals and students who
          frequently experience fear of missing out or dislike rigid planning.
        </p>
      </CaseStudyTextSection>

      <CaseStudyTextSection
        number="06"
        title="Competitive Analysis"
        after={
          <CaseStudyImage
            label="Competitive analysis"
            alt="PowpUp competitive analysis matrix"
            aspect="aspect-[1280/520]"
            tone="neutral-dark"
              src="/svg/p-competition.svg"

          />
        }
      >
        <div className="space-y-5">
          <p>
            PowpUp is not just an event or rental app; it is a lifestyle
            platform for spontaneous connection and casual space-sharing.
          </p>
          <p>
            It sits at the intersection of Airbnb, Meetup, Instagram, and
            Eventbrite while reducing complexity, pressure, and planning
            overload.
          </p>
        </div>
      </CaseStudyTextSection>

      <section className="bg-black py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-0">
          <CaseStudyTitle number="07" title="Key Features" />
          <div className="mt-12 space-y-16 md:space-y-20">
            {features.map(({ title, paragraphs, label, imageSrc }) => (
              <article key={title}>
                <div className="mb-7 max-w-[72rem] text-[15px] font-semibold leading-[1.35] text-[#9CA3AF] md:text-base">
                  <h3 className="mb-3 uppercase text-white">{title}</h3>
                  <div className="space-y-3">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <CaseStudyImage
                  label={label}
                  alt={`PowpUp ${label.toLowerCase()} interface screens`}
                  src={imageSrc}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyTextSection number="06" title="Design Process">
        <div className="space-y-7">
          {processSteps.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-white">{title}</h3>
              <ul className="mt-1 list-disc pl-6">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CaseStudyTextSection>

      <CaseStudyTextSection number="07" title="Key Design Decisions">
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

      <CaseStudyTextSection number="08" title="Challenges">
        <ol className="space-y-7">
          {challenges.map(({ title, body }, index) => (
            <li key={title}>
              <h3 className="text-white">
                {index + 1}. {title}
              </h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </CaseStudyTextSection>

      <CaseStudyTextSection number="09" title="What I Learnt">
        <ol className="space-y-7">
          {learnings.map(({ title, body }, index) => (
            <li key={title}>
              <h3 className="text-white">
                {index + 1}. {title}
              </h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </CaseStudyTextSection>

      <CaseStudyNavigation
        previous={{ href: "/projects/uvivio", label: "Uvivio" }}
        next={{ href: "/projects/uvivio-mobile", label: "Uvivio (Mobile App)" }}
      />
    </CaseStudyPage>
  );
}
