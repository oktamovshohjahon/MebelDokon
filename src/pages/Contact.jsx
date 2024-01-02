import { useState } from "react";

function Contact() {
  // data
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  // err
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  return (
    <div className="container">
      <div className="contact">
        <center>
          <h1 className="title">Biz bilan bog'laning !</h1>
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
              <span className="err">Bu qismni to'ldirish shart !</span>
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
                <span className="err">Iltimos to'gri email kiriting !</span>
              </>
            ) : (
              ""
            )}
          </label>
          <label>
            <span>Xabaringizni kiriting</span>
            <textarea
              onChange={(e) => {
                if (message.length < 500) {
                  setMessage(e.target.value);
                }
              }}
              required
              value={message}
              placeholder="Mening manashunday taklif yoki savolim bor edi. U mana bunda ..."
            />
            <span>{message.length}/500</span>
            {messageErr ? (
              <span className="err">Bu qismni to'ldirish shart !</span>
            ) : (
              ""
            )}
          </label>
          <button
            type="button"
            onClick={() => {
              if (
                email &&
                firstName &&
                message &&
                email.includes("@") &&
                email[email.length - 1] != "@"
              ) {
                setEmail("");
                setFirstName("");
                setMessage("");
                setSubmit(true);
                setEmailErr(false);
                setFirstNameErr(false);
                setMessageErr(false);
              }

              if (!email) {
                setEmailErr(true);
              }

              if (!firstName) {
                setFirstNameErr(true);
              }

              if (!message) {
                setMessageErr(true);
              }
            }}
            className={submit ? "button not-allowed" : "button"}
          >
            {submit
              ? "✔️ Xabaringiz muvaffaqiyatli yuborildi !"
              : "Xabarni yuborish"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
