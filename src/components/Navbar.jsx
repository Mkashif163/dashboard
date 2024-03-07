import React from "react";
import { Home, BoomBox , Phone, Briefcase, BookOpen, Mail,MoveHorizontal  } from "lucide-react";

import logo from "../assets/react.svg";
import {motion} from "framer-motion";

const Navbar = () => {
  const NavLinks = [
    { name: "Home", path: "#", icon: Home },
    { name: "About", path: "#", icon: BoomBox },
    { name: "Services", path: "#", icon: Phone },
    { name: "Portfolio", path: "#", icon: Briefcase },
    { name: "Blog", path: "#", icon: BookOpen },
    { name: "Contact", path: "#", icon: Mail },
  ];

  const variants = {
    expanded: { width : '20%' },
    collapsed: { width : '10%' }
  };

  const [active, setActive] = React.useState(0);
  const [show, setShow] = React.useState(true);
  return (
    <motion.nav
    animate={show ? "expanded" : "collapsed"}
    variants={variants}
     className="px-10 py-10 flex flex-col border h-screen w-1/5 relative">
      <div className="flex logo-div space-x-2 items-center">
        <img src={logo} alt="logo" />
        <p className={show ? "visible text-2xl font-medium" : "hidden"}>Kashif</p>
      </div>
      <div
        onClick={() => setShow(!show)}
       className="h-8 w-8 rounded-full absolute -right-4 bg-[#61DBFB] flex items-center justify-center"><MoveHorizontal /></div>
      <div className="flex flex-col mt-5 space-y-3">
        {NavLinks.map((link, index) => (
          <div
            
            key={index}
            className={
              "py-2 px-4 my-2 rounded-lg flex items-center " +
              (active === index ? "bg-[#61DBFB]" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setActive(index);
            }}
          >
            <link.icon className="inline-block mr-2" />
            <a href={link.path} className={
                show ?
                "visible" :
                "hidden"
            }>
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
