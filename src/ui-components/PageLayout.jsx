import React from "react";
//Sidebar implementation from Sidebar folder
import SideBar from "./Sidebar/SideBar";


// All pages that access any service 
// will have the following components in here
export const PageLayout = (props) => {

    return (
        <>
            <div className="container">
                <div className="Sidebar">
                    <SideBar />
                </div>
            </div>
           
            {props.children}





        </>
    );
};