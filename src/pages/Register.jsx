import { useState } from "react";
import SimpleModal from "./Modal/SimpleModal";

function Contact() {
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
  const [modal, setModal] = useState(false);

  // localStorage
  const localLogin = localStorage.getItem("login");
  let login;

  if (localLogin == "true") {
    login = true;
  } else {
    login = false;
  }

  return (
    <div className="container">
      {!login ? (
        <div className="login">
          <center>
            <h1 className="title">Ro'yhatdan o'ting !</h1>
          </center>
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
              <span>Emailingizni kiriting</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="umar123@gmail.com"
                required
              />
              {emailErr ? (
                <>
                  <span className="err">Bu qismni to'ldirish shart !</span>
                  <span className="err">Iltimos to'g'ri email kiriting !</span>
                </>
              ) : (
                ""
              )}
            </label>
            <label>
              <span>Parolingizni kiriting</span>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="parol"
                required
              />
              {passwordErr ? (
                <span className="err">Bu qismni to'ldirish shart !</span>
              ) : (
                ""
              )}
            </label>
            <label>
              <span>Parolingizni takrorlang</span>
              <input
                type="password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={repeatPassword}
                placeholder="parol"
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
                console.log(password);
                console.log(repeatPassword);
                console.log(password != repeatPassword);
                if (
                  password &&
                  email &&
                  email.includes("@") &&
                  email[email.length - 1] != "@" &&
                  repeatPassword &&
                  firstName &&
                  repeatPassword == password
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
                  setModal(true);
                  localStorage.setItem("login", true);
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

                if (password != repeatPassword) {
                  setPasswordMatchErr(true);
                }
              }}
              className="button"
            >
              Ro'yhatdan o'tish
            </button>
          </form>
        </div>
      ) : (
        (location.href = "/")
      )}

      {modal ? (
        <SimpleModal
          title="Tabriklaymiz"
          description="Siz muvaffaqiyatli ro'yhatdan o'tdingiz"
          setModal={setModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Contact;
