  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Puzzle from "../puzzle"

  describe("Puzzle", () => {
    it("should render the icon without errors", async () => {
      render(<Puzzle data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })