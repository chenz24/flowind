  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import GatsbyEx from "../gatsby-ex"

  describe("GatsbyEx", () => {
    it("should render the icon without errors", async () => {
      render(<GatsbyEx data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })