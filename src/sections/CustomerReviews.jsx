import SectionTitle from "../components/common/SectionTitle";
import { images } from "../assets/images";

const reviews = [
  {
    id: 1,
    name: "Shelly Russel",
    avatar: images.avatars.shelly,
    rating: 5,
    reviewText:
      "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    name: "Lula Rolfson",
    avatar: images.avatars.lula,
    rating: 5,
    reviewText:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: "Carol Huels",
    avatar: images.avatars.carol,
    rating: 5,
    reviewText:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment--my plant collection has never looked better!",
  },
];

const Star = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="m12 1.75 3.05 6.25 6.9 1-4.98 4.86 1.18 6.86L12 17.48l-6.15 3.24 1.18-6.86L2.05 9l6.9-1L12 1.75Z"
      fill="#FFF84E"
    />
  </svg>
);

const CustomerReviews = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-[74px] pt-[70px] sm:px-8 lg:px-10 xl:pb-[96px] xl:pt-[86px]">
      <SectionTitle title="Customer Review" />

      <div className="mx-auto mt-[92px] flex w-full max-w-[1588px] flex-nowrap justify-center gap-5 overflow-visible lg:mt-[150px] xl:gap-[28px]">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="customer-review-card glass-card relative flex h-[clamp(370px,28.6vw,480px)] w-[calc((100vw_-_72px)/3)] max-w-[512px] min-w-0 shrink-0 flex-col rounded-[44px] px-[clamp(22px,3.45vw,58px)] pb-10 pt-[clamp(58px,5.4vw,91px)] shadow-2xl sm:rounded-[58px] lg:rounded-[77px]"
          >
            <div className="relative z-10 flex items-center gap-[clamp(16px,2.25vw,38px)]">
              <img
                src={review.avatar}
                alt={`Portrait of ${review.name}`}
                loading="lazy"
                className="h-[clamp(58px,5.24vw,88px)] w-[clamp(58px,5.24vw,88px)] shrink-0 rounded-full object-cover shadow-xl"
              />

              <div className="min-w-0 pt-1">
                <h3 className="whitespace-nowrap font-sans text-[clamp(20px,2.26vw,38px)] font-semibold leading-[1.18] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.25)]">
                  {review.name}
                </h3>
                <div
                  className="mt-[clamp(8px,0.7vw,12px)] flex gap-[clamp(2px,0.3vw,5px)]"
                  aria-label={`Rated ${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
            </div>

            <p className="relative z-10 mt-[clamp(40px,3.65vw,61px)] max-w-[403px] font-sans text-[clamp(15px,1.43vw,24px)] leading-[1.21] text-white/75">
              {review.reviewText}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

