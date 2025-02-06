import React from "react";

const Features = () => {
  return (
    <div className="bg-bg w-full h-132 hidden md:flex items-center justify-center">
      <div className="bg-white w-4/5 m-20 p-20 flex items-center justify-between rounded-4xl">
        <img src="./feature1.png" alt="" />
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-65 from-orange-700 to-yellow-300">
          Daily <br /> Discounts
        </h2>
        <img src="./feature2.png" alt="" />
        <h2 className=" text-4xl font-bold text-transparent bg-clip-text bg-linear-65 from-orange-700 to-yellow-300">
          Live
          <br /> Tracing{" "}
        </h2>
        <img src="./feature3.png" alt="" />
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-65 from-orange-700 to-yellow-300">
          Quick <br /> Delivery
        </h2>
      </div>
    </div>
  );
};

export default Features;
