import React from "react"
import { render } from "@testing-library/react"

import { Advertisment } from "./index"

describe(`Advertisment Component`, () => {
  it(`has heading`, () => {
    const { container } = render(<Advertisment />)
    expect(container.querySelector(`h2`)).toBeInTheDocument()
  })

  it(`has heading value`, () => {
    const { getByText } = render(<Advertisment />)
    const text = `Ad Box`
    const child = getByText(text)
    expect(child).toBeInTheDocument()
  })
})
