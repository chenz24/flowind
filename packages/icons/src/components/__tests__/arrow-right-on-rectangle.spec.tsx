  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ArrowRightOnRectangle from "../arrow-right-on-rectangle"

  describe("ArrowRightOnRectangle", () => {
    it("should render the icon without errors", async () => {
      render(<ArrowRightOnRectangle data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })