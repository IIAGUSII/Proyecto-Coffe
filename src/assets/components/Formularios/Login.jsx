import "./Login.css";

function Login() {
  return (
    <>
      <main>
        <section className="form_login">
          <div className="all_formulary">
            <form action="process_login" method="post">
              <div className="form_users">
                <label className="label_user_login" htmlFor="user">
                  <input
                    placeholder="Ingrese su usuario..."
                    className="inputs_user"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </label>
                <label
                  className="label_password_login"
                  htmlFor="password_login"
                >
                  <input
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
                  <button className="button_register" type="submit">
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
