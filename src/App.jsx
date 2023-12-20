/* eslint-disable react/prop-types */

import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Book from "./pages/Book.jsx";
import BookHistory from "./pages/BookHistory.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import BookConfirmation from "./pages/BookConfirmation.jsx";
import Welcome from "./pages/Welcome.jsx";
import Cookies from "js-cookie";

function App() {
  const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = Cookies.get("accessToken");

    return isAuthenticated === "" || isAuthenticated === null || isAuthenticated === undefined ? <Navigate to="/login" state={{ from: rest.location }} /> : element;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard">
            <Route path="/dashboard/" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/dashboard/:kategoriLapangan" element={<ProtectedRoute element={<Book />} />} />
            <Route path="/dashboard/:kategoriLapangan/booking/:idOrder" element={<ProtectedRoute element={<BookConfirmation />} />} />
          </Route>
          <Route path="/history" element={<ProtectedRoute element={<BookHistory />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
