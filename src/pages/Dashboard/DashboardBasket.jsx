// packages
import { useState } from "react";
import { NavLink } from "react-router-dom";

// elements
import HomeFurniture from "../Home/HomeFurniture";
import Image from "../../assets/images/mebel.jpg";
import ModalWithForm from "../Modal/ModalWithForm";
import SimpleModal from "../Modal/SimpleModal";

function DashboardBasket() {
  // modal
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  // data
  const [furnitures, setFurnitures] = useState([
    {
      id: 1,
      title: "Furniture 1",
      image: Image,
      description:
        "Something description. Something description. Something description. Something description. Something description. Something description.",
      price: "300$",
    },
    {
      id: 2,
      title: "Furniture 2",
      image: Image,
      description:
        "Something description. Something description. Something description. Something description. Something description. Something description.",
      price: "300$",
    },
    {
      id: 3,
      title: "Furniture 3",
      image: Image,
      description:
        "Something description. Something description. Something description. Something description. Something description. Something description.",
      price: "300$",
    },
  ]);

  return (
    <div className="container">
      <div className="basket">
        <h1 className="title">Sizning savatchangizdagi mahsulotlar:</h1>
        <div className="basket-items">
          {furnitures ? (
            furnitures.map((furniture) => {
              return (
                <>
                  <HomeFurniture
                    title={furniture.title}
                    image={furniture.image}
                    description={furniture.description}
                    price={furniture.price}
                    key={furniture.id}
                    button={true}
                    setModal={setModal}
                  />
                </>
              );
            })
          ) : (
            <h1 className="title">
              Siz hali hech nimani savatchangizga solmadingiz.{" "}
              <NavLink className={"link"}>Mahsulotlar</NavLink>
            </h1>
          )}
        </div>
      </div>
      {modal ? (
        <ModalWithForm setModal={setModal} setSuccess={setSuccess} />
      ) : (
        ""
      )}
      {success ? (
        <SimpleModal
          title={"Tabriklaymiz"}
          description={"siz muvaffaqiyatli buyurtma berdingiz"}
          setModal={setSuccess}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default DashboardBasket;
