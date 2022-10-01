import Card from "../../Components/Card"
import { render, screen } from "../test-utils"

const cardInfo = {
    name: "John Mayer",
    username: "johnny",
    id: 2
}

describe("Card", () => {
    it("Should render the proper information", () => {
        render(<Card props={cardInfo} />)
        const title = screen.getByText("John Mayer")
        const nickname = screen.getByText("johnny")
        const id = screen.getByText("2")

        expect(title).toBeInTheDocument()
        expect(nickname).toBeInTheDocument()
        expect(id).toBeInTheDocument()

        })
    it("Should render a link for every Card", ()=>{
        render(<Card props={cardInfo} />)
        const link = screen.getByRole("link")
        expect(link).toBeInTheDocument()
    })
})