  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Bug from "../bug"

  describe("Bug", () => {
    it("should render the icon without errors", async () => {
      render(<Bug data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })