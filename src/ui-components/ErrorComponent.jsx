import React from "react";
import { Typography } from "@mui/material";

export const ErrorComponent = ({error}) => {
    return <Typography variant="h6">
        Error: {error.errorCode}
    </Typography>

}