import React, { useContext } from 'react'
import Context from '../providers/context'

const ButtonsUp = (props) => {
  const {
    text,
    list,
    btnAdd,
    setText,
    setList,
    btnDelete,
    nodeElement,
    setBtnDelete
  } = useContext(Context)

  const addText = () => {
    setList([...list,
      {
        id: list.length,
        newText: text,
        stts: ''
      }
    ])
    setText('')
  }

  const deleteText = () => {
    nodeElement.forEach((item) => {
      if (item.checked) {
        item.parentNode.remove()
      }
    })
    setBtnDelete(true)
  }

  const sortABCD = () => {
    list.sort((a, b) => {
      if (a.newText > b.newText) return 1
      if (a.newText < b.newText) return -1

      setList([...list])
      return 0
    })
  }

  // const sortDATA = () => {
  //   list.sort((a, b) => {
  //     if (a.id > b.id) return 1
  //     if (a.id < b.id) return -1

  //     setList([...list])
  //     return 0
  //   })
  // }

  // const sortSTTS = () => {
  //   list.sort((a, b) => {
  //     if (a.stts > b.stts) return 1
  //     if (a.stts < b.stts) return -1

  //     setList([...list])
  //     return 0
  //   })
  // }

  const sortList = (order) => {
    if (order === 'abcd') sortABCD()
    // if (order === 'data') sortDATA()
    // if (order === 'stts') sortSTTS()
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
        <button
          disabled={ btnDelete }
          onClick={ deleteText }
        >
          Remover
        </button>
      </div>
      <label htmlFor='select'>
        Ordenar por:
      </label>
      <select id='select' onChange={ (e) => sortList(e.target.value) }>
        <option value='abcd'>Alfabética</option>
        <option value='data'>Data de criação</option>
        <option value='stts'>Status</option>
      </select>
    </section>
  )
}

export default ButtonsUp
