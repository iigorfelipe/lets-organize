import React, { useState } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')

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
          <button type='button'>Adicionar</button>
          <button type='button'>Remover</button>
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
