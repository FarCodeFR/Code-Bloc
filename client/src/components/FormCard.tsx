type CardData = {
  title: string;
  description: string;
  image: string;
};

interface CardFromProps {
  onSubmit: (card: CardData) => void;
  defaultValue: CardData;
  children?: React.ReactNode;
}

function FormCard({ defaultValue, onSubmit }: CardFromProps) {
  return (
    <>
      <form
        className="container-form-card"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const title = formData.get("title") as string;
          const description = formData.get("description") as string;
          const image = formData.get("image") as string;
          onSubmit({
            title,
            description,
            image,
          });
        }}
      >
        <figure>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={defaultValue.title}
            placeholder="Function handleClick"
          />
          <input
            name="image"
            required
            defaultValue={defaultValue.image}
            type="text"
            placeholder="Votre image"
          />
          <input
            name="description"
            required
            placeholder="Description"
            defaultValue={defaultValue.description}
            type="text"
          />
        </figure>
        <section className="container-card-button">
          <button type="submit">Ajouter</button>
        </section>
      </form>
    </>
  );
}
export default FormCard;
