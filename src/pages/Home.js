import React from "react";
import FlightSearch from "../components/FlightSearch";
import Deals from "../components/Deals";
import FamousTouristAttraction from "../components/FamousTouristAttraction";

function Home() {
  return (
    <>
      <section className="fsearch">
        <FlightSearch />
      </section>
      <section className="text-white flex flex-col items-center justify-center w-full mt-6">
        <Deals />
      </section>
      <section className="text-white flex flex-col items-center justify-center cursor-pointer w-full mt-8">
        <FamousTouristAttraction />
      </section>
    </>
  );
}

export default Home;
