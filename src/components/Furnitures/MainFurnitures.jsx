// hooks
import { useFetch } from "../../hooks/useFetch";

// packages
import { NavLink } from "react-router-dom";
import { useState } from "react";

// components
import Loader from "../Loader";

function MainFurnitures() {
  // fetch
  const {
    data: products,
    error,
    isPending,
  } = useFetch("https://api.escuelajs.co/api/v1/products/");

  // search
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="products">
      <div className="products-search">
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Qidiring"
        />
      </div>
      <div className="product-items">
        {products
          ? products.map((product) => {
              return (
                <div
                  className={
                    product.title
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    product.category.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                      ? "product"
                      : "hidden"
                  }
                  key={product.id}
                >
                  <img
                    src={product.images[0]}
                    width={"300px"}
                    height="400px"
                    alt=""
                  />
                  <div className="product-information">
                    <h1 className="product-title">{product.title}</h1>
                    <div className="hr"></div>
                    <p className="description">{product.description}</p>
                    <div className="hr"></div>
                    <p className="description">narxi: {product.price}$</p>
                    <div className="hr"></div>
                    <p className="description">
                      Yaratilgan sanasi:{" "}
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
                    <NavLink to={`/products/${product.id}`}>Ko'proq</NavLink>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      {isPending ? <Loader /> : ""}
      {error ? <h1 className="title">Something went wrong: {error}</h1> : ""}
    </div>
  );
}

export default MainFurnitures;
