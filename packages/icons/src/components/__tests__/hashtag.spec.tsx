  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Hashtag from "../hashtag"

  describe("Hashtag", () => {
    it("should render the icon without errors", async () => {
      render(<Hashtag data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })