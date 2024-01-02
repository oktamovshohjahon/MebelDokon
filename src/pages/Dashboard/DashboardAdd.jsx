import { useState } from "react";
import SimpleModal from "../Modal/SimpleModal";
import { NavLink } from "react-router-dom";

function DashboardAdd() {
  // data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [image, setImage] = useState("");

  // err
  const [passwordErr, setPasswordErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);
  const [passwordMatchErr, setPasswordMatchErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  // modal
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <div className="dashboard-add" style={{ marginBottom: "50px" }}>
        <center>
          <h1 className="title">Mahsulot qo'shing !</h1>
          <div className="login settings">
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <span>Kategoriyani kiriting</span>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  placeholder=""
                  required
                />
                {firstNameErr ? (
                  <>
                    <span className="err">Bu qismni to'ldirish shart !</span>
                  </>
                ) : (
                  ""
                )}
              </label>
              <label>
                <span>Mahsulot nomini kiriting</span>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder=""
                  required
                />
                {emailErr ? (
                  <>
                    <span className="err">Bu qismni to'ldirish shart !</span>
                  </>
                ) : (
                  ""
                )}
              </label>
              <label>
                <span>Mahsulot haqida qisqacha kiriting</span>
                <textarea
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder=""
                  required
                />
                {passwordErr ? (
                  <span className="err">Bu qismni to'ldirish shart !</span>
                ) : (
                  ""
                )}
              </label>
              <label>
                <span>Mahsulot narxini kiriting</span>
                <input
                  type="number"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  value={repeatPassword}
                  placeholder=""
                  required
                />
                {repeatPasswordErr ? (
                  <span className="err">Bu qismni to'ldirish shart !</span>
                ) : (
                  ""
                )}
              </label>
              <label>
                <span>Mahsulot rasmini kiriting</span>
                <input
                  type="file"
                  placeholder=""
                  required
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
                {imageErr ? (
                  <span className="err">Bu qismni to'ldirish shart</span>
                ) : (
                  ""
                )}
              </label>
              <button
                type="button"
                onClick={() => {
                  setFirstNameErr(false);
                  setImageErr(false);
                  setEmailErr(false);
                  setPasswordErr(false);
                  setPasswordMatchErr(false);
                  if (
                    password &&
                    email &&
                    repeatPassword &&
                    firstName &&
                    image
                  ) {
                    setEmail("");
                    setPassword("");
                    setFirstName("");
                    setRepeatPassword("");
                    setEmailErr(false);
                    setPasswordErr(false);
                    setPasswordMatchErr(false);
                    setRepeatPasswordErr(false);
                    setFirstNameErr(false);
                    setImageErr(false);
                    setModal(true);
                    location.href = "/products/1";
                  }

                  if (!email) {
                    setEmailErr(true);
                  }

                  if (!password) {
                    setPasswordErr(true);
                  }

                  if (!firstName) {
                    setFirstNameErr(true);
                  }

                  if (!repeatPassword) {
                    setRepeatPasswordErr(true);
                  }

                  if (!image) {
                    setImageErr(true);
                  }
                }}
                className="button"
              >
                Mahsulot qo'shish
              </button>
            </form>
          </div>
          {modal ? (
            <SimpleModal
              title="Tabriklaymiz"
              description={
                "Siz muvaffaqiyatli mahsulot qo'shdingiz. Mahsulot havoalsi"
              }
              setModal={setModal}
            />
          ) : (
            ""
          )}
        </center>
      </div>
    </div>
  );
}

export default DashboardAdd;
