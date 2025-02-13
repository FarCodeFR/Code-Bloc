import { useNavigate, useParams } from "react-router-dom";
import FormCard from "../components/FormCard";
import type { Card } from "../types/vite-env";

function CardEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (card: Card) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/card/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }).then((response) => {
      if (response.status === 204) {
        alert("Carte modifié ! 🎉");
        setTimeout(() => {
          navigate(`/card/${id}`);
        }, 500);
      }
    });
  };
  return (
    <FormCard
      defaultValue={{ title: "", description: "", image: "" }}
      onSubmit={handleSubmit}
    >
      Modifier
    </FormCard>
  );
}

export default CardEdit;
