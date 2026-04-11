import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Fallback to Dashboard for undefined routes during dev */}
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/servers" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/features" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
