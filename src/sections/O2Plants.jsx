import Button from "../components/common/Button";
import { images } from "../assets/images";

const O2Plants = () => {
  return (
    <section
      id="o2-plants"
      aria-labelledby="o2-heading"
      className="bg-ink px-6 py-16 sm:px-10 lg:px-0 lg:pb-[402px] lg:pt-0"
    >
      <div className="mx-auto max-w-[1728px]">
        {/* Centered section title "Our Best o2" — exact Figma: 698,5637, font Inter/600/55px,
            flanked by quote-style flourishes (Vector 3 / Vector 4) */}
        <div className="flex items-center justify-center gap-8">
          <svg width="69" height="69" viewBox="0 0 69 69" fill="none" stroke="white" strokeWidth="2" className="opacity-60" aria-hidden="true">
            <path d="M20 14C12 18 8 28 8 40c0 10 6 18 16 18s14-8 14-17c0-8-5-14-13-14-1 0-3 0-4 1 1-9 8-17 17-21z" />
          </svg>
          <h2
            id="o2-heading"
            className="text-center font-sans font-semibold text-white text-[28px] sm:text-[40px] lg:text-[55px] lg:leading-[66.5625px]"
          >
            Our Best o2
          </h2>
          <svg width="69" height="69" viewBox="0 0 69 69" fill="none" stroke="white" strokeWidth="2" className="scale-x-[-1] opacity-60" aria-hidden="true">
            <path d="M20 14C12 18 8 28 8 40c0 10 6 18 16 18s14-8 14-17c0-8-5-14-13-14-1 0-3 0-4 1 1-9 8-17 17-21z" />
          </svg>
        </div>

        {/* Main glass card — exact Figma: Rectangle 9, 1600x755, radius 92px */}
        <div className="glass-card relative mt-16 flex flex-col items-center gap-10 rounded-[50px] p-8 sm:rounded-[70px] lg:ml-[88px] lg:mt-[263px] lg:h-[755px] lg:w-[1600px] lg:flex-row lg:items-start lg:gap-0 lg:rounded-[92px] lg:p-0">
          {/* Image bleeds above/left of the card — exact Figma: 877x877, positioned to overflow the card's top edge */}
          <div className="w-full lg:absolute lg:left-[-78px] lg:top-[-124px] lg:w-[877px]">
            <img
              src={images.o2Plant}
              alt="Collection of small oxygen-producing indoor plants"
              className="mx-auto h-auto w-full max-w-[500px] object-contain drop-shadow-2xl lg:h-[877px] lg:max-w-none"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-6 px-4 lg:absolute lg:left-[808px] lg:top-[135px] lg:w-[748px] lg:gap-0 lg:px-0">
            <h3 className="font-sans font-semibold text-white/75 text-[26px] leading-tight sm:text-[32px] lg:max-w-[739px] lg:text-[38px] lg:leading-[45.99px]">
              We Have Small And Best O2 Plants Collections
            </h3>
            <p className="mt-6 font-sans font-semibold text-white/75 text-[18px] leading-snug lg:mt-[42px] lg:max-w-[748px] lg:text-[28px] lg:leading-[33.886px]">
              Oxygen-producing plants, often referred to as "O2 plants," are those that
              release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            <p className="mt-6 font-sans font-semibold text-white/75 text-[18px] leading-snug lg:mt-[42px] lg:max-w-[748px] lg:text-[28px] lg:leading-[33.886px]">
              Many plants can help filter out pollutants and toxins from the air, such as
              formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and
              healthier to breathe.
            </p>

            <div className="mt-2 flex w-full items-center justify-between">
              <Button variant="outline" className="opacity-75 hover:opacity-100" href="#shop">
                Explore
              </Button>

              {/* Carousel prev/next + counter — exact Figma: "01/04", weight 700, 20px, white/75% */}
              <div className="hidden items-center gap-4 lg:flex">
                <button
                  type="button"
                  aria-label="Previous O2 plant"
                  className="text-white hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="font-sans font-bold text-white/75 text-[20px] leading-[24.2px]">
                  01/04
                </span>
                <button
                  type="button"
                  aria-label="Next O2 plant"
                  className="text-white hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carousel dots indicator — exact Figma: pill(31x11) + 2 dots(11x11), white/75% */}
          <div className="mt-4 flex items-center gap-2 lg:absolute lg:bottom-[-131px] lg:left-[756px] lg:mt-0">
            <span className="h-[11px] w-[31px] rounded-full bg-white/75" />
            <span className="h-[11px] w-[11px] rounded-full bg-white/75" />
            <span className="h-[11px] w-[11px] rounded-full bg-white/75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default O2Plants;
