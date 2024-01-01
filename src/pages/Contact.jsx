import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);

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
          </label>
          <button
            type="button"
            onClick={() => {
              setEmail("");
              setFirstName("");
              setMessage("");
              setSubmit(true);
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
