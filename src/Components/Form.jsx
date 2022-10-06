import { useState, useContext } from "react";
import { ContextGlobal } from './utils/global.context';
import styles from "./Form.module.css";

const validName = (name) => {
  if (name.length > 5) return true;
  return false;
};

const validEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Form = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    error: false,
    isSubmitted: false,
  });

  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validName(state.fullName);
    const isEmailValid = validEmail(state.email);

    if (isEmailValid && isNameValid) {
      setState((prev) => ({ ...prev, isSubmitted: true, error: false }));
    } else setState((prev) => ({ ...prev, error: true }));
  };

  return (
    <div className={`text-center card container ${styles.card} ${isDarkMode ? styles.cardDark : ''}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <div className={`card-body ${styles.CardBody}`}>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            placeholder="Full name"
            value={state.fullName}
            name="fullName"
            onChange={handleChange}
          />
          <input
            className="form-control"
            placeholder="Email"
            value={state.email}
            name="email"
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
      {state.error ? (
        <p>Por favor verifique su información nuevamente</p>
      ) : null}
      {state.isSubmitted ? (
        <h3>
          Gracias {state.fullName}, te contactaremos cuando antes vía mail
        </h3>
      ) : null}
    </div>
  );
};

export default Form;
