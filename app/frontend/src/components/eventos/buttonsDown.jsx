import React from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import PropTypes from 'prop-types'

const ButtonsDown = (props) => {
  return (
    <section className='btnsDown'>
      <div className='div-input'>
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
      </div>
      <div className='edit-container'>
        <AiOutlineClockCircle
          id='pendingIcon'
          onClick={ (e) => props.changeStatus(e.target.id) }
          className={ props.status.pending }
        />
        <GiProgression
          id='inProgressIcon'
          onClick={ (e) => props.changeStatus(e.target.id) }
          className={ props.status.inProgress }
        />
          <BsCheck2All
            id='readyIcon'
            onClick={ (e) => props.changeStatus(e.target.id) }
            className={ props.status.ready }
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

ButtonsDown.propTypes = {
  editedText: PropTypes.object,
  btnEdit: PropTypes.bool,
  btnConfirmEdit: PropTypes.func,
  btnCancelEdit: PropTypes.func,
  status: PropTypes.object,
  changeStatus: PropTypes.func,
  setEditedText: PropTypes.func
}

export default ButtonsDown
