  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import PencilSquare from "../pencil-square"

  describe("PencilSquare", () => {
    it("should render the icon without errors", async () => {
      render(<PencilSquare data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })