import React, { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [list, setList] = useState([])

  useEffect(() => {
    if (text.trim()) setDisabledBtn(false)
    else setDisabledBtn(true)
  })

  const addText = () => {
    setList([...list, text])
    setText('')
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
          type='button'
          disabled={ disabledBtn }
          onClick={ addText }
        >
          Adicionar
        </button>
          <button type='button'>Remover</button>
          <button type='button'>Editar</button>
          <button type='button'>Filtrar</button>
        </section>
      </div>
      {
        list.map((item, i) => (
          <div key={ i }>
            <input type="checkbox" />
            <span>{ item }</span>
          </div>
        ))
      }
    </div>
  )
}

export default Main
