import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full name"
          value={state.fullName}
          name="fullName"
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          value={state.email}
          name="email"
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
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
