function ModalWithForm({ title }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h1 className="title">{title}</h1>
        <form></form>
      </div>
    </div>
  );
}

export default ModalWithForm;
