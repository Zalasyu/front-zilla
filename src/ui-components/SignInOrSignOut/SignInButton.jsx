import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/authConfig";
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';


function handleLogin(instance){
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}


export const SignInButton = () => {
    const { instance } = useMsal();
    return (
        <Button 
        variant="contained" color="secondary" 
        onClick={()=> {handleLogin(instance)}}>
            <LoginIcon />
        </Button>
    )
}