import React from "react";
import aus from "../assets/flight1.jpg";
import ml from "../assets/hotel.2.jpg";
import sf from "../assets/train.jpg";
const Deals = () => {
  return (
    <>
      <div className="text-white w-full flex flex-row items-center justify-between">
        <h1 className="text-heading1-semibold font-semibold">
          Exclusive Offers
        </h1>
        <a className="text-sm" href="#">
          search everywhere >
        </a>
      </div>
      <div className="flex items-center justify-center flex-row  flex-wrap w-full mt-4 gap-1 overflow-hidden">
        <div
          className="last-card w-[22rem] h-[24rem] flex flex-col items-center rounded-sm overflow-hidden "
          id="aust"
        >
          <div className="last-pic w-full h-[70rem] overflow-hidden ">
            <img src={aus} className="new-3" alt="Deal 1" />
          </div>
          <div className="last-intro flex flex-col items-start justify-center w-full bg-orange-500 px-6 py-4">
            <h1 className="text-lg font-medium ">
              Melbourne,<span className="tex-sm">Australia</span>
            </h1>
            <a href="#">Get Prizes ></a>
          </div>
        </div>
        <div
          className="last-card w-[22rem] h-[24rem] flex flex-col items-center rounded-sm overflow-hidden"
          id="aust-2"
        >
          <div className="last-pic w-full h-[70rem] overflow-hidden">
            <img src={ml} className="new-3" alt="Deal 2" />
          </div>
          <div className="last-intro flex flex-col items-start justify-center w-full bg-orange-500 px-6 py-4">
            <h1 className="text-lg font-medium">
              Kaula Lampur,<span className="tex-sm">Malaysia</span>
            </h1>
            <a href="#">Get Prizes ></a>
          </div>
        </div>
        <div
          className="last-card w-[22rem] h-[24rem] flex flex-col items-center rounded-sm overflow-hidden"
          id="aust-2"
        >
          <div className="last-pic w-full h-[70rem] overflow-hidden">
            <img src={sf} className="new-3" alt="Deal 3" />
          </div>
          <div className="last-intro flex flex-col items-start justify-center w-full bg-orange-500 px-6 py-4">
            <h1 className="text-lg font-medium">
              San Francisco,<span className="tex-sm">United States</span>
            </h1>
            <a href="#">Get Prizes ></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
