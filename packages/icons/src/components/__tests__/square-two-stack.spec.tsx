  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import SquareTwoStack from "../square-two-stack"

  describe("SquareTwoStack", () => {
    it("should render the icon without errors", async () => {
      render(<SquareTwoStack data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })