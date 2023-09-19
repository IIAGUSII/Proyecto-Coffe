import { useRef } from "react";
import "../../Styles/FormContact.css";
import Banner from "./Banner";

function Form() {
  const name = useRef();
  const surname = useRef();
  const mail = useRef();
  const method = useRef();
  const workWithUs = useRef();
  const forOther = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Banner></Banner>
    <section className="form_contact">
      <div className="formulary">
        <form onSubmit={handleSubmit}>
          <div className="form_name">
            <label className="labels_form" htmlFor="first_name"></label>
            <input
              ref={name}
              placeholder="Ejemplo: Emiliano..."
              className="inputs_form"
              type="text"
              id="first_name"
              name="first_name"
              required
            />
            <label className="labels_form" htmlFor="last_name"></label>
            <input
              ref={surname}
              placeholder="Ejemplo: Martinez..."
              className="inputs_form"
              type="text"
              id="last_name"
              name="last_name"
              required
            />
            
              <label className="labels_form" htmlFor="email"></label>
              <input
                ref={mail}
                placeholder="dibu23@ejemplo.com"
                className="inputs_form"
                type="text"
                id="email"
                name="email"
                required
              />
            
          </div>
          <label className="text_form" htmlFor="consult">
            <p>¿Cuál es su consulta?</p>
          </label>
          <div className="radios_consult">
            <label className="input_consult pay" htmlFor="pay">
              <p>Método de pago</p>
              <input ref={method} className="" name="pay" type="radio" />
            </label>
            <label className="input_consult work" htmlFor="work">
              <p>Trabajar con nosotros</p>
              <input ref={workWithUs} className="" name="pay" type="radio" />
            </label>
            <label className="input_consult other" htmlFor="other">
              <p>Otro</p>
              <input ref={forOther} className="" name="pay" type="radio" />
            </label>
          </div>
          <div className="button">
            <button className="btn_form" type="submit">
              ¡CONTACTANOS!
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Form;
