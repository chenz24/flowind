  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Trash from "../trash"

  describe("Trash", () => {
    it("should render the icon without errors", async () => {
      render(<Trash data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })