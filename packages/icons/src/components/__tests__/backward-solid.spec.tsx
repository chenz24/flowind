  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import BackwardSolid from "../backward-solid"

  describe("BackwardSolid", () => {
    it("should render the icon without errors", async () => {
      render(<BackwardSolid data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })