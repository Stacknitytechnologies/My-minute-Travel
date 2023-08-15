import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../constants";
import logout from "../assets/logout.svg";
const LeftSidebar = () => {
  const location = useLocation();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (location.pathname.includes(link.route) && link.route.length > 1) ||
            location.pathname === link.link;
          return (
            <a
              href={link.link}
              className={`leftsidebar_link ${isActive && "bg-orange-700 "}`}
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

      <div className="mt-10 px-6">
        <div className="flex cursor-pointer gap-4 p-4">
          <img src={logout} alt="logout" width={24} height={24} />

          <p className="text-light-2 max-lg:hidden">Logout</p>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
