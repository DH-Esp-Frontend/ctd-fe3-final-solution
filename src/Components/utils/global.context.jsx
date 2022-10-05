import { createContext, useEffect, useMemo, useReducer } from "react";
import { actions, initialState, reducer } from "./reducer.service";



export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const providerState = useMemo(()=> ({
    data: state.data,
    theme: state.theme,
    setData: (array) =>{
      dispatch({type: actions.SET_DATA, payload: array})
    },
    setDarkTheme: ()=>{
      dispatch({type: actions.SET_THEME_DARK})
    },
    setLightTheme: ()=>{
      dispatch({type: actions.SET_THEME_LIGHT})
    }
  }), [state, dispatch])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => providerState.setData(data) );
  }, [providerState]);

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};
