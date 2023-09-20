import Banner from "../Banner/Banner";
import Opinions from "../Opiniones/Opinions";
import OurProducts from "../ProductosDestacados/OurProducts";
import "./Main.css";

function Main() {
  return (
    <main>
      <Banner></Banner>
      <OurProducts></OurProducts>
      <Opinions></Opinions>
    </main>
  );
}

export default Main;
