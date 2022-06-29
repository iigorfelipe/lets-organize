import React, { useContext } from 'react'
import { BiEdit } from 'react-icons/bi'
import Context from './providers/context'
import { resetDisplay } from './helpers/cancelEdit'

const Tasks = (props) => {
  const {
    list,
    display,
    setBtnDelete,
    setDisplay,
    setNodeElement
  } = useContext(Context)

  const verifyCheck = () => {
    const nodeListOfCheckboxInput = document.querySelectorAll('.checkbox')
    const arrayOfCheckboxInput = [...nodeListOfCheckboxInput]
    const uncheckeds = arrayOfCheckboxInput.every(item => !item.checked)

    setNodeElement(arrayOfCheckboxInput)
    setBtnDelete(uncheckeds)
    setDisplay(resetDisplay(display))
  }

  const editText = (_e, i) => {
    list.forEach((item) => {
      if (item.id === i) {
        setDisplay(
          {
            ...display,
            index: i,
            ready: 'readyOn',
            pending: 'pendingOn',
            inProgress: 'inProgressOn',
            btnCancelClass: 'cancelOn',
            editedInputClass: 'inputOn'
          }
        )
      }
    })
  }

  return (
    <div className='tasks-container'>
      {
        list.map((item, i) => (
          <div key={ i }>
            <input
              id={ i }
              type='checkbox'
              className='checkbox'
              onClick={ verifyCheck }
            />
            <label htmlFor={ i }>
              { item.newText }
            </label>

            <div className='btns'>
              { item.stts }
              <BiEdit
                onClick={ (e) => editText(e, i) }
                id='editIcon'
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Tasks
