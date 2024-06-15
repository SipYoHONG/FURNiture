import React from "react";
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import NavigationBar from "./components/navigationbar/NavigationBar";
import Footer from "./components/publics/Footer";
import RecentItems from "./components/Item/RecentItems";
import ScrollToTop from "./components/publics/ScrollToTop";
import RedirectHandler from "./components/publics/RedirectHandler";

export default function App() {
  return (
      <AuthContextProvider>
        <RedirectHandler />
        <NavigationBar/>
        <RecentItems/>
        <ScrollToTop />
        <Outlet />
        <Footer />
      </AuthContextProvider>
  );
}