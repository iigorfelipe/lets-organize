import React, { useContext } from 'react'
import { BiEdit } from 'react-icons/bi'
import Context from './providers/context'
import { resetDisplay, activeDisplay } from './helpers/display'
import { allChecked } from './helpers/checkbox'

const Tasks = () => {
  const {
    list,
    display,
    checked,
    setChecked,
    setDisplay,
    setBtnDelete,
    setNodeElement
  } = useContext(Context)

  const handleCheck = () => {
    const uncheckeds = allChecked().every(item => !item.checked)

    setBtnDelete(uncheckeds)
    setNodeElement(allChecked())
    setDisplay(resetDisplay(display))
  }

  const handleChecked = (e, i) => {
    const index = checked.indexOf(i)

    if (index === -1) checked.push(i)
    else checked.splice(index, 1)

    setChecked([...checked])

    list.forEach((item) => {
      if (item.id === i) {
        item.check = checked.includes(i)
      }
    })
  }

  const editText = (_e, i) => {
    list.forEach((item) => {
      if (item.id === i) {
        setDisplay(activeDisplay(display, i))
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
              onClick={ handleCheck }
              onChange={(e) => handleChecked(e, i)}
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
