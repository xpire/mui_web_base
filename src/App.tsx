import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import ThemeProvider from "./theme/ThemeProvider";
import Header from "./components/Header/Header";
import Drawer from "./components/SideBar/SideBar";
import AboutPage from "./components/Pages/AboutPage";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";

function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!isOpen);
  return (
    <ThemeProvider darkMode={darkMode}>
      <Header toggleMenu={toggleDrawer} handleChange={toggleDarkMode} />
      <Drawer isOpen={isOpen} handleChange={toggleDrawer} />
      <div
        style={{
          overflowX: "hidden",
          maxWidth: "100vw",
          minWidth: "100vw",
        }}
      >
        <Switch location={location} key={location.key}>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
