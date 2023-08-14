import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import HeroBg from "../assets/HeroBg.png";
import heroImage from "../assets/hero-img.png";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Clock from "../components/Clock";
import Airplane from "../components/Airplane";

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [departureLocation, setDepartureLocation] = useState(null);
  const [returnLocation, setReturnLocation] = useState(null);
  const [type, setType] = useState("");

  const locations = [
    { value: "newyork", label: "New York" },
    { value: "losangeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "sanfrancisco", label: "San Francisco" },
    { value: "miami", label: "Miami" },
    { value: "seattle", label: "Seattle" },
  ];

  const handleDepartureLocationChange = (selectedOption) => {
    setDepartureLocation(selectedOption);
  };

  const handleReturnLocationChange = (selectedOption) => {
    setReturnLocation(selectedOption);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="-z-10 flex items-center justify-center text-white text-2xl w-full">
      <img
        className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%] opacity-70 -z-10"
        src={HeroBg}
        alt="Hero Background Vector"
      />
      <div className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
        <div className="flex flex-col justify-center md:gap-6 gap-1 md:order-1 order-2">
          <p className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal">
            BEST DESITNATIONS AROUND THE WORLD
          </p>
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-medium">
            Travel, enjoy and live a new and full life.
          </h1>
          <div className="p-4 flex gap-3 ml-auto">
            <div className="flex-1">
              <div className="mb-4">
                <label
                  htmlFor="departureLocation"
                  className="block text-sm font-medium text-black-700 mb-1"
                >
                  From
                </label>
                <Select
                  options={locations}
                  value={departureLocation}
                  onChange={handleDepartureLocationChange}
                  placeholder="Select location..."
                  isSearchable
                  className="text-sm w-[12rem] text-black"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <label
                  htmlFor="returnLocation"
                  className="block text-sm font-medium text-black-700 mb-1"
                >
                  To
                </label>
                <Select
                  options={locations}
                  value={returnLocation}
                  onChange={handleReturnLocationChange}
                  placeholder="Select location..."
                  isSearchable
                  className="text-sm w-[12rem] text-black"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-black-700"
                >
                  Depart
                </label>
                <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="mm/dd/yyyy"
                  className="mt-1 p-2 border rounded w-[10rem] text-sm text-black "
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-black-700"
                >
                  Return
                </label>
                <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="mm/dd/yyyy"
                  className="mt-1 p-2 border rounded w-[10rem] text-sm text-black "
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-black-700"
                >
                  Cabin Class
                </label>
                <select
                  id="type"
                  className="mt-1 p-2 border rounded w-[10rem] text-sm text-black"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <option value="" className="">
                    Economy
                  </option>
                  <option value="double">Premium Economy</option>
                  <option value="suite">Business Class</option>
                  <option value="suite">First Class</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <button className="bg-orange-600 font-bold text-white p-2 rounded mt-5">
                Search
              </button>
            </div>
          </div>
          <p className="text-color3 md:text-base text-sm text-justify font-light">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
            <div className="flex items-center lg:gap-6 gap-3 cursor-pointer">
              <span className="-z-10 relative flex h-5 w-[50%] ">
                <Clock />
              </span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-end md:order-2 order-1 -z-10"
        >
          <img
            src={heroImage}
            alt="HeroImage"
            className="lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
