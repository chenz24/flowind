  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ServerSolid from "../server-solid"

  describe("ServerSolid", () => {
    it("should render the icon without errors", async () => {
      render(<ServerSolid data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })