import React from "react";
import OfferCard from "./OfferCard";

const PopularItem = () => {
  const items = [
    {
      name: "Cheese Burger",
      loc: "Burger Arena",
      price: "$3.88",
      Image: "./item1.png",
    },
    {
      name: "Toffe’s Cake",
      loc: "Top Sticks",
      price: "$4.00",
      Image: "./item2.png",
    },
    {
      name: "Dancake",
      loc: "Cake World",
      price: "$1.99",
      Image: "./item3.png",
    },
    {
      name: "Cheese Burger",
      loc: "Fastfood Dine",
      price: "$3.00",
      Image: "./item4.png",
    },
    {
      name: "Cheese Burger",
      loc: "Foody man",
      price: "$2.79",
      Image: "./item5.png",
    },
  ];
  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-32 mb-12">
        Popular items
      </h1>
      <div className="flex items-center justify-evenly">
        <img src="./Arrow Left.png" alt="" className="hidden md:flex" />
        <OfferCard offer={items} cls={"grid-cols-1 md:grid-cols-5"} />
        <img src="./Arrow Right.png" alt="" className="hidden md:flex" />
      </div>
    </>
  );
};

export default PopularItem;
