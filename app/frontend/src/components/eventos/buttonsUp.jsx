import React, { useContext } from 'react'
import Context from '../providers/context'
import { CgPlayListRemove } from 'react-icons/cg'

const ButtonsUp = () => {
  const {
    text,
    list,
    btnAdd,
    setText,
    setList,
    display,
    setDisplay
  } = useContext(Context)

  const addText = () => {
    setList([...list,
      {
        id: list.length,
        newText: text,
        stts: '',
        check: false
      }
    ])
    setText('')
  }

  const deleteSelected = () => {
    const newList = list.filter((item) => !item.check)
    setList(newList)
    setDisplay(
      {
        ...display,
        btnDeleteSelected: 'btnDeleteSelectedOff'
      }
    )
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
        <CgPlayListRemove
          onClick={ deleteSelected }
          className={ display.btnDeleteSelected }
        />
      </div>
    </section>
  )
}

export default ButtonsUp
