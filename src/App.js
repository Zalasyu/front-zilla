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
    <div>
      <Routes>
        <Route path="/dashboard" component={ Dashboard }>
        <Route path="/" component={ Home }>
      </Routes>
    </div>
  )

}