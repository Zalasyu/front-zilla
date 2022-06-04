import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

function handleLogout(instance) {
    instance.logoutRedirect().catch( e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();
    return (
        <Button 
        variant="contained" color="primary" 
        onClick={()=>handleLogout(instance)}>
            <LogoutIcon />
        </Button>
    )
}