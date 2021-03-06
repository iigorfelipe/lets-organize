import React, { useContext } from 'react'
import { BsCheck2All, BsCheckCircle } from 'react-icons/bs'
import { GiProgression, GiCancel } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Context from '../providers/context'
import { resetDisplay } from '../helpers/display'
import '../../css/btsDown.css'

const ButtonsDown = () => {
  const {
    list,
    setList,
    btnEdit,
    display,
    setDisplay
  } = useContext(Context)

  const changeStatus = (id) => {
    const { index } = display

    list.forEach((item) => {
      if (item.id === index) {
        if (id === 'readyIcon') {
          item.stts.icon = <BsCheck2All />
          item.stts.id = 1
        }
        if (id === 'inProgressIcon') {
          item.stts.icon = <GiProgression />
          item.stts.id = 2
        }
        if (id === 'pendingIcon') {
          item.stts.icon = <AiOutlineClockCircle />
          item.stts.id = 3
        }
      }
    })
    setList([...list])
    setDisplay(resetDisplay(display))
  }

  const btnConfirmEdit = () => {
    const { index } = display

    list.forEach((item, i) => {
      if (item.id === index) {
        list.splice(i, 1,
          {
            ...item,
            newText: display.textEdited
          }
        )
      }
    })
    setList([...list])
    setDisplay(resetDisplay(display))
  }

  return (
    <section className='btnsDown'>
      <div className='div-input'>
        <input
          type='text'
          maxLength='45'
          placeholder='Edite sua tarefa'
          className={ display.editedInputClass }
          onChange={
            (e) => setDisplay(
              {
                ...display,
                textEdited: e.target.value,
                btnConfirmClass: 'confirmOn'
              }
            )
          }
          value={ display.textEdited }
        />
        <div className='btnsEdit'>
          <button
            id='btnCancel'
            className={ display.btnCancelClass }
            onClick={ (e) => setDisplay(resetDisplay(display)) }
          >
            <GiCancel />
          </button>
          <button
            id='btnConfirm'
            disabled={ btnEdit }
            onClick={ btnConfirmEdit }
            className={ display.btnConfirmClass }
          >
            <BsCheckCircle />
          </button>
        </div>
      </div>
      <div className='edit-container'>
        <AiOutlineClockCircle
          id='pendingIcon'
          className={ display.pending }
          onClick={ (e) => changeStatus(e.target.id) }
        />
        <GiProgression
          id='inProgressIcon'
          className={ display.inProgress }
          onClick={ (e) => changeStatus(e.target.id) }
        />
        <BsCheck2All
          id='readyIcon'
          className={ display.ready }
          onClick={ (e) => changeStatus(e.target.id) }
        />
      </div>
    </section>
  )
}

export default ButtonsDown
