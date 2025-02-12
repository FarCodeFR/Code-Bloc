import { NavLink, Outlet } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <>
      <header className="container-home-navigation">
        <h1>Code-Bloc</h1>
        <nav>
          <NavLink to="/profil">Profil</NavLink>
          <NavLink to="create-code">Création code</NavLink>
          <NavLink to="my-code">Votre code</NavLink>
          <NavLink to="legal-noties">Mentions légales</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
