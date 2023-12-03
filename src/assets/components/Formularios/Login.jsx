import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const receivedToken = responseData.token;

        // Almacena el token en el estado
        setToken(receivedToken);

        // Almacena el token en localStorage
        localStorage.setItem("token", receivedToken);

        console.log("Login exitoso");
        console.log("Token obtenido:", receivedToken);
      } else {
        // Manejar errores en el login
        console.error("Error en el login");
      }
    } catch (error) {
      console.error("Error al conectarse con el servidor:", error);
    }
  };

  return (
    <>
      <main>
        <section className="form_login">
          <div className="all_formulary">
            <form onSubmit={handleSubmit} action="/login" method="POST">
              <div className="form_users">
                <label className="label_user_login" htmlFor="email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese su usuario..."
                    className="inputs_user"
                    type="text"
                    id="name"
                    name="email"
                    required
                  />
                </label>
                <label className="label_password_login" htmlFor="password">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="ingrese su contraseña..."
                    className="inputs_user"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </label>
              </div>
              <section className="button_all">
                <div className="button_form">
                  <button
                    className="button_register"
                    type="submit"
                    value="save"
                  >
                    Entrar
                  </button>
                </div>
              </section>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
export default Login;
