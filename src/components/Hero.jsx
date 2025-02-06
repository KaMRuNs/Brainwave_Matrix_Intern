import React from "react";
import HomeCard from "./HomeCard";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="md:flex justify-evenly pt-8 bg-light h-max">
      <div className="w-full md:w-1/2">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Are you starving?",
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            "Are you hungry?",
            1500,
            "Try our foods!!",
            1500,
          ]}
          wrapper="span"
          speed={10}
          style={{
            fontSize: "300%",
            display: "inline-block",
            color: "white",
            fontWeight: "bold",
          }}
          repeat={Infinity}
        />
        {/* <h1 className='text-white font-bold text-8xl'>Are you starving?</h1> */}
        <p className="text-2xl mt-4">
          Within a few clicks, find meals that are accessible near you
        </p>
        <HomeCard />
      </div>
      <img src="./hero.png" alt="Food Image" className="pt-32" />
    </div>
  );
};

export default Hero;
