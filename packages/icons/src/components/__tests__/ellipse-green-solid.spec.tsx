  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import EllipseGreenSolid from "../ellipse-green-solid"

  describe("EllipseGreenSolid", () => {
    it("should render the icon without errors", async () => {
      render(<EllipseGreenSolid data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })