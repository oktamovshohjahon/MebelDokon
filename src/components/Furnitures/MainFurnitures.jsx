// hooks
import { useFetch } from "../../hooks/useFetch";

// packages
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MainFurnitures() {
  // fetch
  const {
    data: products,
    error,
    isPending,
  } = useFetch("https://fakestoreapi.com/products?limit=99");

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
                    product.category
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                      ? "product"
                      : "hidden"
                  }
                  key={product.id}
                >
                  <img
                    src={product.image}
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
                    <NavLink to={`/products/${product.id}`}>Ko'proq</NavLink>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      {isPending ? <h1 className="title">Loading ...</h1> : ""}
      {error ? <h1 className="title">Something went wrong: {error}</h1> : ""}
    </div>
  );
}

export default MainFurnitures;
