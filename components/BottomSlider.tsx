import Image from "next/image";

const slides = Array.from({ length: 11 }, (_, index) => ({
  src: `/bottom-slider/slider-${index + 1}.png`,
  alt: `A moment from Blessing Damola Eyinla's life, photo ${index + 1}`,
}));

function SlideGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className={`flex shrink-0 gap-[clamp(12px,1.5vw,22px)] pr-[clamp(12px,1.5vw,22px)] ${duplicate ? "motion-reduce:hidden" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {slides.map((slide) => (
        <figure
          key={slide.src}
          className="group aspect-[4/5] w-[clamp(230px,25vw,400px)] shrink-0 overflow-hidden bg-[#0a0a0a] max-sm:w-[72vw]"
        >
          <Image
            src={slide.src}
            alt={duplicate ? "" : slide.alt}
            width={400}
            height={500}
            sizes="(max-width: 640px) 72vw, (max-width: 1024px) 38vw, 25vw"
            className="h-full w-full object-cover transition-transform duration-[260ms] ease-[var(--ease-out)] group-hover:scale-[1.025] motion-reduce:transition-opacity"
          />
        </figure>
      ))}
    </div>
  );
}

export default function BottomSlider() {
  return (
    <section
      className="overflow-hidden bg-black py-[clamp(32px,4vw,64px)]"
      aria-label="Personal photo gallery"
    >
      <div
        className="overflow-hidden motion-reduce:overflow-x-auto motion-reduce:[scrollbar-width:none] motion-reduce:[&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max will-change-transform animate-[works-scroll-left_56s_linear_infinite] motion-reduce:animate-none motion-reduce:transform-none motion-reduce:will-change-auto">
          <SlideGroup />
          <SlideGroup duplicate />
        </div>
      </div>
    </section>
  );
}
