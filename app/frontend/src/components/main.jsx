import React, { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')
  const [btnAdd, setBtnAdd] = useState(true)
  const [btnDelete, setBtnDelete] = useState(true)
  const [list, setList] = useState([])
  const [checkbox, setCheckbox] = useState(false)

  useEffect(() => {
    if (text.trim()) setBtnAdd(false)
    else setBtnAdd(true)
  })

  const verifyCheck = () => {
    const inputs = document.querySelectorAll('.check')
    const array = [...inputs]
    setBtnDelete(array.every(item => !item.checked))
  }

  const addText = () => {
    setList([...list, text])
    setText('')
  }

  const deleteText = () => {
    if (checkbox) {
      console.log('PREENCHIDO')
    }
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
              type='checkbox'
              checked={ checkbox[i] }
              onChange={ (e) => setCheckbox(e.target.checked) }
              className='check'
              value={ item }
              onClick={ verifyCheck }
            />
            { item }
          </div>
        ))
      }
    </div>
  )
}

export default Main
