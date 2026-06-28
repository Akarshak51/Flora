import Button from "../common/Button";
import { images } from "../../assets/images";
import { heroProduct } from "../../data/products";
import { heroTestimonial } from "../../data/reviews";

const Star = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFF84E" aria-hidden="true">
    <path d="M12 .5l3.5 7.5 8 1-6 5.8 1.5 8-7-4-7 4 1.5-8-6-5.8 8-1z" />
  </svg>
);

const HeroBanner = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(27,35,22,0.64) 0%, rgba(27,35,22,0.14) 52%, rgba(27,35,22,0.6) 100%), url(${images.heroBackground})`,
      }}
    >
      <div className="min-h-[690px] pt-[130px] pb-20 sm:min-h-[820px] sm:pt-[160px] lg:min-h-[930px] lg:pt-[214px] lg:pb-24 xl:min-h-[1010px]">
        <div className="mx-auto max-w-[1728px] px-6 sm:px-10 lg:px-[39px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <div className="max-w-[802px] lg:pt-[68px]">
              <h1 className="font-sans font-semibold text-white/75 text-[48px] leading-[1.05] sm:text-[72px] lg:text-[96px] lg:leading-[1.04] xl:text-[118px]">
                Earth's Exhale
              </h1>
              <p className="mt-6 max-w-[775px] font-sans font-medium text-white/75 text-[16px] leading-[1.4] sm:text-[19px] lg:text-[23px] lg:leading-[27.84px]">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
                environment and its essential role in sustaining life.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button variant="outline" href="#shop">
                  Buy Now
                </Button>
                <button
                  type="button"
                  aria-label="Play live demo"
                  className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6 4l15 8-15 8V4z" />
                  </svg>
                </button>
                <span className="font-script text-white text-[25px] leading-[36.5px]">
                  Live Demo...
                </span>
              </div>

              <div className="glass-card mt-14 w-full max-w-[409px] rounded-[36px] p-6 shadow-2xl sm:rounded-[45px] sm:p-7 lg:mt-[88px]">
                <div className="flex items-center gap-6">
                  <img
                    src={heroTestimonial.avatar}
                    alt={`Portrait of ${heroTestimonial.name}`}
                    className="h-16 w-16 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <p className="font-sans text-white text-[22px] leading-[26.6px]">
                      {heroTestimonial.name}
                    </p>
                    <div className="mt-2 flex gap-1" aria-label={`Rated ${heroTestimonial.rating} out of 5 stars`}>
                      {Array.from({ length: heroTestimonial.rating }).map((_, i) => (
                        <Star key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-5 font-sans text-white/75 text-[17px] leading-[20.57px]">
                  {heroTestimonial.reviewText}
                </p>
              </div>
            </div>

            <div className="glass-card w-full max-w-[512px] self-center rounded-[34px] p-7 shadow-2xl lg:mt-[48px] lg:min-h-[644px] lg:self-start lg:rounded-[42px] lg:p-8 xl:mr-[52px]">
              <img
                src={heroProduct.image}
                alt={heroProduct.alt}
                className="mx-auto h-auto w-full max-w-[420px] object-contain drop-shadow-2xl lg:max-w-[459px]"
              />
              <p className="mt-6 font-sans text-white/75 text-[20px] leading-[27.84px] lg:text-[23px]">
                {heroProduct.label}
              </p>
              <h3 className="mt-2 font-sans text-white/75 text-[30px] leading-tight sm:text-[38px] sm:leading-[45.99px]">
                {heroProduct.name}
              </h3>
              <div className="mt-6 flex items-center justify-between gap-6">
                <Button variant="outline" href="#shop">
                  {heroProduct.ctaLabel}
                </Button>
                <button
                  type="button"
                  aria-label="Next product"
                  className="text-white hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex items-center gap-1.5">
                <span className="h-1.5 w-5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
