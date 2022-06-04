import React from "react";
import "../styles/App.css";
import { protectedResources } from "../auth/authConfig";

export const DashboardData = (props) => {
    const tableRows = Object.entries(props.apiData).map((entry, index) => {
        return (<tr key={index}>
            <td><b>{entry[0]}: </b></td>
            <td>{entry[1]}</td>
        </tr>)
    });

    return (
        <>
        <center>
        <div className="data-area-div">
            <p>Calling <strong>Dashboard Microservice</strong>...</p>
            <br/> 
            <div>
                <p>The front end requests an access token from another service and acquires an access token.</p>
                <p>The back end verifies if the token is valid and if the user is permitted access to the resource.</p>
            </div>
            <br />
            <ul>
                <li><strong>endpoint:</strong> <mark>{protectedResources.apiDashboard.endpoint}</mark></li>
                <li><strong>scope:</strong> <mark>{protectedResources.apiDashboard.scopes[0]}</mark></li>
            </ul>
            <br />
            <p>Contents of the <strong>response</strong> is below:</p>
        </div>
        <div className="data-area-div">
            <table>
                <thead>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>

        </center>
        </>
    );
}