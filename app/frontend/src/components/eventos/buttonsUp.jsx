import React, { useContext } from 'react'
import Context from '../providers/context'

const ButtonsUp = () => {
  const {
    text,
    list,
    btnAdd,
    setText,
    setList
  } = useContext(Context)

  const addText = () => {
    setList([...list,
      {
        id: list.length + 1,
        newText: text,
        stts: '',
        check: false
      }
    ])
    setText('')
  }

  return (
    <section className='btnsUp'>
      <div>
        <input
          type='text'
          maxLength='50'
          value={ text }
          placeholder='Digite uma tarefa'
          onChange={ (e) => setText(e.target.value) }
        />
        <button
          disabled={ btnAdd }
          onClick={ addText }
        >
          Adicionar
        </button>
      </div>
    </section>
  )
}

export default ButtonsUp
