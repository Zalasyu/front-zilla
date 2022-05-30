import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
    <>
    <AuthenticatedTemplate>
        <Button component={Link} to="/dashboard" variant="contained" color="primary">
            Request Access Token for Dashboard Web API
        </Button>
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
        <Typography variant="h6">
            <center>
                You do not have access to Minds & Music. Please login.
            </center>
        </Typography>
    </UnauthenticatedTemplate>
    </>
};