  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ArrowUpTray from "../arrow-up-tray"

  describe("ArrowUpTray", () => {
    it("should render the icon without errors", async () => {
      render(<ArrowUpTray data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })