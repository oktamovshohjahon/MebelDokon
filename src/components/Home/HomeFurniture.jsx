function HomeFurniture({ title, image, description, price }) {
  return (
    <div className="furniture">
      <img src={image} width={"100%"} height="400px" alt="" />
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="description" style={{ marginTop: "10px" }}>
          Narxi: {price}
        </p>
      </div>
    </div>
  );
}

export default HomeFurniture;
