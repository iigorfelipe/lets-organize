import React, { useContext } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
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
        <button
          onClick={ (e) => setDisplay(resetDisplay(display)) }
          className={ display.btnCancelClass }
        >
          Cancelar
        </button>
        <button
          disabled={ btnEdit }
          onClick={ btnConfirmEdit }
          className={ display.btnConfirmClass }
        >
          Confirmar
        </button>
      </div>
    </section>
  )
}

export default ButtonsDown
