  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import CircleMiniFilledSolid from "../circle-mini-filled-solid"

  describe("CircleMiniFilledSolid", () => {
    it("should render the icon without errors", async () => {
      render(<CircleMiniFilledSolid data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })