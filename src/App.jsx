// import { useContext, useEffect, useState } from "react";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
// import { UserContext } from "../UserContext";
import { UserContextProvider } from "../UserContext";
import Footer from "./assets/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesPage from "./assets/components/RoutesPage";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <RoutesPage />
        <Footer></Footer>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
