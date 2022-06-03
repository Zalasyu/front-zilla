import React from "react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const SignInSignOutButton = () => {
    const { inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated) {
        return < SignOutButton />;
    } else if (inProgress !== InteractionStatus.Startup && inProgress !== InteractionStatus.HandleRedirect) {
        return <SignOutButton />;
    } else {
        return null;
    }
}

export default SignInSignOutButton;