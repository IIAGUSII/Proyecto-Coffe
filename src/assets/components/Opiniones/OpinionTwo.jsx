import AriProfile from "../../img/AriProfile.jpeg";

function OpinionTwo() {
  return (
    <div className="opinion_two">
      <img src={AriProfile} alt="" />
      <div className="text_opinion">
        <h3>
          “¡Es un café muy estético! RECOMIENDO: Tomar un Latte Art junto a sus
          medialunas de manteca, que son muy ricas”.
        </h3>
        <p>
          Las medialunas eran muy ricas y dulces, el Latte vino con crema extra
          muy deliciosa. ¡Totalmente recomendable!
        </p>
      </div>
      <h4>Ari</h4>
    </div>
  );
}

export default OpinionTwo;
