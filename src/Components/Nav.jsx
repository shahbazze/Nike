import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
const Nav = () => {
  const [show, setshow] = useState(false);

  const handleClick = () => {
    if(show)
        return setshow(false);
    return setshow(true);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav
        className="flex justify-between
        lg:items-center max-container"
      >
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
            className="max-lg:top-0"
          />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center
             gap-16 max-lg:flex-col max-lg:gap-4
             max-lg:items-end max-lg:mt-10 ${show ?"":"max-lg:hidden"}`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block" onClick={handleClick}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
