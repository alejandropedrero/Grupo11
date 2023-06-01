// Navegación interna

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SearchUsers from "./pages/SearchUsers";
import SearchFriends from "./pages/SearchFriends";
import TicketForm from "./pages/TicketForm";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import ProfileUser from "./pages/ProfileUser";

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
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/profile-user" element={<ProfileUser />} />
        <Route path="/profile-user/:id" element={<ProfileUser />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
}

export default App;
