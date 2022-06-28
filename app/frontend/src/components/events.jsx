import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'

class Events {
  ButtonsUp = (props) => {
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
        <select id='select'>
          <option value='abcd'>Alfabética</option>
          <option value='data'>Data de criação</option>
          <option value='stts'>Status</option>
        </select>
      </section>
    )
  }

  Tasks = (props) => {
    return (
      <div className='tasks-container'>
        {
          props.list.map((item, i) => (
            <div key={ i }>
              <input
                id={ i }
                type='checkbox'
                className='checkbox'
                onClick={ props.verifyCheck }
              />
              <label htmlFor={ i }>
                { item.newText }
              </label>

              <div className='btns'>
                <AiOutlineClockCircle className={ props.status.pending } />
                <GiProgression className={ props.status.inProgress } />
                <BsCheck2All className={ props.status.ready } />
                <BiEdit onClick={ (e) => props.editText(e, i) } />
              </div>
            </div>
          ))
        }
      </div>
    )
  }

  ButtonsDown = (props) => {
    return (
      <section className='btnsDown'>
        <div>
          <input
            type='text'
            className={ props.editedText.editedInputClass }
            onChange={
              (e) => props.setEditedText(
                {
                  ...props.editedText,
                  textEdited: e.target.value,
                  btnConfirmClass: 'confirmOn'
                }
              )
            }
            value={ props.editedText.textEdited }
          />
          <button
            className={ props.editedText.btnCancelClass }
            onClick={ props.btnCancelEdit }
          >
            Cancelar
          </button>
          <button
            className={ props.editedText.btnConfirmClass }
            onClick={ props.btnConfirmEdit }
            disabled={ props.btnEdit }
          >
            Confirmar
          </button>
        </div>
      </section>
    )
  }
}

export default new Events()
