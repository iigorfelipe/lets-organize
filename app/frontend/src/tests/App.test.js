import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../App'

describe('ButtonsUp Component', () => {
  test('É esperado que os valores do select estão corretos', () => {
    render(<App />)
    const stts = screen.getByText(/status/i)
    const abcd = screen.getByText(/alfabética/i)
    const data = screen.getByText(/data de criação/i)

    expect(stts).toBeInTheDocument()
    expect(abcd).toBeInTheDocument()
    expect(data).toBeInTheDocument()
  })

  test('É esperado que seja possível adicionar uma tarefa', () => {
    render(<App />)
    const inputAdd = screen.getByTestId('input-add')
    const btnAdd = screen.getByTestId('btn-add')

    userEvent.type(inputAdd, 'one piece')
    userEvent.click(btnAdd)
    userEvent.type(inputAdd, 'fçlakhfla')
    userEvent.click(btnAdd)

    expect(screen.getByText('one piece')).toBeInTheDocument()
    expect(screen.getByText('fçlakhfla')).toBeInTheDocument()
  })
})
