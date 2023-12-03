import "./Register.css";

function Register() {
  return (
    <>
      <main>
        <article className="main_register">
          <section className="form_register">
            <div className="form">
              <form action="process_contact" method="post">
                <div className="form_person">
                  <label className="label_name" htmlFor="name">
                    <input
                      placeholder="Ingrese su nombre..."
                      className="inputs_form"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </label>

                  <label className="label_last" htmlFor="last_name">
                    <input
                      placeholder="Ingrese su apellido..."
                      className="inputs_form"
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                    />
                  </label>

                  <label className="label_email" htmlFor="email-register">
                    <input
                      placeholder="Ingrese su email..."
                      className="inputs_form"
                      type="text"
                      id="email-register"
                      name="email"
                      required
                    />
                  </label>

                  <label className="label_password" htmlFor="password">
                    <input
                      placeholder="ingrese su contraseña"
                      className="inputs_form"
                      type="password"
                      name="password"
                      id="password"
                      required
                    />
                  </label>
                </div>
                <section className="date_all">
                  <label className="label_date" htmlFor="date">
                    Fecha de nacimiento
                    <input
                      className="inputs_form date"
                      name="date"
                      type="date"
                    />
                  </label>
                </section>
                <section className="gender_all">
                  <div className="gender_div">
                    <legend className="gender">Genero</legend>
                    <label className="input_gender man" htmlFor="gender">
                      <p>Hombre</p>
                      <input className="" name="gender" type="radio" />
                    </label>
                    <label className="input_gender woman" htmlFor="gender">
                      <p className="">Mujer</p>
                      <input className="" name="gender" type="radio" />
                    </label>
                    <label
                      className="input_gender otherRegister"
                      htmlFor="gender"
                    >
                      <p>Otro</p>
                      <input className="" name="gender" type="radio" />
                    </label>
                  </div>
                </section>
                <section className="button_all">
                  <div className="button_form">
                    <button className="button_register" type="submit">
                      Registrarse
                    </button>
                  </div>
                </section>
              </form>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
export default Register;
