import React, { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')
  const [disabledBtn, setDisabledBtn] = useState(true)

  useEffect(() => {
    if (text) setDisabledBtn(false)
    else setDisabledBtn(true)
  })

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
        >
          Adicionar
        </button>
          <button type=''>Remover</button>
          <button type='button'>Editar</button>
          <button type='button'>Filtrar</button>
        </section>
        <div>
          { text }
        </div>
      </div>
    </div>
  )
}

export default Main
