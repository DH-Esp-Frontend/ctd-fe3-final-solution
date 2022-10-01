import { render } from "@testing-library/react"
import { ContextProvider } from "../Components/utils/global.context"

const renderWithContext = (children, providerValue)=>{
    return render(
        <ContextProvider value={providerValue || {theme: "light", data: []}} >   
            {children}
        </ContextProvider>
    )
}
export * from "@testing-library/react"
export {renderWithContext as render}    