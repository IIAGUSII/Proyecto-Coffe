import Header from "../src/assets/components/Navegacion/Header.jsx";
import { UserContextProvider } from "../ProductsContext.jsx";
import Footer from "../src/assets/components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesPage from "./assets/components/Rutas/RoutesPage.jsx";

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
