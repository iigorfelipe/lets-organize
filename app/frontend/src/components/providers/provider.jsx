import React, { useState, useEffect } from 'react'
import Context from './context'
import PropTypes from 'prop-types'

const Provider = ({ children }) => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [btnAdd, setBtnAdd] = useState(true)
  const [btnEdit, setBtnEdit] = useState(true)
  const [btnDelete, setBtnDelete] = useState(true)
  const [nodeElement, setNodeElement] = useState([])
  const [display, setDisplay] = useState({
    index: 0,
    textEdited: '',
    ready: 'readyOff',
    pending: 'pendingOff',
    inProgress: 'inProgressOff',
    btnCancelClass: 'cancelOff',
    editedInputClass: 'inputOff',
    btnConfirmClass: 'confirmOff'
  })

  useEffect(() => {
    if (text.trim()) setBtnAdd(false)
    else setBtnAdd(true)
  })

  useEffect(() => {
    if (display.textEdited.trim()) setBtnEdit(false)
    else setBtnEdit(true)
  })

  return (
    <Context.Provider
      value={ {
        text,
        setText,
        list,
        setList,
        btnAdd,
        setBtnAdd,
        btnEdit,
        setBtnEdit,
        btnDelete,
        setBtnDelete,
        display,
        setDisplay,
        nodeElement,
        setNodeElement
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