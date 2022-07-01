import React from 'react'
import Tasks from './tasks'
import ButtonsUp from './eventos/buttonsUp'
import ButtonsDown from './eventos/buttonsDown'
import '../css/main.css'

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
