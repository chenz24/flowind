  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import LightBulb from "../light-bulb"

  describe("LightBulb", () => {
    it("should render the icon without errors", async () => {
      render(<LightBulb data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })