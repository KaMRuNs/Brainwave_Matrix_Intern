import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center text-2xl px-4 md:px-20 py-6 bg-white sticky top-0 z-30">
      <div className="flex w-1/3 md:w-fit">
        <img src="./logo.png" alt="" />
        <h1 className="font-bold pl-2">
          {" "}
          <span className="text-3xl text-dark">food</span>
          <span className="text-light text-3xl">wa</span>
          <span className="text-2xl text-light">G</span>
          <span className="text-light text-3xl">on</span>
        </h1>
      </div>
      <div className="hidden md:flex items-center font-bold text-xl gap-2">
        <h2>Deliver to:</h2>
        <i class="fa-solid fa-location-dot px-2 text-light"></i>
        <p className="text-lg font-normal">Current Location </p>
        <p className="text-lg"> New York City</p>
      </div>
      <div className="hidden md:flex items-center w-1/3 md:w-fit">
        <i class="fa-solid fa-magnifying-glass text-light"></i>
        <input
          type="text"
          placeholder="Search food"
          className="h-10 p-2 m-2 border-none"
        />
      </div>
      <div className="hidden md:flex align-bottom text-light font-bold hover:shadow-btn h-12 p-3 rounded-md">
        <i class="fa-solid fa-user mr-2 mt-1"></i>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Nav;
