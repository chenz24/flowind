  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Home from "../home"

  describe("Home", () => {
    it("should render the icon without errors", async () => {
      render(<Home data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })