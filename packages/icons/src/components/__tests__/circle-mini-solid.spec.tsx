  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import CircleMiniSolid from "../circle-mini-solid"

  describe("CircleMiniSolid", () => {
    it("should render the icon without errors", async () => {
      render(<CircleMiniSolid data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })