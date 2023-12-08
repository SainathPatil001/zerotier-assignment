"use client";
import React, { useState } from "react";
import "./navbar.css";
import Logo from "./company-logo.svg";
import BredcrumbIcon from "./bredcrumb.svg";
import CloseIcon from "./close-icon.svg";
import en from "@/constants/texts/text";

const navItems = [
  {
    label: "Features",
    route: "/feature",
  },
  {
    label: "Pricing",
    route: "/pricing",
  },
  {
    label: "Download",
    route: "/download",
  },
  {
    label: "Support",
    route: "/support",
  },
];

export default function Navbar() {
  const [toogle, setToogle] = useState(false);

  return (
    <div className="nav-main-container flex justify-between items-center">
      <div className="nav-logo flex items-center">
        <Logo />
        <div className="nav-logo-text ml-1 mt-2">{en.companyName}</div>
      </div>
      <ul className={`nav-items-container ${toogle ? "" : "hidden"}`}>
        {navItems.map((item) => (
          <li className="nav-item" key={item.label}>
            {item.label}
          </li>
        ))}
      </ul>
      <div className="nav-signup-button-container flex items-center">
        <button className="btn-secondary mr-1">{en.login}</button>
        <button className="btn mr-5">{en.signUp}</button>
        {toogle ? (
          <CloseIcon onClick={() => setToogle((toogle) => !toogle)} />
        ) : (
          <BredcrumbIcon onClick={() => setToogle((toogle) => !toogle)} />
        )}
      </div>
    </div>
  );
}
