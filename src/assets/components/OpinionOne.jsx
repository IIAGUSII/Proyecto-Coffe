import señorito from "../img/señorito.webp";

function OpinionOne() {
  return (
    <div className="opinion_one">
      <img src={señorito} alt="" />
      <div className="text_opinion">
        <h3>
          "¡Un gran café Affogato! RECOMIENDO: Tomar un Affogato junto a una
          porción de la torta Brownie"
        </h3>
        <p>
          El café tiene un lindo ambiente, muy cálido; las flores tienen lindo
          olor y está muy limpio. ¡Recomiendo CODESPRESSO!
        </p>
      </div>
    </div>
  );
}

export default OpinionOne;
