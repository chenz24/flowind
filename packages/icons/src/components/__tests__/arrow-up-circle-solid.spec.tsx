  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ArrowUpCircleSolid from "../arrow-up-circle-solid"

  describe("ArrowUpCircleSolid", () => {
    it("should render the icon without errors", async () => {
      render(<ArrowUpCircleSolid data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })