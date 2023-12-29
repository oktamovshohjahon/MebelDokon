// hooks
import { useFetch } from "../../hooks/useFetch";

function MainFurnitures() {
  const { data, error, isPending } = useFetch(
    "https://fakestoreapi.com/products?limit=5"
  );

  console.log(data);

  return (
    <div className="products">
      {data
        ? data.map((product) => {
            return (
              <div className="product" key={product.id}>
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
                  <p className="description">narxi: {product.price}</p>
                  <div className="hr"></div>
                </div>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default MainFurnitures;
