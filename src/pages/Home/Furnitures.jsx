// components
import HomeFurniture from "./HomeFurniture";

// hooks
import { useState } from "react";
import a from "../../assets/images/mebel.jpg";

function Furnitures() {
  const [furnitures, setFurnitures] = useState([
    {
      id: 1,
      title: "Furniture 1",
      image: "./src/assets/images/mebel.jpg",
      description:
        "Something description. Something description. Something description. Something description. Something description. Something description.",
      price: "300$",
    },
    {
      id: 2,
      title: "Furniture 2",
      image: "./src/assets/images/mebel.jpg",
      description:
        "Something description. Something description. Something description. Something description. Something description. Something description.",
      price: "300$",
    },
    {
      id: 3,
      title: "Furniture 3",
      image: "./src/assets/images/mebel.jpg",
      description:
        "Something description. Something description. Something description. Something description. Something description. Something description.",
      price: "300$",
    },
  ]);

  return (
    <div className="furnitures">
      {furnitures ? (
        furnitures.map((furniture) => {
          return (
            <HomeFurniture
              title={furniture.title}
              image={furniture.image}
              description={furniture.description}
              price={furniture.price}
              key={furniture.id}
            />
          );
        })
      ) : (
        <h1 className="title">Uzur hozircha mebellar yo'q :(</h1>
      )}
    </div>
  );
}

export default Furnitures;
