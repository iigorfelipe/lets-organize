import React, { useContext } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import PropTypes from 'prop-types'
import Context from '../providers/context'

const ButtonsDown = (props) => {
  const {
    status,
    btnEdit,
    editedText,
    setEditedText
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
            className={ status.ready }
            onClick={ (e) => props.changeStatus(e.target.id) }
          />
        <button
          onClick={ props.btnCancelEdit }
          className={ editedText.btnCancelClass }
        >
          Cancelar
        </button>
        <button
          disabled={ btnEdit }
          onClick={ props.btnConfirmEdit }
          className={ editedText.btnConfirmClass }
        >
          Confirmar
        </button>
      </div>
    </section>
  )
}

ButtonsDown.propTypes = {
  changeStatus: PropTypes.func,
  btnCancelEdit: PropTypes.func,
  btnConfirmEdit: PropTypes.func
}

export default ButtonsDown
