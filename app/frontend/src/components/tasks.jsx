import React, { useContext } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Context from './providers/context'
import { resetDisplay, activeDisplay } from './helpers/display'

const Tasks = () => {
  const {
    list,
    setList,
    display,
    setDisplay
  } = useContext(Context)

  const handleCheck = (e, id) => {
    list.forEach((item) => {
      if (item.id === id) {
        item.check = e.target.checked
      }
    })

    setDisplay(resetDisplay(display))
  }

  const editText = (id) => {
    list.forEach((item) => {
      if (item.id === id) {
        setDisplay(activeDisplay(display, id))
      }
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
          <div key={ i }>
            <input
              id={ i }
              type='checkbox'
              className='checkbox'
              onChange={ (e) => handleCheck(e, item.id) }
              checked={ false || item.check}
            />
            <label htmlFor={ i }>
              { item.newText }
            </label>

            <div className='btns'>
              { item.stts }
              <BiEdit
                onClick={ () => editText(item.id) }
                id='editIcon'
              />
              <BiTrash
                onClick={ () => deleteText(item.id) }
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
