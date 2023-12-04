import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../Formularios/FormContact.jsx";
import NoMatch from "./NoMatch";
import AllProducts from "../TodosLosProductos/AllProducts";
import Main from "../Main/MainHtml";
import FilterCoffee from "../TodosLosProductos/ProdCoffee.jsx";
import ProdFood from "../TodosLosProductos/ProdFood.jsx";
import CoffeeMaker from "../TodosLosProductos/ProdCoffeeMaker.jsx";
import GroundCoffee from "../TodosLosProductos/ProdGroundCoffe.jsx";
import Register from "../Formularios/Register.jsx";
import Login from "../Formularios/Login.jsx";
import Admin from "../Admin/Admin.jsx";

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
        <Route path="/registro" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default RoutesPage;
