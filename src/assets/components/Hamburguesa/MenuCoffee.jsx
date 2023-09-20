import "./MenuCoffee.css";
import { Link } from "react-router-dom";

function MenuCoffee() {
  return (
    <>

    <div className="menuCoffeContainer">
      <div className="filterMenuCoffee">
        
        <h2>MENU COFFE</h2>
        <div className="buttonContainer">
          <Link to="/coffee">
            <button>Cafe</button>
          </Link>
          <Link to="/comidas">
            <button>Comidas</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default MenuCoffee;
