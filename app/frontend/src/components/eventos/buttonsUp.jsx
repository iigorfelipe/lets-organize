import React from 'react'
import PropTypes from 'prop-types'

const ButtonsUp = (props) => {
  return (
    <section className='btnsUp'>
      <div>
        <input
          type='text'
          placeholder='Digite uma tarefa'
          onChange={ (e) => props.setText(e.target.value) }
          value={ props.text }
          maxLength='50'
        />
        <button
          disabled={ props.btnAdd }
          onClick={ props.addText }
        >
          Adicionar
        </button>
        <button
          disabled={ props.btnDelete }
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
  setText: PropTypes.func,
  text: PropTypes.string,
  addText: PropTypes.func,
  btnAdd: PropTypes.bool,
  btnDelete: PropTypes.bool,
  deleteText: PropTypes.func,
  sortList: PropTypes.func
}

export default ButtonsUp
