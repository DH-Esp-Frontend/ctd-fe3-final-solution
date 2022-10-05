import { createContext, useEffect, useMemo, useState } from "react";

const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const providerState = useMemo(() => ({ state, setState }), [state, setState]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setState((prev) => ({ ...prev, data })));
  }, [state]);

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};
