import React, { useContext } from 'react'
import Context from '../providers/context'
import { CgPlayListRemove } from 'react-icons/cg'

const ButtonsUp = () => {
  const {
    text,
    list,
    newId,
    btnAdd,
    setText,
    setList,
    display,
    setNewId,
    setDisplay
  } = useContext(Context)

  const addText = () => {
    setNewId(newId + 1)

    setList([...list,
      {
        id: newId,
        newText: text,
        stts: { id: 0, icon: '' },
        check: false
      }
    ])
    setText('')
  }
  console.log(list)
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

  const sortList = (order) => {
    const newList = list

    if (order === 'abcd') {
      newList.sort((a, b) => {
        if (a.newText > b.newText) return 1
        if (a.newText < b.newText) return -1

        else return 0
      })
    }
    if (order === 'data') {
      newList.sort((a, b) => {
        if (a.id > b.id) return 1
        if (a.id < b.id) return -1

        else return 0
      })
    }
    if (order === 'stts') {
      newList.sort((a, b) => {
        if (a.stts.id > b.stts.id) return 1
        if (a.stts.id < b.stts.id) return -1

        setList([...newList])
        return 0
      })
    }

    setList([...newList])
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
      <select onChange={ (e) => sortList(e.target.value) }>
        <option value='data'>Data de criação</option>
        <option value='abcd'>Alfabética</option>
        <option value='stts'>Status</option>
      </select>
    </section>
  )
}

export default ButtonsUp
