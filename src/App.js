import React from "react";
import {Routes, Route } from "react-router-dom";

// MSAL Imports
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


// Views/Pages Imports
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { PageLayout } from './ui-components/PageLayout';

export default function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <Pages />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in!</p>
      </UnauthenticatedTemplate>

    </PageLayout>
  );
}

function Pages() {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
  )

}