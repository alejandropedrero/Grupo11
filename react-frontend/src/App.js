// Navegación interna

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SearchUsers from "./pages/SearchUsers";
import TicketForm from "./pages/TicketForm";
import Profile from "./pages/Profile";
import EditableProfile from "./pages/EditableProfile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-users" element={<SearchUsers />} />
        <Route path="/ticket-form" element={<TicketForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editable-profile" element={<EditableProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
