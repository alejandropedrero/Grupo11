// Navegación interna

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SearchUsers from "./pages/SearchUsers";
import SearchFriends from "./pages/SearchFriends";
import TicketForm from "./pages/TicketForm";
import Profile from "./pages/Profile";

import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/search-users" element={<SearchUsers />} />
        <Route path="/search-friends" element={<SearchFriends />} />
        <Route path="/ticket-form" element={<TicketForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
