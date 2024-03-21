  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Spinner from "../spinner"

  describe("Spinner", () => {
    it("should render the icon without errors", async () => {
      render(<Spinner data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })