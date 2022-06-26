import React, { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')
  const [editedText, setEditedText] = useState({
    textEdited: '',
    editedInputClass: 'inputOff',
    btnConfirmClass: 'confirmOff',
    btnCancelClass: 'cancelOff',
    index: 0
  })
  const [list, setList] = useState([])
  const [btnAdd, setBtnAdd] = useState(true)
  const [btnDelete, setBtnDelete] = useState(true)
  const [btnEdit, setBtnEdit] = useState(true)
  const [nodeElement, setNodeElement] = useState([])

  useEffect(() => {
    if (text.trim()) setBtnAdd(false)
    else setBtnAdd(true)
  })

  useEffect(() => {
    if (editedText.textEdited.trim()) setBtnEdit(false)
    else setBtnEdit(true)
  })

  const verifyCheck = () => {
    const nodeListOfCheckboxInput = document.querySelectorAll('.checkbox')
    const arrayOfCheckboxInput = [...nodeListOfCheckboxInput]
    const uncheckeds = arrayOfCheckboxInput.every(item => !item.checked)

    setNodeElement(arrayOfCheckboxInput)
    setBtnDelete(uncheckeds)
    btnCancelEdit()
  }

  const addText = () => {
    setList([...list,
      {
        id: list.length,
        newText: text
      }
    ])
    setText('')
  }

  const deleteText = () => {
    nodeElement.forEach((item) => {
      if (item.checked) {
        item.parentNode.remove()
      }
    })
    setBtnDelete(true)
  }

  const editText = (_e, i) => {
    list.forEach((item) => {
      if (item.id === i) {
        setEditedText(
          {
            ...editedText,
            editedInputClass: 'inputOn',
            btnCancelClass: 'cancelOn',
            index: i
          }
        )
      }
    })
  }

  const btnConfirmEdit = () => {
    const { index } = editedText

    list.forEach((item) => {
      if (item.id === index) {
        list.splice(index, 1,
          {
            id: item.id,
            newText: editedText.textEdited
          }
        )
      }
    })
    setList([...list])
    btnCancelEdit()
  }

  const btnCancelEdit = () => {
    setEditedText(
      {
        ...editedText,
        editedInputClass: 'inputOff',
        btnConfirmClass: 'confirmOff',
        btnCancelClass: 'cancelOff',
        textEdited: ''
      }
    )
  }

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Digite uma tarefa'
          onChange={ (e) => setText(e.target.value) }
          value={ text }
        />
        <section>
          <button
            disabled={ btnAdd }
            onClick={ addText }
          >
            Adicionar
          </button>
          <button
            disabled={ btnDelete }
            onClick={ deleteText }
          >
            Remover
          </button>
          <button>Filtrar</button>
        </section>
      </div>
      {
        list.map((item, i) => (
          <div key={ i }>
            <input
              id={ i }
              type='checkbox'
              className='checkbox'
              onClick={ verifyCheck }
            />
            <label htmlFor={ i }>{ item.newText }</label>
            <button onClick={ (e) => editText(e, i) }>Editar</button>
          </div>
        ))
      }
      <input
        type='text'
        className={ editedText.editedInputClass }
        onChange={
          (e) => setEditedText(
            {
              ...editedText,
              textEdited: e.target.value,
              btnConfirmClass: 'confirmOn'
            }
          )
        }
        value={ editedText.textEdited }
      />
      <button
        className={ editedText.btnConfirmClass }
        onClick={ btnConfirmEdit }
        disabled={ btnEdit }
      >
        Confirmar
      </button>
      <button
        className={ editedText.btnCancelClass }
        onClick={ btnCancelEdit }
      >
        Cancelar
      </button>
    </div>
  )
}

export default Main
