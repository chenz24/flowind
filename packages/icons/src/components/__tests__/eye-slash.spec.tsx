  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import EyeSlash from "../eye-slash"

  describe("EyeSlash", () => {
    it("should render the icon without errors", async () => {
      render(<EyeSlash data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })