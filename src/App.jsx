import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OfferSection from "./components/OfferSection";
import HowWork from "./components/HowWork";
import PopularItem from "./components/PopularItem";
import FeatureRestau from "./components/FeatureRestau";
import SearchFood from "./components/SearchFood";
import Footer from "./components/Footer";
import LastSecond from "./components/LastSecond";
import Special from "./components/Special";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="m-0">
      <Nav />
      <div className="z-20">
        <Hero />
        <div className="md:p-20 flex flex-col">
          <OfferSection />
          <HowWork />
          <PopularItem />
          <FeatureRestau />
          <SearchFood />
        </div>
        <Features />
        <Special />

        <LastSecond />

        <Footer />
      </div>
    </div>
  );
};
export default App;
