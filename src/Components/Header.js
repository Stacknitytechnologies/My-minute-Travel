import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  let Links = [
    { name: "Home", link: "/Home" },
    { name: "Flights", link: "/Flights" },
    { name: "Trains", link: "/Trains" },
    { name: "Buses", link: "/Buses" },
    { name: "Hotels", link: "/Hotels" },
  ];

  return (
    <div className="flex justify-between items-center z-50 h-[10vh] max-w-7xl mx-auto px-4  text-white">
      <a href="/Home" className=" object-scale-down">
        <img src={logo} alt="logo" height={100} width={100} />
      </a>
      <ul className="md:flex md:items-center ">
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 font-bold text-xl">
            <a
              href={link.link}
              className=" hover:text-orange-400 duration-500 hover:underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
