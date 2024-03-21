  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import BuildingStorefront from "../building-storefront"

  describe("BuildingStorefront", () => {
    it("should render the icon without errors", async () => {
      render(<BuildingStorefront data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })