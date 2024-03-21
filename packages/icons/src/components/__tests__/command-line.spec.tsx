  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import CommandLine from "../command-line"

  describe("CommandLine", () => {
    it("should render the icon without errors", async () => {
      render(<CommandLine data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })