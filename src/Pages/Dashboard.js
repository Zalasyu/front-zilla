import { useEffect, useState } from "react";

// MSAL Imports
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionType, InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "../auth/authConfig";

// UI-Components
import { Loading } from "../ui-components/Loading";
import { ErrorComponent } from "../ui-components/ErrorComponent";


// Material-ui Imports

const ProtectedContent = () => {
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        if(!apiData && account && inProgress === InteractionStatus.None) {
            const request = {
                ...loginRequest,
                account: account
            };

            instance.acquireTokenSilent(request)
            .then((response) => {
                setApiData(response);
            })
            .catch((err) => {
                if(err instanceof InteractionRequiredAuthError){
                    instance.acquireTokenRedirect(request);
                }
            });
        }
    }, [account, inProgress, instance, apiData]);

    return (
        apiData
    )
};

export function Dashboard() {
    const authRequest = {
        ...loginRequest
    };
    return(
        <MsalAuthenticationTemplate
        interactionType={InteractionType.Popup}
        authenticationRequest={authRequest}
        errorComponent={ErrorComponent}
        loadingComponent={Loading}>
            <ProtectedContent />
        </MsalAuthenticationTemplate>
    )
}