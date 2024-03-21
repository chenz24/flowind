  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import SquaresPlus from "../squares-plus"

  describe("SquaresPlus", () => {
    it("should render the icon without errors", async () => {
      render(<SquaresPlus data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })