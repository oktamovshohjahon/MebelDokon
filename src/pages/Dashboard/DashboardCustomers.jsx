import { useState } from "react";

// image
import Image from "../../assets/images/mebel.jpg";
import { NavLink } from "react-router-dom";
import HomeFurniture from "../Home/HomeFurniture";

function DashboardCustomers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Samar",
      email: "samar@gmail.com",
      image: Image,
      title: "Lorem ipsum dolor sit.",
      phoneNumber: "99 999 99 99",
      productId: 1,
    },
    {
      id: 2,
      name: "Sardor",
      email: "sardor@gmail.com",
      image: Image,
      title: "Lorem ipsum dolor sit.",
      phoneNumber: "99 999 99 99",
      productId: 2,
    },
    {
      id: 3,
      name: "Fozil",
      email: "fozil@gmail.com",
      image: Image,
      title: "Lorem ipsum dolor sit.",
      phoneNumber: "99 999 99 99",
      productId: 3,
    },
    {
      id: 4,
      name: "Samar",
      email: "samar@gmail.com",
      image: Image,
      title: "Lorem ipsum dolor sit.",
      phoneNumber: "99 999 99 99",
      productId: 4,
    },
    {
      id: 5,
      name: "Sardor",
      email: "sardor@gmail.com",
      image: Image,
      title: "Lorem ipsum dolor sit.",
      phoneNumber: "99 999 99 99",
      productId: 5,
    },
    {
      id: 6,
      name: "Fozil",
      email: "fozil@gmail.com",
      image: Image,
      title: "Lorem ipsum dolor sit.",
      phoneNumber: "99 999 99 99",
      productId: 6,
    },
  ]);

  return (
    <div className="container">
      <div className="welcome-dashboard">
        <div className="welcome-dashboard-greeting">
          <center>
            <h1 className="title">Hush kelibsiz Umar !</h1>
          </center>
        </div>
        <center>
        <h1 className="title" style={{ fontSize: "26px" }}>
            Tabriklayman! Kimdir sizning mahsulotlaringizni sotib oldi!
          </h1>
        </center>
        <div className="welcome-dashboard-customer">
          
          {customers.map((customer) => {
            return (
              <HomeFurniture
                title={customer.title}
                customerName={customer.name}
                customerEmail={customer.email}
                customerNumber={customer.phoneNumber}
                productId={customer.productId}
                image={customer.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashboardCustomers;
