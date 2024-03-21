  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import PauseSolid from "../pause-solid"

  describe("PauseSolid", () => {
    it("should render the icon without errors", async () => {
      render(<PauseSolid data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })