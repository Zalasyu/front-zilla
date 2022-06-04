import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Button, Tooltip,  IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    return(<>
    <br />
            <center>
                <h2>Welcome to the Home page of Minds & Music!</h2>
            </center>
    <br />
    <AuthenticatedTemplate>
        <center>
            <Tooltip title="Click to call another service!" arrow>
                <IconButton>
                <Button component={Link} to="/dashboard" variant="contained" color="primary">
                    <center>
                        Request Access Token for Dashboard Service
                    </center>
                </Button>

                </IconButton>

            </Tooltip>

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