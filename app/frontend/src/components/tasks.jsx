import React, { useContext } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Context from './providers/context'
import { resetDisplay, activeDisplay, handleBtnDeletetSelected } from './helpers/display'
import '../css/tasks.css'

const Tasks = () => {
  const {
    list,
    setList,
    display,
    setDisplay
  } = useContext(Context)

  const handleCheck = (e, id) => {
    list.forEach((item) => {
      if (item.id === id) item.check = e.target.checked
    })

    setDisplay(resetDisplay(display))
    setDisplay(handleBtnDeletetSelected(display, list))
  }

  const editTask = (id) => {
    list.forEach((item) => {
      if (item.id === id) setDisplay(activeDisplay(display, id))
    })
  }

  const deleteText = (id) => {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <div className='tasks-container'>
      {
        list.map((item, i) => (
          <div key={ i } className='todo-list'>
            <div className='checkbox-input'>
              <input
                id={ i }
                type='checkbox'
                className='checkbox'
                checked={ false || item.check}
                onChange={ (e) => handleCheck(e, item.id) }
              />
            </div>
            <label htmlFor={ i } className='text'>
              { item.newText }
            </label>
            <div className='btnsTask-container'>
              { item.stts.icon }
              <div className='btnsTask'>
                <BiEdit
                  onClick={ () => editTask(item.id) }
                  className='editIcon'
                />
                <BiTrash
                  onClick={ () => deleteText(item.id) }
                  className='editIcon'
                />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Tasks
