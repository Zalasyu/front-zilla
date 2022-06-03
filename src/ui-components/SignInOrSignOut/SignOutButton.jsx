import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";

function handleLogout(instance) {
    instance.logoutRedirect().catch( e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();
    return (
        <Button 
        variant="contained" color="secondary" 
        onClick={()=>handleLogout(instance)}>
            Sign out
        </Button>
    )
}