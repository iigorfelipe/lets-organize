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
  const [editedText, setEditedText] = useState({
    textEdited: '',
    editedInputClass: 'inputOff',
    btnConfirmClass: 'confirmOff',
    btnCancelClass: 'cancelOff',
    index: 0
  })
  const [status, setStatus] = useState({
    pending: 'pendingOff',
    inProgress: 'inProgressOff',
    ready: 'readyOff'
  })

  useEffect(() => {
    if (text.trim()) setBtnAdd(false)
    else setBtnAdd(true)
  })

  useEffect(() => {
    if (editedText.textEdited.trim()) setBtnEdit(false)
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
        nodeElement,
        setNodeElement,
        editedText,
        setEditedText,
        status,
        setStatus
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
