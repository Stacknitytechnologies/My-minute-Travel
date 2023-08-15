import React from "react";

function FamousTouristAttraction() {
  return (
    <div>
      <div className="flex flex-col items-start justify-center px-2 py-4 w-full">
        <h1 className="text-heading1-bold font-medium ">
          Plan your perfect trip
        </h1>
        <p className="text-sm font-light">
          Search Flights, Hotels & Car Hire to our most popular destinations
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <div className="flex flex-col flex-wrap items-center justify-center w-[22rem] h-auto">
          <div
            className="trip-card flex items-center justify-start flex-row w-full h-24 bg-orange-500 rounded-md mt-2 overflow-hidden"
            id="tip-1"
          >
            <div className="trips-pic">
              <img
                src="https://openclipart.org/image/300px/svg_to_png/194077/Placeholder.png"
                className="tour-1"
                alt="Marmagao"
              />
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center w-[22rem] h-auto">
              <h1>marmagao</h1>
              <p className="text-black">
                <a href="#">Flights</a> . <a href="#">Hotels</a> .{" "}
                <a href="#">Car Hire</a>
              </p>
            </div>
          </div>
          <div
            className="trip-card flex items-center justify-start flex-row w-full h-24 bg-orange-500 rounded-md mt-2 overflow-hidden"
            id="tip-4"
          >
            <div className="trips-pic">
              <img
                src="https://openclipart.org/image/300px/svg_to_png/194077/Placeholder.png"
                className="tour-1"
                alt="Bangkok"
              />
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center w-[22rem] h-auto">
              <h1>bangkok</h1>
              <p className="text-black">
                <a href="#">Flights</a> . <a href="#">Hotels</a> .{" "}
                <a href="#">Car Hire</a>
              </p>
            </div>
          </div>
          <div
            className="trip-card flex items-center justify-start flex-row w-full h-24 bg-orange-500 rounded-md mt-2 overflow-hidden"
            id="tip-7"
          >
            <div className="trips-pic">
              <img
                src="https://openclipart.org/image/300px/svg_to_png/194077/Placeholder.png"
                className="tour-1"
                alt="Chennai"
              />
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center w-[22rem] h-auto">
              <h1>chennai</h1>
              <p className="text-black">
                <a href="#">Flights</a> . <a href="#">Hotels</a> .{" "}
                <a href="#">Car Hire</a>
              </p>
            </div>
          </div>
        </div>
        {/* add aohterlocations */}
      </div>
    </div>
  );
}
export default FamousTouristAttraction;
