const PlantCard = ({ name, description, price, image, alt }) => {
  return (
    <article className="relative mx-auto flex min-h-[420px] w-full max-w-[410px] flex-col pt-[96px] sm:min-h-[500px] sm:pt-[120px] lg:min-h-[520px] lg:max-w-none lg:pt-[128px] xl:min-h-[590px] xl:pt-[150px]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute left-1/2 top-0 z-10 h-[210px] w-[210px] -translate-x-1/2 object-contain drop-shadow-xl sm:h-[260px] sm:w-[260px] lg:h-[270px] lg:w-[270px] xl:h-[330px] xl:w-[330px]"
      />

      <div className="glass-card flex min-h-[320px] flex-1 flex-col rounded-[34px] px-7 pb-7 pt-[132px] shadow-2xl sm:min-h-[370px] sm:rounded-[42px] sm:px-8 sm:pt-[160px] lg:min-h-[392px] lg:rounded-[46px] lg:px-8 lg:pt-[164px] xl:min-h-[440px] xl:rounded-[58px] xl:px-10 xl:pt-[198px]">
        <h3 className="font-sans text-white/75 text-[22px] leading-tight sm:text-[26px] lg:text-[28px] xl:text-[32px]">
          {name}
        </h3>
        <p className="mt-3 font-sans text-white/75 text-[14px] leading-snug sm:text-[15px] lg:min-h-[78px] lg:text-[16px] xl:text-[18px]">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <span className="font-sans text-white/75 text-[22px] leading-[1.2] sm:text-[26px] lg:text-[28px] xl:text-[32px]">
            {price}
          </span>
          <button
            type="button"
            aria-label={`Add ${name} to cart`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-white text-white opacity-75 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-[50px] sm:w-[50px]"
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
              <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
