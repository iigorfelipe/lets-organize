import React, { useContext } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import PropTypes from 'prop-types'
import Context from '../context'

const ButtonsDown = (props) => {
  const {
    btnEdit,
    editedText,
    setEditedText,
    status
  } = useContext(Context)

  return (
    <section className='btnsDown'>
      <div className='div-input'>
        <input
          type='text'
          className={ editedText.editedInputClass }
          onChange={
            (e) => setEditedText(
              {
                ...editedText,
                textEdited: e.target.value,
                btnConfirmClass: 'confirmOn'
              }
            )
          }
          value={ editedText.textEdited }
        />
      </div>
      <div className='edit-container'>
        <AiOutlineClockCircle
          id='pendingIcon'
          onClick={ (e) => props.changeStatus(e.target.id) }
          className={ status.pending }
        />
        <GiProgression
          id='inProgressIcon'
          onClick={ (e) => props.changeStatus(e.target.id) }
          className={ status.inProgress }
        />
          <BsCheck2All
            id='readyIcon'
            onClick={ (e) => props.changeStatus(e.target.id) }
            className={ status.ready }
          />
        <button
          className={ editedText.btnCancelClass }
          onClick={ props.btnCancelEdit }
        >
          Cancelar
        </button>
        <button
          className={ editedText.btnConfirmClass }
          onClick={ props.btnConfirmEdit }
          disabled={ btnEdit }
        >
          Confirmar
        </button>
      </div>
    </section>
  )
}

ButtonsDown.propTypes = {
  btnConfirmEdit: PropTypes.func,
  btnCancelEdit: PropTypes.func,
  changeStatus: PropTypes.func
}

export default ButtonsDown
