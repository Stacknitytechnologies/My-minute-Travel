import React from "react";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../constants";

function Bottombar() {
  const location = useLocation();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (location.pathname.includes(link.route) && link.route.length > 1) ||
            location.pathname === link.route;

          return (
            <a
              href={link.link}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <img
                src={link.imgURL.default}
                alt={link.label}
                width={16}
                height={16}
                className="object-contain"
              />

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
