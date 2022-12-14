import React from "react";
import { Link } from "react-router-dom";
import SectionData from "../../data/Header/SectionData.json";
import Action from "../../wrapper/Header/Action";
import Section from "../../wrapper/Header/DropdownSection";
import LogoShoes from "../../assets/images/LogoTeam.png";
// import LogoWatch from "../../assets/images/LogoWatch.png";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-5 items-center fixed top-0 w-full z-50 shadow-sm bg-white">
      <Link to={"/"}>
        <img src={LogoShoes} alt="logo" className="w-[50px] h-auto" />
      </Link>
      <div className="flex flex-row gap-5">
        {SectionData.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <Action />
    </div>
  );
};

export default NavBar;
