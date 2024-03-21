  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import MagnifyingGlassMini from "../magnifying-glass-mini"

  describe("MagnifyingGlassMini", () => {
    it("should render the icon without errors", async () => {
      render(<MagnifyingGlassMini data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })