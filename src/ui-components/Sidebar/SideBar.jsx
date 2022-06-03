import React from "react";
//react icon imports
import { FaBars,  FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdLocationOn, MdOutlineContactSupport } from "react-icons/md";
import { BsPeopleFill, BsFillCalendarFill} from "react-icons/bs"
import {GoGraph, GoCalendar} from "react-icons/go"
import { BiCog } from "react-icons/bi";
//react icon imports ends here
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import SidebarMenu from "./SidebarMenu";
import SignInSignOutButton from "../SignInOrSignOut/SignInSignOutButton";
import './Sidebar.css';

// TODO: Link the dashboard icon to route.
// TODO: For the dashboard route item. You would invoke Dashboard.jsx
// TODO: Include SignInSignOutButton.
const routes = [
  {
      //change icon to a graph
    path: "/home",
    name: "Home",
    icon: <GoGraph />,
  },
  {
      //change icon to a calendar
    path: "/yourevents",
    name: "Your Events",
    icon: <GoCalendar/>,
  },
  {
    path: "/eventsnearyou",
    name: "Events near you",
    icon: <MdLocationOn/>,
  },
  {
    path: "/fansnearyou",
    name: "Fans near you",
    icon: <BsPeopleFill/>,
  },

  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/support",
    name: "Support",
    icon: <MdOutlineContactSupport />,
  },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">

        
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 Minds & Music
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    key={index}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                  
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (

                    //for route text in the sidebar
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                     
                    )}
                    
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
         
        </motion.div>
        
        <main>{children}</main>
       
      </div>
    </>
  );
};

export default SideBar;