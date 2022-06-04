import React from "react";
//react icon imports
import { FaBars,  FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdLocationOn, MdOutlineContactSupport } from "react-icons/md";
import { AiFillHome} from "react-icons/ai"
import { BsPeopleFill} from "react-icons/bs"
import {GoGraph, GoCalendar} from "react-icons/go"
import { BiCog } from "react-icons/bi";
//react icon imports ends here
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import SidebarMenu from "./SidebarMenu";
import SignInSignOutButton from "../SignInOrSignOut/SignInSignOutButton";
import { useIsAuthenticated } from "@azure/msal-react";
import './Sidebar.css';

const routes = [
  {
      //change icon to a graph
    path: "/dashboard",
    name: "Dashboard",
    icon: <GoGraph />,
  },
  {
    //change icon to a graph
  path: "/home",
  name: "Home",
  icon: <AiFillHome />,
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
  const isAuthenticated = useIsAuthenticated()
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

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
        

          {/* If a user is authenticated then we are showing the below routes */}
          {isAuthenticated &&
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
 }


 {/* If we are NOT authenticated, then we are showing the below routes */}
   { !isAuthenticated &&
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
 }
           {/* Sign in Sign Out button implemented into sidebar */}
          <div className="SignInSignOut">
            <SignInSignOutButton />
          </div>


        </motion.div>
        
        <main>{children}</main>
       
      </div>
    </>
  );
};

export default SideBar;