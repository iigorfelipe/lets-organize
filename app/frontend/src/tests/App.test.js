import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '../App'

describe('Visualização da aplicação', () => {
  render(<App />)

  test('É esperado que os valores do select estão corretos', () => {
    const stts = screen.getByText(/status/i)
    const abcd = screen.getByText(/alfabética/i)
    const data = screen.getByText(/data de criação/i)

    expect(stts).toBeInTheDocument()
    expect(abcd).toBeInTheDocument()
    expect(data).toBeInTheDocument()
  })
})
