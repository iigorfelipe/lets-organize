import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../App'

beforeEach(() => render(<App />))

describe('É esperado em ButtonsUp que:', () => {
  test('o input de adicionar uma tarefa seja renderizado', () => {
    const stts = screen.getByPlaceholderText(/digite uma tarefa/i)

    expect(stts).toBeInTheDocument()
  })

  test('o botão de adicionar uma tarefa seja renderizado', () => {
    const btnAdd = screen.getByTestId('input-add')

    expect(btnAdd).toBeInTheDocument()
  })

  test('os valores do select foram renderizados', () => {
    const stts = screen.getByText(/status/i)
    const abcd = screen.getByText(/alfabética/i)
    const data = screen.getByText(/data de criação/i)

    expect(stts).toBeInTheDocument()
    expect(abcd).toBeInTheDocument()
    expect(data).toBeInTheDocument()
  })

  test('não tenha checkbox renderizado', () => {
    const checkbox = screen.queryByRole('checkbox')

    expect(checkbox).not.toBeInTheDocument()
  })

  test('o botão de adicionar uma tarefa esteja desabilitado', () => {
    const btnAdd = screen.getByTestId('btn-add')

    expect(btnAdd).toBeDisabled()
  })

  test('o botão de adicionar uma tarefa é habilitado caso o input tenha um valor', () => {
    const inputAdd = screen.getByTestId('input-add')
    const btnAdd = screen.getByTestId('btn-add')

    userEvent.type(inputAdd, 'task 1')

    expect(btnAdd).not.toBeDisabled()
  })

  test('seja possível adicionar uma tarefa', () => {
    const inputAdd = screen.getByTestId('input-add')
    const btnAdd = screen.getByTestId('btn-add')

    userEvent.type(inputAdd, 'task 1')
    userEvent.click(btnAdd)
    userEvent.type(inputAdd, 'task 2')
    userEvent.click(btnAdd)

    expect(screen.getByText('task 1')).toBeInTheDocument()
    expect(screen.getByText('task 2')).toBeInTheDocument()
  })
})

