  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ArrowLongLeft from "../arrow-long-left"

  describe("ArrowLongLeft", () => {
    it("should render the icon without errors", async () => {
      render(<ArrowLongLeft data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })