import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import type { Card } from "../types/vite-env";
import "../styles/card-detail.css";
import CardDelete from "./CardDelete";

function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null as null | Card);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/card/${id}`)
      .then((response) => response.json())
      .then((data: Card) => {
        setCard(data);
        console.warn(data);
      });
  }, [id]);
  return (
    card && (
      <>
        <section className="container-card-detail-index">
          <figure>
            <h3>{card.title}</h3>
            <picture>
              <img src={card.image} alt="" />
            </picture>
            <figcaption>{card.description}</figcaption>
          </figure>
        </section>
        <NavLink id="modify-card" to={`/card/${card.id}/edit`}>
          Modifier
        </NavLink>
        {typeof card.id === "number" && (
          <CardDelete id={card.id}>Supprimer</CardDelete>
        )}
        <NavLink id="home-card" to={"/home/create-code"}>
          Accueil
        </NavLink>
      </>
    )
  );
}

export default CardDetail;
