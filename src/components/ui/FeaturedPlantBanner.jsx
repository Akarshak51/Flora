import Button from "../common/Button";

const FeaturedPlantBanner = ({ title, description, price, image, alt, imagePosition }) => {
  const imageFirst = imagePosition === "left";

  return (
    <div className="glass-card relative mx-auto flex w-full max-w-[1619px] flex-col items-center gap-6 overflow-visible rounded-[42px] p-7 shadow-2xl sm:rounded-[70px] sm:p-9 lg:min-h-[430px] lg:flex-row lg:gap-0 lg:rounded-[110px] lg:p-0 xl:min-h-[526px] xl:rounded-[151px]">
      <div
        className={`w-full lg:absolute lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2 xl:w-[45%] ${
          imageFirst ? "lg:left-[4%]" : "lg:right-[2%]"
        }`}
      >
        <img
          src={image}
          alt={alt}
          className="mx-auto h-auto w-full max-w-[430px] object-contain drop-shadow-2xl lg:max-w-none xl:max-h-[690px]"
        />
      </div>

      <div
        className={`flex w-full flex-col items-start px-2 pb-4 lg:absolute lg:top-1/2 lg:w-[46%] lg:-translate-y-1/2 lg:px-0 lg:pb-0 xl:w-[45%] ${
          imageFirst ? "lg:right-[8%]" : "lg:left-[6%]"
        }`}
      >
        <h3 className="font-sans font-semibold text-white text-[24px] leading-tight sm:text-[30px] lg:text-[34px] xl:text-[38px]">
          {title}
        </h3>
        <p className="mt-4 font-sans font-semibold text-white text-[15px] leading-snug sm:text-[17px] lg:mt-6 lg:text-[18px] xl:text-[20px]">
          {description}
        </p>
        <p className="mt-5 font-sans font-semibold text-white text-[26px] leading-[1.2] sm:text-[32px] lg:text-[34px] xl:text-[38px]">
          {price}
        </p>

        <div className="mt-4 flex items-center gap-4 lg:mt-5 lg:gap-6">
          <Button variant="outline">Explore</Button>
          <button
            type="button"
            aria-label="Add to cart"
            className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white text-white hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
              <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlantBanner;
