import React from "react";
import { useEffect, useState } from "react";

// MSAL Imports
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionType, InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";

// UI-Components
import { Loading } from "../../ui-components/Loading";
import { ErrorComponent } from "../../ui-components/ErrorComponent";
import { DashboardData } from "../../ui-components/DisplayData";

// API Call related Imports
import { callApiWithToken } from "../../fetch";
import { loginRequest, protectedResources } from "../../auth/authConfig";
import "./Dashboard.css"


// Material-ui Imports

const DashContent = () => {
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        if(!apiData && account && inProgress === InteractionStatus.None) {
            const request = {
                scopes: protectedResources.apiDashboard.scopes,
                account: account
            };

            // Get Access Token with current account with it's permitted scopes.
            instance.acquireTokenSilent(request)
            .then((response) => {
                {console.log(response);}
                callApiWithToken(response.accessToken, protectedResources.apiDashboard.endpoint).then(response => setApiData(response));
            })
            .catch((err) => {
                if(err instanceof InteractionRequiredAuthError){
                    if( account && inProgress === "none") {
                        instance.acquireTokenPopup({
                            scopes: protectedResources.apiDashboard.scopes
                        })
                        .then((response) => {
                            callApiWithToken(response.accessToken, protectedResources.apiDashboard.endpoint).then(response => setApiData(response));
                        }).catch(error => console.log(error));
                    }
                }
            });
        }
    }, [account, inProgress, instance, apiData]);

    return (
        <>
            { apiData ? <DashboardData apiData={apiData} /> : null}

            <div className="dashboard-container">
                <div className="row">
                    <div className="column">
                        <h1>venue catalogue service</h1>
                    </div>
                    <div className="column">
                    <h1>Artist catalogue service</h1>
                        </div>
                        <div className="column">
                        <h1>Your fans</h1>
                        </div>
                </div>
                <div className="row">
                    <div className="column">
                    <h1>Events calendar</h1>
                    </div>
                    <div className="column">
                    <h1>Events near you</h1>
                        </div>
                        <div className="column">
                        <h1>Venue Recommender System</h1>
                        </div>
                </div>
            </div>
        </>
    )
};

export default function Dashboard() {
    const authRequest = {
        ...loginRequest
    };
    return(
        <MsalAuthenticationTemplate
        interactionType={InteractionType.Popup}
        authenticationRequest={authRequest}
        errorComponent={ErrorComponent}
        loadingComponent={Loading}>
            <DashContent />
        </MsalAuthenticationTemplate>
    )
}