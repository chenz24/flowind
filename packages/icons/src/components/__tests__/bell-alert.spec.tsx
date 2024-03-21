  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import BellAlert from "../bell-alert"

  describe("BellAlert", () => {
    it("should render the icon without errors", async () => {
      render(<BellAlert data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })