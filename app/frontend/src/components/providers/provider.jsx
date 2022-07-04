import React, { useState, useEffect } from 'react'
import Context from './context'
import PropTypes from 'prop-types'
import Axios from 'axios'

const Provider = ({ children }) => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [newId, setNewId] = useState(0)
  const [btnAdd, setBtnAdd] = useState(true)
  const [btnEdit, setBtnEdit] = useState(true)
  const [display, setDisplay] = useState({
    textEdited: '',
    ready: 'readyOff',
    pending: 'pendingOff',
    inProgress: 'inProgressOff',
    btnCancelClass: 'cancelOff',
    editedInputClass: 'inputOff',
    btnConfirmClass: 'confirmOff',
    btnDeleteSelected: 'btnDeleteSelectedOff'
  })

  useEffect(() => {
    if (text.trim()) setBtnAdd(false)
    else setBtnAdd(true)
  })

  useEffect(() => {
    if (display.textEdited.trim()) setBtnEdit(false)
    else setBtnEdit(true)
  })

  useEffect(() => {
    Axios
      .get('http://localhost:3001/')
      .then((response) => console.log(response))
  }, [])

  return (
    <Context.Provider
      value={ {
        text,
        setText,
        list,
        setList,
        newId,
        setNewId,
        btnAdd,
        setBtnAdd,
        btnEdit,
        setBtnEdit,
        display,
        setDisplay
      } }
    >
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Provider
