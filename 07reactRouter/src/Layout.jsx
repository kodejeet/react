import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <About />
      <Home />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
