import { NavLink } from "react-router-dom";
import "../styles/login.css";

function Login() {
  return (
    <section className="container-form-login">
      <h1>Ravie de vous revoir</h1>
      <form>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          placeholder="codeBloc@live.fr"
          id="email"
          name="email"
        />
        <label htmlFor="pwd">Password:</label>
        <input type="password" placeholder="*******" id="pwd" name="pwd" />
      </form>
      <section>
        <NavLink to="/register">S'inscrire</NavLink>
        <NavLink to="/login">Se connecter</NavLink>
      </section>
    </section>
  );
}

export default Login;
