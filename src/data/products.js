import { images } from "../assets/images";

// "Trending Plants" section = 2 large banner cards (Figma: Rectangle 7 / Rectangle 8)
export const featuredBanners = [
  {
    id: 1,
    title: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
    image: images.products.aglaonemaDesk,
    alt: "Aglaonema plant for desk decoration",
    imagePosition: "left", // image left, text right (Figma Rectangle 7)
  },
  {
    id: 2,
    title: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
    image: images.products.aglaonemaDeskTwo,
    alt: "Aglaonema plant for desk decoration",
    imagePosition: "right", // image right, text left (Figma Rectangle 8)
  },
];

// "Top Selling Plants" section = 6 grid cards (Figma: Group 13,14,15 + standalone + Group 20,21)
export const topSellingPlants = [
  {
    id: 1,
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
    image: images.products.aglaonemaPlant,
    alt: "Aglaonema plant",
  },
  {
    id: 2,
    name: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "Rs. 380/-",
    image: images.products.plantainLilies,
    alt: "Plantain Lilies (Hosta) plant",
  },
  {
    id: 3,
    name: "Cactus",
    description: "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
    image: images.products.cactusPlant,
    alt: "Cactus plant",
  },
  {
    id: 4,
    name: "Swiss cheese Plant",
    description:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 400/-",
    image: images.products.swissCheesePlant,
    alt: "Swiss cheese plant",
  },
  {
    id: 5,
    name: "Sansevieria plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
    image: images.products.sansevieriaPlant,
    alt: "Sansevieria plant",
  },
  {
    id: 6,
    name: "Agave plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "Rs. 359/-",
    image: images.products.agavePlant,
    alt: "Agave plant",
  },
];

// Hero floating product card (Figma: Group 38)
export const heroProduct = {
  label: "Indoor Plant",
  name: "Aglaonema plant",
  image: images.products.heroAglaonema,
  alt: "Aglaonema plant in a pot",
  ctaLabel: "Buy Now",
};
