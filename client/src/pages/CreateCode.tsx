import FormCard from "../components/FormCard";
import "../styles/form-card.css";
import type { Card } from "../types/vite-env";

function CreateCode() {
  const handleSubmit = async (card: Card) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/card`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
  };
  return (
    <>
      <FormCard
        defaultValue={{ title: "", description: "", image: "" }}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default CreateCode;
