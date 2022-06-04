import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    return(<>
            <center>
                Welcome to the Home page of Minds & Music!
            </center>
    <AuthenticatedTemplate>
        <center>
        <Button component={Link} to="/dashboard" variant="contained" color="primary">
            <center>
                Request Access Token for Dashboard Service
            </center>
        </Button>

        </center>
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
        <Typography variant="h6">
            <center>
                You do not have access to Minds & Music. Please login.
            </center>
        </Typography>
    </UnauthenticatedTemplate>
    </>
    )
};