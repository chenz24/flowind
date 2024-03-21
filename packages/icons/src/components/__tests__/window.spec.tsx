  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Window from "../window"

  describe("Window", () => {
    it("should render the icon without errors", async () => {
      render(<Window data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })