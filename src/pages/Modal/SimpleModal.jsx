function SimpleModal({ title, description, setModal }) {
  return (
    <div className="overlay" onClick={() => setModal(false)}>
      <div className="modal">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default SimpleModal;
