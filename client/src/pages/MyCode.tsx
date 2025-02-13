import { useEffect, useState } from "react";
import type { Card } from "../types/vite-env";
import "../styles/my-code.css";

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
    <>
      {card.map((el) => {
        return (
          <section className="container-card-detail" key={el.id}>
            <figure>
              <h3>{el.title}</h3>
              <img src={el.image} alt="" />
              <figcaption>{el.description}</figcaption>
            </figure>
          </section>
        );
      })}
    </>
  );
}

export default MyCode;
