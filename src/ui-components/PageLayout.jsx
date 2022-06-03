import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
//Sidebar implementation from Sidebar folder
import SideBar from "./Sidebar/SideBar";
import SignInSignOutButton from "./SignInOrSignOut/SignInSignOutButton";


export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <SignInSignOutButton />
            <h1><center> Minds & Music </center></h1>
            {props.children}


{ isAuthenticated &&

            <div className="container">
                <div className="Sidebar">
                    <SideBar />
                </div>
            </div>
}
        </>
    );
};