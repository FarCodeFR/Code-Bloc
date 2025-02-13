import { NavLink } from "react-router-dom";
import "../styles/register.css";

function Register() {
  return (
    <section className="container-form-register">
      <h1>Ravie de vous revoir</h1>
      <form>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          placeholder="codeBloc@live.fr"
          id="email"
          required
          name="email"
        />
        <label htmlFor="name">Identifiant:</label>
        <input type="text" id="name" placeholder="CodeBlock" name="name" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          placeholder="*******"
          id="password"
          required
          name="password"
        />
        <label htmlFor="confirmepassword">Confirme Password:</label>
        <input
          type="confirmepassword"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          placeholder="*******"
          id="confirmepassword"
          required
          name="confirmepassword"
        />
      </form>
      <section>
        <NavLink to="/register">
          <input type="submit" value="S'inscrire" />
        </NavLink>
        <NavLink to="/login">Se connecter</NavLink>
      </section>
    </section>
  );
}

export default Register;
