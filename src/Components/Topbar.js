import React from "react";
import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import Clock from "./Clock";

function Topbar() {
  return (
    <>
      <nav className="topbar">
        <a href="/" className="flex items-center gap-4">
          <img src={logo} alt="logo" width={50} height={50} />
          <p className="text-heading3-bold text-light-1 max-xs:hidden">
            My Minute Trip
          </p>
        </a>
        <div>
          <Clock />
        </div>

        <div className="flex items-center gap-1">
          <div className="block md:hidden">
            <div className="flex cursor-pointer">
              <img src={logout} alt="logout" width={24} height={24} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
