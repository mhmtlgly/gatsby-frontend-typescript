import React from "react"
import { render } from "@testing-library/react"

import { CookieBanner } from "./index"

describe(`CookieBanner Component`, () => {
  it(`has heading`, () => {
    const { container } = render(<CookieBanner />)
    expect(container.querySelector(`h2`)).toBeInTheDocument()
  })

  it(`has heading value`, () => {
    const { getByText } = render(<CookieBanner />)
    const text = `Cookie`
    const child = getByText(text)
    expect(child).toBeInTheDocument()
  })
})
