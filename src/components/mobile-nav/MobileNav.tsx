import { useTheme } from "next-themes";
import React, { Dispatch, SetStateAction } from "react";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import {
  BsBriefcaseFill,
  BsFillMoonFill,
  BsFillSunFill,
  BsInfoLg,
} from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import Button from "../button/Button";
import MobileNavItem from "./MobileNavItem";

type MobileNavProps = {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const MobileNav: React.FC<MobileNavProps> = ({ setMobileMenu }) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const themeToggler = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <div
          onClick={() => setTheme("light")}
          className=" flex items-center justify-center"
        >
          <Button className="p-2 bg-light dark:bg-dark w-full text-dark dark:text-white hover:text-dark">
            Toggle Theme
            <BsFillSunFill className="ml-4" />
          </Button>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => setTheme("dark")}
          className="flex items-center justify-center"
        >
          <Button className="p-2 bg-light dark:bg-dark w-full text-dark dark:text-dark dark:hover:text-white">
            Toggle Theme
            <BsFillMoonFill className="ml-4" />
          </Button>
        </div>
      );
    }
  };
  return (
    <section className="p-3 absolute flex flex-col justify-between rounded-md lg:hidden min-h-[50vh] w-[20rem] top-[11vh] right-[2vh] bg-dark dark:bg-light shadow-2xl border-2 border-light dark:border-dark">
      <ul className="flex flex-col items-center justify-center space-y-2 mt-8">
        <MobileNavItem
          title="Home"
          Icon={AiFillHome}
          path="/"
          setMobileMenu={setMobileMenu}
        />
        <MobileNavItem
          title="About"
          Icon={BsInfoLg}
          path="#about"
          setMobileMenu={setMobileMenu}
        />
        <MobileNavItem
          title="Project"
          Icon={GiAmericanFootballHelmet}
          path="#projects"
          setMobileMenu={setMobileMenu}
        />
        <MobileNavItem
          title="Skills"
          Icon={FaTools}
          path="#skills"
          setMobileMenu={setMobileMenu}
        />
        <MobileNavItem
          title="Experience"
          Icon={BsBriefcaseFill}
          path="#experience"
          setMobileMenu={setMobileMenu}
        />
      </ul>

      <div>{themeToggler()}</div>
    </section>
  );
};
export default MobileNav;
