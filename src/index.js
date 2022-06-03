import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

// MSAL Imports
import { msalConfig } from './auth/authConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

// Styles
import { ThemeProvider } from '@mui/material';
import { theme } from "./styles/theme";

// Initialize MSAL insance
// Should be instantiated outside of the component tree to prevent it
// from being re-instantiated on re-renders.
const msalInstance = new PublicClientApplication(msalConfig);

// Wrap most or all components in the MsalProviderC component.
// Best practice to render the MsalProvider as close to root as possible.
const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </ThemeProvider>
  </Router>

);