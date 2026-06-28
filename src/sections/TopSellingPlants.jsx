import SectionTitle from "../components/common/SectionTitle";
import PlantCard from "../components/ui/PlantCard";
import { topSellingPlants } from "../data/products";

const TopSellingPlants = () => {
  return (
    <section
      id="top-selling"
      aria-labelledby="top-selling-heading"
      className="bg-ink px-6 py-16 sm:px-10 lg:px-[47px] lg:pb-28 lg:pt-8"
    >
      <div className="mx-auto max-w-[1728px]">
        <h2 id="top-selling-heading" className="sr-only">
          Top Selling Plants
        </h2>
        <SectionTitle title="Our Top Selling Plants" />

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-[49px] lg:gap-y-14 xl:gap-y-16"
        >
          {topSellingPlants.map((plant) => (
            <li key={plant.id}>
              <PlantCard
                name={plant.name}
                description={plant.description}
                price={plant.price}
                image={plant.image}
                alt={plant.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopSellingPlants;
