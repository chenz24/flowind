  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import EllipsisVertical from "../ellipsis-vertical"

  describe("EllipsisVertical", () => {
    it("should render the icon without errors", async () => {
      render(<EllipsisVertical data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })