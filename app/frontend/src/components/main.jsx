import React, { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
  const [text, setText] = useState('')
  const [disabledBtn, setDisabledBtn] = useState(true)

  useEffect(() => {
    if (text.trim()) setDisabledBtn(false)
    else setDisabledBtn(true)
  })

  const addText = () => {
    const ol = document.querySelector('.ol')
    const li = document.createElement('li')
    li.innerText = text
    ol.appendChild(li)
    setText('')
  }

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Digite uma tarefa'
          onChange={ (e) => setText(e.target.value) }
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
        <ol className='ol'></ol>
      </div>
    </div>
  )
}

export default Main
