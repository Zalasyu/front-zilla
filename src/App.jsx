import React, { useEffect } from "react";
import {Routes, Route } from "react-router-dom";

// MSAL Imports
import { useMsal } from "@azure/msal-react";
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

  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
  )

}