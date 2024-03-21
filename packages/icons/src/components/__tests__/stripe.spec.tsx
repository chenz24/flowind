  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Stripe from "../stripe"

  describe("Stripe", () => {
    it("should render the icon without errors", async () => {
      render(<Stripe data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })