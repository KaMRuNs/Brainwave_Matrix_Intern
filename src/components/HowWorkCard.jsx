import React from "react";

const HowWorkCard = ({ data }) => {
  return (
    <div className="md:flex gap-10 justify-center">
      {data.map((data) => (
        <div className="flex flex-col items-center md:w-1/5">
          <img src={data.image} alt="" />
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <p className="text-2xl text-center m-4">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowWorkCard;
