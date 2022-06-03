
import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_signupsignin1",
    forgotPassword: "B2C_1_resetPassword1",
    editProfie: "B2C_1_editProfile1",
  },
  authorities: {
    signUpSignIn: {
      authority: "https://projectcentredavidev.b2clogin.com/projectcentredavidev.onmicrosoft.com/B2C_1_signupsignin1"
    },
    forgotPassword: {
      authority: "https://projectcentredavidev.b2clogin.com/projectcentredavidev.onmicrosoft.com/B2C_1_resetPassword1"
      
    },
    editProfie: {
      authority: "https://projectcentredavidev.b2clogin.com/projectcentredavidev.onmicrosoft.com/B2C_1_editProfile1"
    }

  },
  authorityDomain: "projectcentredavidev.b2clogin.com"

}


// Configuration object to be pased to MSAL instance on initialization
export const msalConfig = {
  auth: {
    clientId: "1ea6a904-f5fe-453c-9ed6-5252dc04d8d0",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000",
    navigateToLoginRequestUrl: false

  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false

  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if ( containsPii ) {
          return;

        }

        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            // Do Nothing
        }
      },
      logLevel: LogLevel.Verbose
    }
  }
};


export const protectedResources = {
  apiDashboard: {
    endpoint: "http://localhost:3001/dashboard",
    scopes: ["https://projectcentredavidev.onmicrosoft.com/api/dash.Read"]
  },
  apiHome: {
    endpoint: "http://localhost:3001/",
    scopes: [""]
  }
}

/*
 *Scopes added here will be prompted for user consent during sign-in.
 * */

export const loginRequest = {
  scopes: ["openid", ...protectedResources.apiDashboard.scopes]
};

