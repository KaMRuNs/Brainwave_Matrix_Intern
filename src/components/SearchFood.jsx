import React from "react";

const SearchFood = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-20">
        <h1 className="text-5xl font-bold ml-8">Search by Food</h1>
        <div className="flex items-center">
          <p className="text-2xl font-bold">View all</p>
          <img src="Arrow Left.png" alt="" className="hidden md:flex" />
          <img src="Arrow Right.png" alt="" className="hidden md:flex" />
        </div>
      </div>
      <div className="md:flex grid grid-cols-2 gap-4 justify-around mt-16">
        <div className="w-full md:w-1/7 font-bold text-2xl text-center">
          <img src="./f0.png" alt="" className="w-full rounded-full mb-8" />
          <p>Pizza</p>
        </div>
        <div className="w-full md:w-1/7 font-bold text-2xl text-center">
          <img src="./f1.png" alt="" className="w-full rounded-full mb-8" />
          <p>Burger</p>
        </div>
        <div className="w-full md:w-1/7 font-bold text-2xl text-center">
          <img src="./f2.png" alt="" className="w-full rounded-full mb-8" />
          <p>Noodles</p>
        </div>
        <div className="w-full md:w-1/7 font-bold text-2xl text-center">
          <img src="./f3.png" alt="" className="w-full rounded-full mb-8" />
          <p>Sub-sandwich</p>
        </div>
        <div className="w-full md:w-1/7 font-bold text-2xl text-center">
          <img src="./f4.png" alt="" className="w-full rounded-full mb-8" />
          <p>Chowmein</p>
        </div>
        <div className="w-full md:w-1/7 font-bold text-2xl text-center">
          <img src="./f5.png" alt="" className="w-full rounded-full mb-8" />
          <p>Steak</p>
        </div>
      </div>
    </>
  );
};

export default SearchFood;
