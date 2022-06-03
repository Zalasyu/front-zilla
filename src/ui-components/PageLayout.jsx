import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInRedirect";
import { SignOutButton } from "./SignOutRedirect";

// TODO: Add Sidebar
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
        { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
        <br />
        <h5><center> Minds & Music </center></h5>
        {props.children}
        </>
    );
};