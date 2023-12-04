import "./Opinion.css";

import OpinionOne from "./OpinionOne";
import OpinionTwo from "./OpinionTwo";
import OpinionThree from "./OpinionThree";

function Opinions() {
  console.log("holap");
  return (
    <section className="opinions">
      <h2>OPINIONES</h2>
      <div className="opinions_container">
        <OpinionOne></OpinionOne>
        <OpinionTwo></OpinionTwo>
        <OpinionThree />
      </div>
    </section>
  );
}
export default Opinions;
