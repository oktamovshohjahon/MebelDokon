// hooks & packages
import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

// components
import Loader from "../Loader";
import PageCarousel from "../Carousel";

function FurnitureDetail() {
  // fetch
  const { id } = useParams();
  const url = "https://api.escuelajs.co/api/v1/products/" + id;
  const { data: product, error, isPending } = useFetch(url);

  // carousel
  const images = [];
  product
    ? product.images.forEach((image) => {
        images.push(image);
      })
    : "";

  // basket
  const [didAddBasket, setDidAddBasket] = useState(false);
  const [didLogined, setDidLogined] = useState(localStorage.getItem("login"));

  return (
    <div className="container">
      {product ? (
        <div className="product-detail">
          <div className="product-detail-image">
            <PageCarousel images={images} />
          </div>
          <div className="product-detail-information">
            <h1 className="title">{product.title}</h1>
            <div className="hr"></div>
            <p className="description">
              {product.description +
                " " +
                product.description +
                " " +
                product.description +
                product.description +
                " " +
                product.description +
                " " +
                product.description +
                product.description +
                " " +
                product.description +
                " " +
                product.description}
            </p>
            <div className="hr"></div>
            <p className="description">Kategoriya: {product.category.name}</p>
            <div className="hr"></div>
            <p className="description">
              Yaralgan sanasi:{" "}
              {product.creationAt.charAt(0) +
                product.creationAt.charAt(1) +
                product.creationAt.charAt(2) +
                product.creationAt.charAt(3) +
                product.creationAt.charAt(4) +
                product.creationAt.charAt(5) +
                product.creationAt.charAt(6) +
                product.creationAt.charAt(7) +
                product.creationAt.charAt(8) +
                product.creationAt.charAt(9)}
            </p>
            <div className="hr"></div>
            <p className="description">
              Oxirgi yangilanish:{" "}
              {product.updatedAt.charAt(0) +
                product.updatedAt.charAt(1) +
                product.updatedAt.charAt(2) +
                product.updatedAt.charAt(3) +
                product.updatedAt.charAt(4) +
                product.updatedAt.charAt(5) +
                product.updatedAt.charAt(6) +
                product.updatedAt.charAt(7) +
                product.updatedAt.charAt(8) +
                product.updatedAt.charAt(9)}
            </p>
            <div className="hr"></div>
            <button
              className={didAddBasket ? "button not-allowed" : "button"}
              onClick={() => (didLogined ? setDidAddBasket(true) : "")}
              to={didLogined ? "" : "/login"}
            >
              {didAddBasket
                ? "✔️ Savatchaga muvaffaqiyatli qo'shildi !"
                : didLogined
                ? "Savatchaga qo'shish"
                : "Savatchaga qo'shish uchun tizimga kiring !"}
            </button>
            {didLogined ? (
              ""
            ) : (
              <NavLink to="/login" className={"button"}>
                Kirish uchun bu yerni bosing
              </NavLink>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      {isPending ? <Loader /> : ""}
      {error ? <h1 className="title">{error}</h1> : ""}
    </div>
  );
}

export default FurnitureDetail;
