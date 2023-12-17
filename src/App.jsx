import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Book from "./components/pages/Book.jsx";
import BookHistory from "./components/pages/BookHistory.jsx";
import UserProfile from "./components/pages/UserProfile.jsx";
import BookConfirmation from "./components/pages/BookConfirmation.jsx";
import Welcome from "./components/pages/Welcome.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/book" element={<Book />} />
          <Route path="/history" element={<BookHistory />} />
          <Route path="/confirm" element={<BookConfirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
