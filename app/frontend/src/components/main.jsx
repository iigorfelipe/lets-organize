import React, { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')
  const [btnAdd, setBtnAdd] = useState(true)
  const [btnDelete, setBtnDelete] = useState(true)
  const [list, setList] = useState([])
  const [checkbox, setCheckbox] = useState([])
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
    setList([...list, text])
    setText('')
  }

  const handleChecked = (_e, i) => {
    const index = checkbox.indexOf(i)

    if (index === -1) checkbox.push(i)
    else checkbox.splice(index, 1)

    setCheckbox([...checkbox])
  }

  const deleteText = () => {
    nodeElement.forEach((item) => {
      if (item.checked) {
        item.parentNode.remove()
      }
    })
    setBtnDelete(true)
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
          <button>Editar</button>
          <button>Filtrar</button>
        </section>
      </div>
      {
        list.map((item, i) => (
          <div key={ i }>
            <input
              id={ i }
              type='checkbox'
              checked={ checkbox.includes(i) }
              onChange={ (e) => handleChecked(e, i) }
              className='checkbox'
              onClick={ verifyCheck }
            />
            <label htmlFor={ i }>{ item }</label>
          </div>
        ))
      }
    </div>
  )
}

export default Main
