import React, { useContext } from 'react'
import { BiEdit } from 'react-icons/bi'
import Context from './providers/context'

const Tasks = (props) => {
  const {
    list,
    setStatus,
    editedText,
    setBtnDelete,
    setEditedText,
    setNodeElement
  } = useContext(Context)

  const verifyCheck = () => {
    const nodeListOfCheckboxInput = document.querySelectorAll('.checkbox')
    const arrayOfCheckboxInput = [...nodeListOfCheckboxInput]
    const uncheckeds = arrayOfCheckboxInput.every(item => !item.checked)

    setNodeElement(arrayOfCheckboxInput)
    setBtnDelete(uncheckeds)
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

  const editText = (_e, i) => {
    list.forEach((item) => {
      if (item.id === i) {
        setEditedText(
          {
            ...editedText,
            btnCancelClass: 'cancelOn',
            editedInputClass: 'inputOn',
            index: i
          }
        )
        setStatus(
          {
            ready: 'readyOn',
            pending: 'pendingOn',
            inProgress: 'inProgressOn'
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
