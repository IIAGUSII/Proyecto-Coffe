import { useContext, useEffect, useState } from "react";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import { UserContext } from "../UserContext";
import { UserContextProvider } from "../UserContext";
import Footer from "./assets/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Main></Main>
        <Footer></Footer>
      </UserContextProvider>
    </>
  );
}

export default App;
