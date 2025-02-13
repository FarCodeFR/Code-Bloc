import { NavLink } from "react-router-dom";
import "../styles/form.css";

function Form() {
  return (
    <header className="container-form">
      <section>
        <h1>Bienvenue sur Logo-Bloc</h1>
      </section>
      <nav>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/register">register</NavLink>
      </nav>
    </header>
  );
}

export default Form;
