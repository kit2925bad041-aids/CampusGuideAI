import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home.jsx";
import FindPlaces from "./FindPlaces.jsx";
import CampusMap from "./CampusMap.jsx";
import Features from "./Features.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <NavLink to="/" className="logo">
            <span className="logo-icon">🧭</span>
            CampusGuide <span className="logo-ai">AI</span>
          </NavLink>

          <nav className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/find-places"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Find Places
            </NavLink>

            <NavLink
              to="/campus-map"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Campus Map
            </NavLink>

            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Features
            </NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-places" element={<FindPlaces />} />
            <Route path="/campus-map" element={<CampusMap />} />
            <Route path="/features" element={<Features />} />
            <Route
              path="*"
              element={
                <div className="page-heading">
                  <h1>Page Not Found</h1>
                  <NavLink to="/">Go to Home</NavLink>
                </div>
              }
            />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>© 2026 CampusGuide AI | Smart Campus Navigation</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
