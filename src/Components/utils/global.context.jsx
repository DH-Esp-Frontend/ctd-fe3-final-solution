import { createContext, useEffect, useMemo, useState } from "react";
import { getDentist } from "./dentist.service";

const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined)

export const ContextProvider = ({children})=>{
    const [state, setState] = useState(initialState)
    

    const providerState = useMemo(()=>({state, setState}), [state, setState])


    useEffect(()=>{
        getDentist().then(data => setState(prev => ({...prev, data})))
    }, [])
    return(
        <ContextGlobal.Provider value={providerState}>
            {children}
        </ContextGlobal.Provider>
    )

}

