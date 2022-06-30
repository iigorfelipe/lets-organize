import React from 'react'
import '../css/main.css'
import Tasks from './tasks'
import ButtonsUp from './eventos/buttonsUp'
import ButtonsDown from './eventos/buttonsDown'

const Main = () => {
  return (
    <div className='main-container'>
      <ButtonsUp />
      <Tasks />
      <ButtonsDown />
    </div>
  )
}

export default Main
