import { render, screen } from "../../test-utils"
import Navbar from "../../../Components/Navbar"

describe("Navbar", ()=>{
    it("Should render 3 links", ()=>{
        render(<Navbar/>)
        const links = screen.getAllByRole("link")
        expect(links.length).toBeGreaterThanOrEqual(2)
    })
})