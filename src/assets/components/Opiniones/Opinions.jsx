import "../../styles/Opinion.css";

import OpinionOne from "./OpinionOne";
import OpinionTwo from "./OpinionTwo";

function Opinions() {
  console.log("holap");
  return (
    <section className="opinions">
      <h2>OPINIONES</h2>
      <div className="opinions_container">
        <OpinionOne></OpinionOne>
        <OpinionTwo></OpinionTwo>
      </div>
    </section>
  );
}
export default Opinions;
