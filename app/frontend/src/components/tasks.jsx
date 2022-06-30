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

  const editText = (_e, i) => {
    list.forEach((item) => {
      if (item.id === i) {
        setDisplay(activeDisplay(display, i))
      }
    })
  }

  const deleteText = (e, id) => {
    console.log('clicou', id)
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
                onClick={ (e) => editText(e, i) }
                id='editIcon'
              />
              <BiTrash
                onClick={ (e) => deleteText(e, item.id) }
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
