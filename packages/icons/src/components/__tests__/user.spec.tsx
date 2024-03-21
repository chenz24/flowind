  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import User from "../user"

  describe("User", () => {
    it("should render the icon without errors", async () => {
      render(<User data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })