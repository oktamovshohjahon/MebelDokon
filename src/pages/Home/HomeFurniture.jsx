import { NavLink } from "react-router-dom";
import Image from "../../assets/images/mebel.jpg";

function HomeFurniture({
  title,
  image,
  description,
  price,
  customerName,
  customerEmail,
  customerNumber,
  productId,
  button,
  setModal,
}) {
  return (
    <div className="furniture" key={productId}>
      <img src={image} width={"100%"} height="400px" alt="" />
      <div>
        <h1 className="title">{title}</h1>
        {description ? <p className="description">{description}</p> : ""}
        {price ? (
          <p className="description" style={{ marginTop: "10px" }}>
            Narxi: {price}
          </p>
        ) : (
          ""
        )}
        {customerName ? (
          <p className="description">Mijozning ismi: {customerName}</p>
        ) : (
          ""
        )}
        {customerEmail ? (
          <p className="description">Mijozning emaili: {customerEmail}</p>
        ) : (
          ""
        )}
        {customerNumber ? (
          <p className="description">Mijozning raqami: {customerNumber}</p>
        ) : (
          ""
        )}
        {productId ? (
          <div className="product-info-container">
            <NavLink to={"/products/" + productId} className={"description"}>
              Mahsulot haqida
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {button ? (
          <button className="button" onClick={() => setModal(true)}>
            Sotib olish
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default HomeFurniture;
