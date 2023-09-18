import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./FormContact";
import Footer from "./Footer";
import NoMatch from "./NoMatch";

function RoutesPage() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoMatch />}></Route>
          <Route path="/contact" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default RoutesPage;
