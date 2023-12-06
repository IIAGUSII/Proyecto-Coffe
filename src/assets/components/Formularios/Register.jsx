import { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [profile, setProfile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        console.log("Registro exitoso");
        window.location.href = "/login";
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error al conectarse con el servidor:", error);
    }
  };

  return (
    <>
      <main>
        <article className="main_register">
          <section className="form_register">
            <div className="form">
              <form onSubmit={handleSubmit} action="/register" method="POST">
                <div className="form_person">
                  <label className="label_name" htmlFor="name">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ingrese su nombre completo..."
                      className="inputs_person"
                      type="text"
                      id="name_person"
                      name="name"
                      required
                    />
                  </label>

                  <label className="label_profile" htmlFor="url">
                    <input
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      type="url"
                      name="url"
                      id="url_person"
                      placeholder="Ingrese una URL para foto de perfil..."
                      className="inputs_person"
                      pattern="https://.*"
                      required
                    />
                  </label>

                  <label className="label_email" htmlFor="email">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ingrese su email..."
                      className="inputs_person"
                      type="text"
                      id="email_person"
                      name="email"
                      required
                    />
                  </label>

                  <label className="label_password" htmlFor="password">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingrese su contraseña..."
                      className="inputs_person"
                      type="password"
                      name="password"
                      id="password_person"
                      required
                    />
                  </label>
                </div>
                <section className="date_all">
                  <label className="label_date" htmlFor="date">
                    Fecha de nacimiento
                    <input
                      className="inputs_person date"
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
                    <button
                      className="button_register"
                      type="submit"
                      value="save"
                    >
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
