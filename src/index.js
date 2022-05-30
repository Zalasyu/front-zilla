import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

// MSAL Imports
import { msalConfig } from './auth/authConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

// Initialize MSAL insance
// Should be instantiated outside of the component tree to prevent it
// from being re-instantiated on re-renders.
const msalInstance = new PublicClientApplication(msalConfig);

// Wrap most or all components in the MsalProviderC component.
// Best practice to render the MsalProvider as close to root as possible.
ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);