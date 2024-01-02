import { useState } from "react";
import SimpleModal from "../Modal/SimpleModal";

function DashboardSettings() {
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

  return (
    <div className="container">
      <div className="settings">
        <div className="login settings">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>Yangi ismingizni kiriting</span>
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
              <span>Yangi emailingizni kiriting</span>
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
              <span>Yangi parolingizni kiriting</span>
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
              <span>Yangi parolingizni takrorlang</span>
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
                console.log(password);
                console.log(repeatPassword);
                console.log(password != repeatPassword);
                if (
                  password ||
                  email ||
                  email.includes("@") ||
                  email[email.length - 1] != "@" ||
                  repeatPasswordErr ||
                  firstName ||
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
                }
              }}
              className="button"
            >
              Ma'lumotlarni yangilash
            </button>
          </form>
          {modal ? (
            <SimpleModal
              title="Tabriklaymiz"
              description="Siz muvaffaqiyatli ma'lumotlaringizni yangiladingiz"
              setModal={setModal}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardSettings;
