  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import X from "../x"

  describe("X", () => {
    it("should render the icon without errors", async () => {
      render(<X data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })