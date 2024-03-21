  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import PlusMini from "../plus-mini"

  describe("PlusMini", () => {
    it("should render the icon without errors", async () => {
      render(<PlusMini data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })