import React, { useContext } from 'react'
import { BiEdit } from 'react-icons/bi'
import PropTypes from 'prop-types'
import Context from './providers/context'

const Tasks = (props) => {
  const { list } = useContext(Context)

  return (
    <div className='tasks-container'>
      {
        list.map((item, i) => (
          <div key={ i }>
            <input
              id={ i }
              type='checkbox'
              className='checkbox'
              onClick={ props.verifyCheck }
            />
            <label htmlFor={ i }>
              { item.newText }
            </label>

            <div className='btns'>
              { item.stts }
              <BiEdit
                onClick={ (e) => props.editText(e, i) }
                id='editIcon'
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

Tasks.propTypes = {
  editText: PropTypes.func,
  verifyCheck: PropTypes.func
}

export default Tasks
