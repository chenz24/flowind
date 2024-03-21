  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Loader from "../loader"

  describe("Loader", () => {
    it("should render the icon without errors", async () => {
      render(<Loader data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })