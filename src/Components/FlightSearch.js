import React from "react";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../constants";

function FlightSearch() {
  const location = useLocation();
  return (
    <main className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-5xl mx-auto my-auto text-white">
      <div className="text-start w-full">
        <h1 className="text-7xl md:text-5xl tracking-wider font-bold">
          Let The Journey Begin
        </h1>
      </div>
      <div className="flex w-full flex-1 flex-row gap-6 px-6 bg-gray-800">
        {sidebarLinks.map((link) => {
          const isActive =
            (location.pathname.includes(link.route) && link.route.length > 1) ||
            location.pathname === link.link;
          return (
            <a
              href={link.link}
              className={`leftsidebar_link ${isActive && "bg-orange-600 "}`}
            >
              <img
                src={link.imgURL.default}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </a>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-orange-600 px-4 py-2">
        <div className="w-full flex items-center justify-center gap-2">
          <label className="type display:block relative pl-8 mb-4 cursor-pointer font-semibold leading-tight mx-0 my-10">
            Return
            <input
              className="absolute opacity-0 cursor-pointer"
              type="radio"
              checked="checked"
              name="radio"
            />
            <span className="checkmark absolute top-0 left-0 h-6 w-6 bg-transparent border-solid border-orange-700 rounded-full"></span>
          </label>
          <label className="type display:block relative pl-8 mb-4 cursor-pointer font-semibold leading-tight mx-0 my-10">
            One way
            <input
              className="absolute opacity-0 cursor-pointer"
              type="radio"
              name="radio"
            />
            <span className="checkmark absolute top-0 left-0 h-6 w-6 bg-transparent border-solid border-orange-700 rounded-full"></span>
          </label>
          <label className="type display:block relative pl-8 mb-4 cursor-pointer font-semibold leading-tight mx-0 my-10">
            Multi-city
            <input className="absolute opacity-0 cursor-pointer" />
            <span className="checkmark absolute top-0 left-0 h-6 w-6 bg-transparent border-solid border-orange-700 rounded-full"></span>
          </label>
        </div>
        <div className="center-bar w-full flex flex-row items-center justify-center gap-1 mt-8">
          <div
            className="from w-56 flex flex-col items-center justify-center "
            id="from-1"
          >
            <h6 className="font-medium text-base">From</h6>
            <input
              className="text-start text-black font-medium text-sm w-full h-12 from-input"
              type="text"
              placeholder="New Delhi(NDLS)"
            />
          </div>
          <div
            className="from w-56 flex flex-col items-center justify-center "
            id="from-2"
          >
            <h6 className="font-medium text-base">To</h6>
            <input
              type="text"
              placeholder="Country, City or airport"
              className="to-input text-start text-black font-medium text-sm w-full h-12"
            />
          </div>
          <div
            className="from w-56 flex flex-col items-center justify-center "
            id="from-3"
          >
            <h6 className="font-medium text-base">Depart</h6>
            <input
              type="text"
              placeholder="08/02/2021"
              className="depart-input text-start text-black font-medium text-sm w-full h-12"
            />
          </div>
          <div
            className="from w-56 flex flex-col items-center justify-center "
            id="from-4"
          >
            <h6 className="font-medium text-base">Return</h6>
            <input
              type="text"
              placeholder="15/02/2021"
              className="depart-input text-start text-black font-medium text-sm w-full h-12"
            />
          </div>
          <div
            className="from w-56 flex flex-col items-center justify-center "
            id="from-5"
          >
            <h6 className="font-medium text-base">Cabin Class </h6>
            <input
              type="text"
              placeholder="1 adult,Economy"
              className="cabin-input text-start text-black font-medium text-sm w-full h-12"
            />
          </div>
        </div>
        <div className="last-bar flex flex-row items-center justify-center w-full m-4">
          <div className="first-side flex flex-col items-center justify-center w-80">
            <label className="check flex itmes-center justify-center mt-2">
              <input type="checkbox" />
              <h4 className="text-sm font-medium px-0 py-1">
                Add Nearly Airport
              </h4>
            </label>
            <label className="check x itmes-center justify-center mt-2">
              <input type="checkbox" />
              <h4 className="text-sm font-medium px-0 py-1">
                Direct Flights Only
              </h4>
            </label>
          </div>
          <div className="first-side">
            <label className="check x itmes-center justify-center mt-2">
              <input type="checkbox" />
              <h4 className="text-sm font-medium px-0 py-1">
                Add Taxi Service
              </h4>
            </label>
            <label className="check x itmes-center justify-center mt-2">
              <input type="checkbox" />
              <h4 className="text-sm font-medium px-0 py-1">
                Flexible Tickets Only
              </h4>
            </label>
          </div>
          <div className="w-full md:w-[25rem] mt-4 flex items-center justify-center">
            <a className="search-flight" href="#">
              Search Flights -&gt;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FlightSearch;
