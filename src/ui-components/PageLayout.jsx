import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInRedirect";
import { SignOutButton } from "./SignOutRedirect";
//Sidebar implementation from Sidebar folder
import SideBar from "./Sidebar/SideBar";


export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
             { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            <br />
            <h5><center> Minds & Music </center></h5>
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