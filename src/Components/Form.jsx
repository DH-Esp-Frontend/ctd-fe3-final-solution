import { useState, useContext } from "react";
import { ContextGlobal } from './utils/global.context';
import styles from "./Form.module.css";

const Form = () => {
  const [state, setState] = useState({
    login: "",
    password: "",
  });

  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO Login in the API
  };

  return (
    <div className={`text-center card container ${styles.card} ${isDarkMode ? styles.cardDark : ''}`}>
      <div className={`card-body ${styles.CardBody}`}>
        <form onSubmit={handleSubmit}>
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Login"
            value={state.login}
            name="login"
            onChange={handleChange}
            required
          />
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Password"
            value={state.password}
            name="email"
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
