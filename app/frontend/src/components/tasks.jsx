import React, { useContext } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Context from './providers/context'
import { resetDisplay, activeDisplay } from './helpers/display'
import { allChecked } from './helpers/checkbox'

const Tasks = () => {
  const {
    list,
    setList,
    display,
    setDisplay,
    setNodeElement
  } = useContext(Context)

  const handleCheck = () => {
    setNodeElement(allChecked())
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
  console.log(list)
  return (
    <div className='tasks-container'>
      {
        list.map((item, i) => (
          <div key={ i }>
            <input
              id={ i }
              type='checkbox'
              className='checkbox'
              onClick={ handleCheck }
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
