  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Resize from "../resize"

  describe("Resize", () => {
    it("should render the icon without errors", async () => {
      render(<Resize data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })