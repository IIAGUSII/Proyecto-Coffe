import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./FormContact";
import Footer from "./Footer";
import NoMatch from "./NoMatch";
import AllProducts from "./AllProducts";
import Main from "./Main";
import FilterCoffee from "./ProdCoffee";
import ProdFood from "./ProdFood";
import CoffeeMaker from "./ProdCoffeeMaker";
import GroundCoffee from "./ProdGroundCoffe";

function RoutesPage() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contact" element={<Form />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/coffee" element={<FilterCoffee />}></Route>
        <Route path="/comidas" element={<ProdFood />}></Route>
        <Route path="/cafeteras" element={<CoffeeMaker />}></Route>
        <Route path="/cafemolido" element={<GroundCoffee />}></Route>
        <Route path="/home" element={<GroundCoffee />}></Route>
      </Routes>
    </>
  );
}

export default RoutesPage;
