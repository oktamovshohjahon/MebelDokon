import { useState } from "react";

// images
import Cancel from "../../assets/images/icons8-cancel.svg";

function Contact({ setModal, setSuccess }) {
  // data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // err
  const [passwordErr, setPasswordErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);
  const [passwordMatchErr, setPasswordMatchErr] = useState(false);

  // modal
  const [modal2, setModal2] = useState(false);

  return (
    <div className="overlay">
      <div className="modal login">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 className="title">Buyurtma bering !</h1>
          <img
            src={Cancel}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => setModal(false)}
          />
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <span>Ismingizni kiriting</span>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="Umar"
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
            <span>Familiyangizni kiriting</span>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Umidov"
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
            <span>Telefon raqamingizni kiriting</span>
            <input
              type="number"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="99 999 99 99"
              required
            />
            {passwordErr ? (
              <span className="err">Bu qismni to'ldirish shart !</span>
            ) : (
              ""
            )}
          </label>
          <label>
            <span>Manzilingizni kiriting</span>
            <input
              type="text"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              placeholder="Xorazm"
              required
            />
            {repeatPasswordErr ? (
              <span className="err">Bu qismni to'ldirish shart !</span>
            ) : (
              ""
            )}
            {passwordMatchErr ? (
              <span className="err">Parol mos emas !</span>
            ) : (
              ""
            )}
          </label>
          <button
            type="button"
            onClick={() => {
              setFirstNameErr(false);
              setEmailErr(false);
              setPasswordErr(false);
              if (password && email && repeatPassword && firstName) {
                setEmail("");
                setPassword("");
                setFirstName("");
                setRepeatPassword("");
                setEmailErr(false);
                setPasswordErr(false);
                setRepeatPasswordErr(false);
                setFirstNameErr(false);
                setSuccess(true);
                setModal(false);
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
            }}
            className="button"
          >
            Buyurtma berish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