describe('É esperado em Tasks que:', () => {
  beforeEach(() => {
    userEvent.type(screen.getByTestId('input-add'), 'task 1')
    userEvent.click(screen.getByTestId('btn-add'))
  })

  test('o checkbox esteja renderizado', () => {
    const checkbox = screen.queryByRole('checkbox')

    expect(checkbox).toBeInTheDocument()
  })

  test('o icone de editar tarefa esteja renderizado', () => {
    const btnEdit = screen.getByTestId('edit-icon')

    expect(btnEdit).toBeInTheDocument()
  })

  test('o icone de uma lixeira esteja renderizado', () => {
    const btnDelete = screen.getByTestId('trash-icon')

    expect(btnDelete).toBeInTheDocument()
  })

  test('o valor do checkbox é true ao selecionar uma tarefa', () => {
    const checkbox = screen.queryByRole('checkbox')

    userEvent.click(checkbox)

    expect(checkbox.checked).toEqual(true)
  })

  test('o valor do checkbox é false ao selecionar uma tarefa já selecionada', () => {
    const checkbox = screen.queryByRole('checkbox')

    userEvent.dblClick(checkbox)

    expect(checkbox.checked).toEqual(false)
  })

  test('os valores do checkbox consigam ser true, false, true, false em uma lista de 4 tarefas', () => {
    userEvent.type(screen.getByTestId('input-add'), 'task 1')
    userEvent.click(screen.getByTestId('btn-add'))
    userEvent.type(screen.getByTestId('input-add'), 'task 2')
    userEvent.click(screen.getByTestId('btn-add'))
    userEvent.type(screen.getByTestId('input-add'), 'task 3')
    userEvent.click(screen.getByTestId('btn-add'))

    const checkbox = screen.queryAllByRole('checkbox')

    userEvent.click(checkbox[0])
    userEvent.click(checkbox[2])

    expect(checkbox[0].checked).toEqual(true)
    expect(checkbox[1].checked).toEqual(false)
    expect(checkbox[2].checked).toEqual(true)
    expect(checkbox[3].checked).toEqual(false)
  })

  test('os valores do checkbox consigam ser false, true, false, true em uma lista de 4 tarefas', () => {
    userEvent.type(screen.getByTestId('input-add'), 'task 1')
    userEvent.click(screen.getByTestId('btn-add'))
    userEvent.type(screen.getByTestId('input-add'), 'task 2')
    userEvent.click(screen.getByTestId('btn-add'))
    userEvent.type(screen.getByTestId('input-add'), 'task 3')
    userEvent.click(screen.getByTestId('btn-add'))

    const checkbox = screen.queryAllByRole('checkbox')

    userEvent.click(checkbox[1])
    userEvent.click(checkbox[3])

    expect(checkbox[0].checked).toEqual(false)
    expect(checkbox[1].checked).toEqual(true)
    expect(checkbox[2].checked).toEqual(false)
    expect(checkbox[3].checked).toEqual(true)
  })

  test('ao selecionar mais de uma tarefa um icone para remover elas seja renderizado', () => {
    userEvent.type(screen.getByTestId('input-add'), 'task 1')
    userEvent.click(screen.getByTestId('btn-add'))

    const checkbox = screen.queryAllByRole('checkbox')

    userEvent.click(checkbox[0])
    userEvent.click(checkbox[1])

    const btnDeleteSelected = screen.getByTestId('icon-delete')

    expect(btnDeleteSelected).toHaveClass('btnDeleteSelectedOn')
  })

  test('o icone de remover as tarefas selecionadas não esteja renderizado caso apenas uma tarefa esteja selecionada', () => {
    userEvent.type(screen.getByTestId('input-add'), 'task 1')
    userEvent.click(screen.getByTestId('btn-add'))

    const checkbox = screen.queryAllByRole('checkbox')

    userEvent.click(checkbox[0])

    expect(screen.getByTestId('icon-delete')).toHaveClass('btnDeleteSelectedOff')
  })

  test('todas tarefas selecionas sejam removidas ao clicar no icone que renderizou', () => {
    userEvent.type(screen.getByTestId('input-add'), 'task 2')
    userEvent.click(screen.getByTestId('btn-add'))

    const checkbox = screen.queryAllByRole('checkbox')

    userEvent.click(checkbox[0])
    userEvent.click(checkbox[1])

    const btnDeleteSelected = screen.getByTestId('icon-delete')

    userEvent.click(btnDeleteSelected)

    expect(screen.queryByText('task 1')).not.toBeInTheDocument()
    expect(screen.queryByText('task 2')).not.toBeInTheDocument()
  })

  test('clicar no icone da lixeira remove sua tarefa', () => {
    const btnDelete = screen.getByTestId('trash-icon')

    userEvent.click(btnDelete)

    expect(screen.queryByText('task 1')).not.toBeInTheDocument()
  })

  test('seja possível remover várias tarefas (uma por vez) usando só o icone da lixeira', () => {
    userEvent.type(screen.getByTestId('input-add'), 'task 1')
    userEvent.click(screen.getByTestId('btn-add'))
    userEvent.type(screen.getByTestId('input-add'), 'task 2')
    userEvent.click(screen.getByTestId('btn-add'))
    userEvent.type(screen.getByTestId('input-add'), 'task 3')
    userEvent.click(screen.getByTestId('btn-add'))

    const btnDelete = screen.getAllByTestId('trash-icon')

    userEvent.click(btnDelete[0])
    userEvent.click(btnDelete[0])
    userEvent.click(btnDelete[0])
    userEvent.click(btnDelete[0])

    expect(screen.queryByText('task 0')).not.toBeInTheDocument()
    expect(screen.queryByText('task 1')).not.toBeInTheDocument()
    expect(screen.queryByText('task 2')).not.toBeInTheDocument()
    expect(screen.queryByText('task 3')).not.toBeInTheDocument()
  })
})
