import SectionTitle from "../components/common/SectionTitle";
import FeaturedPlantBanner from "../components/ui/FeaturedPlantBanner";
import { featuredBanners } from "../data/products";

const TrendingPlants = () => {
  return (
    <section
      id="trending"
      aria-labelledby="trending-heading"
      className="bg-ink px-6 py-16 sm:px-10 lg:px-[54px] lg:pb-28 lg:pt-8"
    >
      <div className="mx-auto max-w-[1728px]">
        <h2 id="trending-heading" className="sr-only">
          Trending Plants
        </h2>
        <SectionTitle title="Our Trendy plants" />

        <div className="mt-14 flex flex-col gap-12 lg:mt-20 lg:gap-24 xl:gap-[110px]">
          {featuredBanners.map((banner) => (
            <FeaturedPlantBanner
              key={banner.id}
              title={banner.title}
              description={banner.description}
              price={banner.price}
              image={banner.image}
              alt={banner.alt}
              imagePosition={banner.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlants;
