import React from "react";
import Button from "./Button";

const HomeCard = () => {
  return (
    <div className="bg-white rounded-2xl my-14 py-10">
      <div className="flex text-xl p-6 font-bold">
        <div className="text-dark bg-orange-50 rounded-lg h-12 w-32 flex justify-center items-center mr-6">
          <i class="fa-solid fa-motorcycle pr-3"></i>
          <h2>Delivery</h2>
        </div>
        <div className="flex text-gray-500 h-12 w-32 justify-center items-center">
          <i class="fa-solid fa-bag-shopping pr-3"></i>
          <h2>Pickup</h2>
        </div>
      </div>
      <form className="flex justify-evenly">
        <input
          type="text"
          placeholder="Enter Your Address"
          required
          className="h-14 w-2/3 text-2xl m-3 p-2 bg-gray-100 rounded-lg border-none"
        />
        <Button
          classname={"w-1/4"}
          searchImg={<i class="fa-solid fa-magnifying-glass pr-4"></i>}
          title={"Find Food"}
        />
      </form>
    </div>
  );
};

export default HomeCard;
