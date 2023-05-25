// Navegación interna

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import SearchUsers from "./components/SearchUsers";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-users" element={<SearchUsers />} />
        <Route path="/ticket-form" element={<TicketForm />} />
      </Routes>
    </Router>
  );
}

export default App;