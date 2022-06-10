// React Imports
import React from "react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { IconButton, Tooltip } from "@mui/material";

// MSAL Imports
import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";



const SignInSignOutButton = () => {
    const { inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();


    if (isAuthenticated) {
        return ( 
        <Tooltip title='Click to Sign Out' arrow>
            <IconButton size='small' edge='start'>
                <SignOutButton />
            </IconButton>
        </Tooltip>
        );
    } else if (inProgress !== InteractionStatus.Startup && 
        inProgress !== InteractionStatus.HandleRedirect) {
        return( 
        
        <Tooltip title='Click to Sign In' arrow>
            <IconButton size='small'>
                <SignInButton />
            </IconButton>
        </Tooltip>
        
        
        );
    } else {
        return null;
    }
}

export default SignInSignOutButton;