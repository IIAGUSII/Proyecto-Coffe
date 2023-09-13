import { useEffect, useState } from "react";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import { UserContext } from "../UserContext";
import { UserContextProvider } from "../UserContext";

function App() {
  return (
    <UserContextProvider>
      <Header></Header>
      <Main></Main>
    </UserContextProvider>
  );
}

export default App;
