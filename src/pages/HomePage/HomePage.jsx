import { useState } from "react";
import HeroSection from "../../components/HeroSection/Hero.jsx";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import Header from "../../components/Header/Header";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);

    if (activeFilter === filter) {
      setActiveFilter("");
    }
  };
  return (
    <div>
      <Header
        handleFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      <HeroSection />
      <PhotoGallery activeFilter={activeFilter} />
    </div>
  );
}

export default HomePage;
