import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type CardDeleteProps = {
  id: number;
  children: ReactNode;
};

function CardDelete({ id, children }: CardDeleteProps) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/api/card/${id}`, {
          method: "DELETE",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/home");
            alert("Carte supprimé");
          } else {
            alert("Erreur lors de la supression");
          }
        });
      }}
    >
      <button className="container-delete" type="submit">
        {children}
      </button>
    </form>
  );
}

export default CardDelete;
