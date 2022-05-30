import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )

}