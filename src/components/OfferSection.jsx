import React from "react";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  const offerData = [
    {
      name: "Greys Vage",
      description: "6 Days Remaining",
      Image: "./Offer1.png",
    },
    {
      name: "Greys Vage",
      description: "6 Days Remaining",
      Image: "./Offer2.png",
    },
    {
      name: "Greys Vage",
      description: "7 Days Remaining",
      Image: "./Offer3.png",
    },
    {
      name: "Greys Vage",
      description: "8 Days Remaining",
      Image: "./Offer4.png",
    },
  ];

  return (
    <>
      <OfferCard offer={offerData} cls={"grid-cols-1 md:grid-cols-4"} />
    </>
  );
};

export default OfferSection;
