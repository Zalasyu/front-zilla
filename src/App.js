import { Routes, Route } from "react-router-dom";

// MSAL Imports

// Views/Pages Imports
import { Dashboard } from "./Pages/Dashboard";
import { Home } from "./Pages/Home";


export default function App() {
  return (
    <Pages />
  );
}

function Pages() {
  return (
    <Routes>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  )

}