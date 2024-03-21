  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ReactJsEx from "../react-js-ex"

  describe("ReactJsEx", () => {
    it("should render the icon without errors", async () => {
      render(<ReactJsEx data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })