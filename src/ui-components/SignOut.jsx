import React from "react";
import { useMsal } from "@azure/msal-react";

function handleLogout(instance) {
    instance.logoutRedirect().catch( e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();
    return (
        <Button variant = "secondary" onClick={()=>handleLogout(instance)}>
            Sign out
        </Button>
    )
}