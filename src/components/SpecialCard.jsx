import React from "react";
import Button from "./Button";

const SpecialCard = ({ info }) => {
  return (
    <div className="md:m-20">
      {info.map((i) => (
        <div className="md:flex justify-between items-center shadow-normal my-10 md:w-8/9 rounded-2xl mx-auto">
          {i.left ? (
            <img
              src={i.img}
              alt=""
              className="md-full md:w-3/5 rounded-l-2xl"
            />
          ) : null}

          <div className="w-full md:w-2/5 p-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold leading-16 md:w-4/6">
              {i.title1}
              <span className="text-light">{i.title2}</span>
            </h1>
            <p className="text-2xl py-16 w-2/3">{i.desc}</p>
            <Button
              title={"PROCEED TO ORDER"}
              classname={
                "bg-light font-bold text-xl p-6 w-2/3 hover:shadow-btn"
              }
              icon={true}
            />
          </div>
          {i.right ? (
            <img src={i.img} alt="" className="md:w-3/5 rounded-r-2xl h-fit" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SpecialCard;
