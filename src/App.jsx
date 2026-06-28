import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import TrendingPlants from "./sections/TrendingPlants";
import TopSellingPlants from "./sections/TopSellingPlants";
import CustomerReviews from "./sections/CustomerReviews";
import O2Plants from "./sections/O2Plants";

function App() {
  return (
    <div className="bg-ink">
      <Navbar />
      <main>
        <Hero />
        <TrendingPlants />
        <TopSellingPlants />
        <CustomerReviews />
        <O2Plants />
      </main>
      <Footer />
    </div>
  );
}

export default App;
