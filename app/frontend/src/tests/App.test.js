import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../App'

describe('ButtonsUp Component. É esperado que:', () => {
  beforeEach(() => render(<App />))

  test('os valores do select estão corretos', () => {
    const stts = screen.getByText(/status/i)
    const abcd = screen.getByText(/alfabética/i)
    const data = screen.getByText(/data de criação/i)

    expect(stts).toBeInTheDocument()
    expect(abcd).toBeInTheDocument()
    expect(data).toBeInTheDocument()
  })

  test('o input de adicionar uma tarefa seja renderizado', () => {
    const stts = screen.getByPlaceholderText(/digite uma tarefa/i)

    expect(stts).toBeInTheDocument()
  })

  test('o botão de adicionar uma tarefa seja renderizado', () => {
    const btnAdd = screen.getByTestId('input-add')

    expect(btnAdd).toBeInTheDocument()
  })

  test('não tenha checkbox renderizado', () => {
    const checkbox = screen.queryByRole('checkbox')

    expect(checkbox).not.toBeInTheDocument()
  })

  test('seja possível adicionar uma tarefa', () => {
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
