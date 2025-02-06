import React from "react";
import HowWorkCard from "./HowWorkCard";

const HowWork = () => {
  const data = [
    {
      title: "Select location",
      description: "Choose the location where your food will be delivered.",
      image: "./Map.png",
    },
    {
      title: "Choose Order",
      description: "Check over hundreds of menus to pick your favorite food",
      image: "./Menu.png",
    },
    {
      title: "Pay advanced",
      description:
        "It's quick, safe, and simple. Select several methods of payment",
      image: "./Invoice.png",
    },
    {
      title: "Enjoy meals",
      description: "Food is made and delivered directly to your home.",
      image: "./Donut.png",
    },
  ];
  return (
    <div className="bg-linear-to-b from-orange-100 to-white">
      <h1 className="text-4xl text-dark font-bold text-center mt-10 mb-12">
        How does it work
      </h1>
      <HowWorkCard data={data} />
    </div>
  );
};

export default HowWork;
