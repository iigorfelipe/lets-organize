import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../providers/context'

const ButtonsUp = (props) => {
  const {
    text,
    setText,
    btnAdd,
    btnDelete
  } = useContext(Context)

  return (
    <section className='btnsUp'>
      <div>
        <input
          type='text'
          placeholder='Digite uma tarefa'
          onChange={ (e) => setText(e.target.value) }
          value={ text }
          maxLength='50'
        />
        <button
          disabled={ btnAdd }
          onClick={ props.addText }
        >
          Adicionar
        </button>
        <button
          disabled={ btnDelete }
          onClick={ props.deleteText }
        >
          Remover
        </button>
      </div>
      <label htmlFor='select'>Ordenar por:</label>
      <select id='select' onChange={ (e) => props.sortList(e.target.value) }>
        <option value='abcd'>Alfabética</option>
        <option value='data'>Data de criação</option>
        <option value='stts'>Status</option>
      </select>
    </section>
  )
}

ButtonsUp.propTypes = {
  addText: PropTypes.func,
  deleteText: PropTypes.func,
  sortList: PropTypes.func
}

export default ButtonsUp
