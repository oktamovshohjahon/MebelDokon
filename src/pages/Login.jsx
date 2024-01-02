import { useState } from "react";

function Contact() {
  // data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // err
  const [passwordErr, setPasswordErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

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
            <h1 className="title">Tizim kiring !</h1>
          </center>
          <form onSubmit={(e) => e.preventDefault()}>
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
            <button
              type="button"
              onClick={() => {
                setEmailErr(false);
                setPasswordErr(false);
                if (
                  password &&
                  email &&
                  email.includes("@") &&
                  email[email.length - 1] != "@"
                ) {
                  setEmail("");
                  setPassword("");
                  setEmailErr(false);
                  setPasswordErr(false);
                  localStorage.setItem("login", true);
                }

                if (!email) {
                  setEmailErr(true);
                }

                if (!password) {
                  setPasswordErr(true);
                }
              }}
              className="button"
            >
              Tizimga kirish
            </button>
          </form>
        </div>
      ) : (
        (location.href = "/")
      )}
    </div>
  );
}

export default Contact;
