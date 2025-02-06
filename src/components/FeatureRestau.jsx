import React from "react";
import OfferCard from "./OfferCard";
import Button from "./Button";

const FeatureRestau = () => {
  const items = [
    {
      name: "Foodworld",
      dis: "20% off",
      rating: "46",
      description: "Opens tomorrow",
      Image: "./res1.png",
      img: "./restaurant1.png",
    },
    {
      name: "Pizzahub",
      dis: "20% off",
      rating: "40",
      description: "Opens tomorrow",
      Image: "./res2.png",
      img: "./restaurant2.png",
    },
    {
      name: "Donuts hut",
      dis: "20% off",
      rating: "20",
      description: "Open Now",
      Image: "./res3.png",
      img: "./restaurant3.png",
    },
    {
      name: "Donuts hut",
      dis: "20% off",
      rating: "50",
      description: "Open Now",
      Image: "./res4.png",
      img: "./restaurant4.png",
    },
    {
      name: "Ruby Tuesday",
      dis: "20% off",
      rating: "30",
      description: "Opens tomorrow",
      Image: "./res5.png",
      img: "./restaurant5.png",
    },
    {
      name: "Kuakata Fried Chicken",
      dis: "20% off",
      rating: "55",
      description: "Opens tomorrow",
      Image: "./res6.png",
      img: "./restaurant6.png",
    },
    {
      name: "Red Square",
      dis: "20% off",
      rating: "33",
      description: "Open Now",
      Image: "./res7.png",
      img: "./restaurant7.png",
    },
    {
      name: "Taco Bell",
      dis: "20% off",
      rating: "38",
      description: "Opens tomorrow",
      Image: "./res8.png",
      img: "./restaurant8.png",
    },
  ];
  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-32 mb-12">
        Featured Restaurants
      </h1>

      <div className="flex flex-col items-center">
        <OfferCard offer={items} cls={"grid-cols-1 md:grid-cols-4"} />
        <Button
          title={"View all "}
          classname={"bg-light font-bold p-6 text-lg"}
          icon={true}
        />
      </div>
    </>
  );
};

export default FeatureRestau;
