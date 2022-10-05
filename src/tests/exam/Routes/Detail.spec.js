import { mockSingleDentist } from "../../../mocks/data"
import Detail from "../../../Routes/Detail"
import { renderWithRouter, screen } from "../../test-utils"


describe("Detail Page", ()=>{
    it("Should render the proper information", async()=>{
        const route = "/dentist/1"
        const path = "/dentist/:id"
        renderWithRouter(<Detail/>, {route, path})
        const name = await screen.findByText(mockSingleDentist.name)
        const email = await screen.findByText(mockSingleDentist.email)
        const phone = await screen.findByText(mockSingleDentist.phone)
        const website = await screen.findByText(mockSingleDentist.website)

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
        expect(phone).toBeInTheDocument()
        expect(website).toBeInTheDocument()
    })
})