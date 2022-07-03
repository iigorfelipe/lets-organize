import React, { useContext } from 'react'
import Context from '../providers/context'
import { CgPlayListRemove } from 'react-icons/cg'
import { GrAdd } from 'react-icons/gr'
import Axios from 'axios'
import '../../css/btsUp.css'

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

  const saveListInDB = () => {
    const url = 'http://localhost:3001/'

    Axios
      .post(url, { task: [...list] })
      .then((response) => console.log(response))
  }

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
    <div className='btnsUp-container'>
      <div className='input-div'>
        <input
          type='text'
          maxLength='45'
          value={ text }
          className='text-input'
          data-testid='input-add'
          placeholder='Digite uma tarefa'
          onChange={ (e) => setText(e.target.value) }
        />
        <button
          className='btnAdd'
          disabled={ btnAdd }
          onClick={ addText }
          data-testid='btn-add'
          >
          <GrAdd />
        </button>
      </div>
      <div className='select-div'>
        <select
          onChange={ (e) => sortList(e.target.value) }
          className='select-list'
        >
          <option value='data'>Data de criação</option>
          <option value='abcd'>Alfabética</option>
          <option value='stts'>Status</option>
        </select>
        <button
          className='save-list'
          onClick={ saveListInDB }
        >
          Salvar lista
        </button>
      </div>
      <div className='btnDelete'>
        <CgPlayListRemove
          id='btnDeleteIcon'
          data-testid='icon-delete'
          onClick={ deleteSelected }
          className={ display.btnDeleteSelected }
        />
      </div>
    </div>
  )
}

export default ButtonsUp
