import { useState } from "react";

function DashboardClients() {
  const [clients, setClients] = useState([
    {
      firstName: "samar",
      email: "samar@gmail.com",
      phoneNumber: "99 999 99 99",
      clientId: 1,
    },
    {
      firstName: "samar",
      email: "samar@gmail.com",
      phoneNumber: "99 999 99 99",
      clientId: 2,
    },
    {
      firstName: "samar",
      email: "samar@gmail.com",
      phoneNumber: "99 999 99 99",
      clientId: 3,
    },
    {
      firstName: "samar",
      email: "samar@gmail.com",
      phoneNumber: "99 999 99 99",
      clientId: 4,
    },
    {
      firstName: "samar",
      email: "samar@gmail.com",
      phoneNumber: "99 999 99 99",
      clientId: 5,
    },
    {
      firstName: "samar",
      email: "samar@gmail.com",
      phoneNumber: "99 999 99 99",
      clientId: 6,
    },
  ]);

  return (
    <div className="container">
      <div className="clients">
        <h1 className="title">Mijozlaringizni quyida ko'rishingiz mumkin</h1>
        <div className="client-items">
          {clients.map((client) => {
            return (
              <div className="client" key={client.clientId}>
                <p className="description">Ismi: {client.firstName}</p>
                <p className="description">Emaili: {client.email}</p>
                <p className="description">
                  Telefon raqami: {client.phoneNumber}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashboardClients;
