import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "../Components/utils/global.context"

const renderWithContext = (children, providerValue)=>{
    return render(
        <BrowserRouter>
            <ContextProvider value={providerValue || {theme: "light", data: []}} >   
                {children}
            </ContextProvider>
        </BrowserRouter>
    )
}
export * from "@testing-library/react"
export {renderWithContext as render}    