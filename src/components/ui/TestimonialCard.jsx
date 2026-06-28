const Star = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="#FFF84E" aria-hidden="true">
    <path d="M12 .5l3.5 7.5 8 1-6 5.8 1.5 8-7-4-7 4 1.5-8-6-5.8 8-1z" />
  </svg>
);

/**
 * Exact Figma: glass card 512x480, radius 77px, avatar 88x88 circular,
 * name Inter/600/38px white, 5-star row, review text 24px white/75%.
 */
const TestimonialCard = ({ name, avatar, rating, reviewText }) => {
  return (
    <article className="glass-card flex flex-col gap-6 rounded-[40px] p-8 shadow-2xl sm:rounded-[60px] lg:h-[480px] lg:w-[512px] lg:gap-0 lg:rounded-[77px] lg:px-[58px] lg:pb-12 lg:pt-[91px]">
      <div className="flex items-center gap-6 lg:gap-[38px]">
        <img
          src={avatar}
          alt={`Portrait of ${name}`}
          loading="lazy"
          className="h-[88px] w-[88px] rounded-full object-cover shadow-xl"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-sans font-semibold text-white text-[26px] leading-tight lg:text-[38px] lg:leading-[45.99px]">
            {name}
          </h3>
          <div className="flex gap-1" aria-label={`Rated ${rating} out of 5 stars`}>
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
        </div>
      </div>
      <p className="font-sans text-white/75 text-[18px] leading-snug lg:mt-[61px] lg:w-[403px] lg:text-[24px] lg:leading-[29.045px]">
        {reviewText}
      </p>
    </article>
  );
};

export default TestimonialCard;
