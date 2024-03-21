  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ArrowUpDown from "../arrow-up-down"

  describe("ArrowUpDown", () => {
    it("should render the icon without errors", async () => {
      render(<ArrowUpDown data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })