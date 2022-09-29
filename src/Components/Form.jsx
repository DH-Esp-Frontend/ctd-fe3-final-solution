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
  const [state, setState] = useState({ fullName: "", email: "", error: false });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validName(state.fullName);
    const isEmailValid = validName(state.email);

    if (isEmailValid && isNameValid) {
      alert(`Thanks ${state.fullName} we will contact you as soon as possible`);
      setState({ fullName: "", email: "" });
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
      {state.error ? <p>Por favor verifique su información nuevamente</p> : null}
    </div>
  );
};

export default Form;
