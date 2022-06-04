import React, { useEffect } from "react";
import {Routes, Route } from "react-router-dom";

// MSAL Imports
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { EventType, InteractionType } from "@azure/msal-browser";
import { b2cPolicies } from "./auth/authConfig";


// Views/Pages Imports
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { PageLayout } from './ui-components/PageLayout';

export default function App() {
  return (
    <PageLayout>
      <Pages />
    </PageLayout>
  );
}

function Pages() {
    /**
   * useMsal is hook that returns the PublicClientApplication instance, 
   * an array of all accounts currently signed in and an inProgress value 
   * that tells you what msal is currently doing. For more, visit:
   */
  const { instance } = useMsal();

  /**
   * Using the event API, you can register an event callback that will do something when an event is emitted. 
   * When registering an event callback in a react component you will need to make sure you do 2 things.
   * 1) The callback is registered only once
   * 2) The callback is unregistered before the component unmounts.
   */
  useEffect(() => {
    const callbackId = instance.addEventCallback((event) => {
      if (event.eventType === EventType.LOGIN_FAILURE) {
        if (event.error && event.error.errorMessage.indexOf("AADB2C90118") > -1) {
          if (event.interactionType === InteractionType.Redirect) {
            instance.loginRedirect(b2cPolicies.authorities.forgotPassword);
          } else if (event.interactionType === InteractionType.Popup) {
            instance.loginPopup(b2cPolicies.authorities.forgotPassword)
              .catch(e => {
                return;
              });
          }
        }
      }

    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
  }, []);

  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
  )

}