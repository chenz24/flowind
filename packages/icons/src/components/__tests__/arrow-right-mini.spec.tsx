  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ArrowRightMini from "../arrow-right-mini"

  describe("ArrowRightMini", () => {
    it("should render the icon without errors", async () => {
      render(<ArrowRightMini data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })