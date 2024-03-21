  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import ChatBubble from "../chat-bubble"

  describe("ChatBubble", () => {
    it("should render the icon without errors", async () => {
      render(<ChatBubble data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })