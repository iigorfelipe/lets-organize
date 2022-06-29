import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../providers/context'

const ButtonsUp = (props) => {
  const {
    text,
    btnAdd,
    setText,
    btnDelete
  } = useContext(Context)

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
  sortList: PropTypes.func,
  deleteText: PropTypes.func
}

export default ButtonsUp
