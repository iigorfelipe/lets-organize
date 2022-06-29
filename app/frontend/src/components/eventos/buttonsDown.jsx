import React, { useContext } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Context from '../providers/context'

const ButtonsDown = (props) => {
  const {
    list,
    status,
    setList,
    btnEdit,
    setStatus,
    editedText,
    setEditedText
  } = useContext(Context)

  const changeStatus = (id) => {
    const { index } = editedText

    list.forEach((item) => {
      if (item.id === index) {
        if (id === 'readyIcon') {
          item.stts = <BsCheck2All />
        }
        if (id === 'inProgressIcon') {
          item.stts = <GiProgression />
        }
        if (id === 'pendingIcon') {
          item.stts = <AiOutlineClockCircle />
        }
      }
    })
    setList([...list])
    btnCancelEdit()
  }

  const btnCancelEdit = () => {
    setEditedText(
      {
        ...editedText,
        btnCancelClass: 'cancelOff',
        editedInputClass: 'inputOff',
        btnConfirmClass: 'confirmOff',
        textEdited: ''
      }
    )
    setStatus(
      {
        ready: 'readyOff',
        pending: 'pendingOff',
        inProgress: 'inProgressOff'
      }
    )
  }

  const btnConfirmEdit = () => {
    const { index } = editedText

    list.forEach((item) => {
      if (item.id === index) {
        list.splice(index, 1,
          {
            id: item.id,
            newText: editedText.textEdited
          }
        )
      }
    })
    setList([...list])
    btnCancelEdit()
  }

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
          className={ status.pending }
          onClick={ (e) => changeStatus(e.target.id) }
        />
        <GiProgression
          id='inProgressIcon'
          className={ status.inProgress }
          onClick={ (e) => changeStatus(e.target.id) }
        />
          <BsCheck2All
            id='readyIcon'
            className={ status.ready }
            onClick={ (e) => changeStatus(e.target.id) }
          />
        <button
          onClick={ btnCancelEdit }
          className={ editedText.btnCancelClass }
        >
          Cancelar
        </button>
        <button
          disabled={ btnEdit }
          onClick={ btnConfirmEdit }
          className={ editedText.btnConfirmClass }
        >
          Confirmar
        </button>
      </div>
    </section>
  )
}

export default ButtonsDown
