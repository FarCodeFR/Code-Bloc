import { useEffect, useState } from "react";
import type { Card } from "../types/vite-env";
import "../styles/my-code.css";
import { NavLink } from "react-router-dom";

function MyCode() {
  const [card, setCard] = useState([] as Card[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/card`)
      .then((response) => response.json())
      .then((data: Card[]) => {
        setCard(data);
      });
  }, []);

  return (
    <main className="stockage-card">
      {card.map((el) => (
        <NavLink to={`/card/${el.id}`} key={el.id}>
          <section className="container-card-detail">
            <figure>
              <h3>{el.title}</h3>
              <picture>
                <img src={el.image} alt="" />
              </picture>
              <figcaption>{el.description}</figcaption>
            </figure>
          </section>
        </NavLink>
      ))}
    </main>
  );
}

export default MyCode;
