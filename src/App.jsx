import "./App.scss";
import HeroSection from "./components/HeroSection/Hero.jsx";
import Header from "./components/Header/Header.jsx";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [activeFilter, setActiveFilter] = useState("");

  //ELMO, if in photogallery

  const handleFilterChange = (filter) => {
    /* console.log(filter); */
    setActiveFilter(filter);

    if (activeFilter === filter) {
      setActiveFilter("");
    }
  };

  return (
    <main>
      <Header
        handleFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      <HeroSection />
      <PhotoGallery activeFilter={activeFilter} />
      <Footer />
    </main>
  );
}

export default App;
