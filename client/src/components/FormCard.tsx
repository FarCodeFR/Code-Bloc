function FormCard() {
  function handleKeyDown(el: React.ChangeEvent<HTMLTextAreaElement>) {
    const target = el.target;
    target.style.height = "inherit";
    target.style.height = `${el.target.scrollHeight}px`;
  }
  return (
    <form className="container-form-card">
      <figure>
        <input type="text" placeholder="Function handleClick" />
        <select>
          <option value="outils">--Outils--</option>
          <option value="react">React</option>
          <option value="express">Express.js</option>
          <option value="css">Css</option>
        </select>
        <textarea name="text" onChange={handleKeyDown}>
          Votre code
        </textarea>
      </figure>
    </form>
  );
}
export default FormCard;
