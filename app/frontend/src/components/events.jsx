import React from 'react'
import { BiEdit } from 'react-icons/bi'

class Events {
  Tasks = (props) => {
    return (
      <div className='tasks-container'>
        {
          props.list.map((item, i) => (
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
}

export default new Events()
