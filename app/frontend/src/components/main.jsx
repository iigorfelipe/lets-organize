import React, { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')
  const [editedText, setEditedText] = useState({
    btnEditClass: 'editOff',
    textEdited: '',
    confirmEdit: false,
    btnConfirmClass: 'confirmOff'
  })
  const [list, setList] = useState([])
  const [btnAdd, setBtnAdd] = useState(true)
  const [btnDelete, setBtnDelete] = useState(true)
  const [nodeElement, setNodeElement] = useState([])

  useEffect(() => {
    if (text.trim()) setBtnAdd(false)
    else setBtnAdd(true)
  })

  const verifyCheck = () => {
    const nodeListOfCheckboxInput = document.querySelectorAll('.checkbox')
    const arrayOfCheckboxInput = [...nodeListOfCheckboxInput]
    const uncheckeds = arrayOfCheckboxInput.every(item => !item.checked)

    setNodeElement(arrayOfCheckboxInput)
    setBtnDelete(uncheckeds)
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

  const editText = () => {
    setEditedText(
      {
        btnEditClass: 'editOn',
        textEdited: '',
        confirmEdit: false,
        btnConfirmClass: 'confirmOff'
      }
    )
  }

  const btnConfirmEdit = (_e, i) => {
    list.forEach((item) => {
      if (item.id === i) {
        list.splice(i, 1,
          {
            id: item.id,
            newText: editedText.textEdited
          }
        )
      }
    })
    setList([...list])
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
            <button onClick={ editText }>Editar</button>
            <input
              type='text'
              className={ editedText.btnEditClass }
              onChange={
                (e) => setEditedText(
                  {
                    btnEditClass: 'editOn',
                    textEdited: e.target.value,
                    confirmEdit: true,
                    btnConfirmEdit: 'confirmOn'
                  }
                )
              }
            />
            <button
              onClick={ (e) => btnConfirmEdit(e, i) }
              className={ editedText.btnConfirmClass }
            >
              Confirmar
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default Main
