import React from "react";
import { useEffect, useState } from "react";

// MSAL Imports
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionType, InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";

// UI-Components
import { Loading } from "../ui-components/Loading";
import { ErrorComponent } from "../ui-components/ErrorComponent";
import { DashboardData } from "../ui-components/DisplayData";

// API Call related Imports
import { callApiWithToken } from "../fetch";
import { loginRequest, protectedResources } from "../auth/authConfig";


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
                callApiWithToken(response.accessToken, 
                    protectedResources.apiDashboard.endpoint)
                    .then(response => setApiData(response));
            })
            .catch((err) => {
                if(err instanceof InteractionRequiredAuthError){
                    if( account && inProgress === "none") {
                        instance.acquireTokenPopup({
                            scopes: protectedResources.apiDashboard.scopes
                        })
                        .then((response) => {
                            callApiWithToken(response.accessToken, 
                                protectedResources.apiDashboard.endpoint)
                                .then(response => setApiData(response));
                        }).catch(error => console.log(error));
                    }
                }
            });
        }
    }, [account, inProgress, instance, apiData]);

    return (
        <>
            { apiData ? <DashboardData apiData={apiData} /> : null}
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