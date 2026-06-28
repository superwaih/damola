import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const leftSlides: Slide[] = [
  {
    src: "/slides/left-1.png",
    alt: "Healthcare request tracking dashboard",
    width: 836,
    height: 414,
  },
  {
    src: "/slides/left-2.png",
    alt: "Travel and events mobile product screens",
    width: 2508,
    height: 1242,
  },
  {
    src: "/slides/left-3.png",
    alt: "Product design case study interface",
    width: 2508,
    height: 1242,
  },
  {
    src: "/slides/left-4.png",
    alt: "Digital product dashboard interface",
    width: 2508,
    height: 1242,
  },
  {
    src: "/slides/left-5.png",
    alt: "Web application product experience",
    width: 836,
    height: 414,
  },
];

const rightSlides: Slide[] = [
  {
    src: "/slides/right-1.png",
    alt: "Billing and subscription dashboard",
    width: 1578,
    height: 1242,
  },
  {
    src: "/slides/right-2.png",
    alt: "Medical device catalogue dashboard",
    width: 836,
    height: 414,
  },
  {
    src: "/slides/right-3.png",
    alt: "Healthcare product interface",
    width: 2508,
    height: 1242,
  },
  {
    src: "/slides/right-4.png",
    alt: "Healthcare operations dashboard",
    width: 2508,
    height: 1242,
  },
  {
    src: "/slides/right-5.png",
    alt: "Product dashboard design",
    width: 836,
    height: 414,
  },
];

function SlideGroup({ slides, duplicate = false }: { slides: Slide[]; duplicate?: boolean }) {
  return (
    <div className="works-marquee__group" aria-hidden={duplicate || undefined}>
      {slides.map((slide) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={duplicate ? "" : slide.alt}
          width={slide.width}
          height={slide.height}
          sizes="(max-width: 640px) 364px, (max-width: 1024px) 545px, 836px"
          className="works-marquee__image"
        />
      ))}
    </div>
  );
}

function MarqueeRow({ slides, direction }: { slides: Slide[]; direction: "left" | "right" }) {
  return (
    <div className="works-marquee__viewport">
      <div className={`works-marquee__track works-marquee__track--${direction}`}>
        <SlideGroup slides={slides} />
        <SlideGroup slides={slides} duplicate />
      </div>
    </div>
  );
}

export default function SelectedWorksMarquee() {
  return (
    <section className="works-marquee" aria-labelledby="selected-works-title">
      <h2 id="selected-works-title" className="sr-only">
        Selected works
      </h2>
      <MarqueeRow slides={leftSlides} direction="left" />
      <MarqueeRow slides={rightSlides} direction="right" />
    </section>
  );
}
