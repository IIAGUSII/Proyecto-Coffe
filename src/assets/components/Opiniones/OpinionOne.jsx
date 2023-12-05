import AgusProfile from "../../img/AgusProfile.jpeg";

function OpinionOne() {
  return (
    <div className="opinion_one">
      <img src={AgusProfile} alt="" />
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
      <h4>Agus</h4>
    </div>
  );
}

export default OpinionOne;
