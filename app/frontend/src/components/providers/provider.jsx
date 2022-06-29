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
    index: 0,
    textEdited: '',
    btnCancelClass: 'cancelOff',
    editedInputClass: 'inputOff',
    btnConfirmClass: 'confirmOff'
  })
  const [status, setStatus] = useState({
    ready: 'readyOff',
    pending: 'pendingOff',
    inProgress: 'inProgressOff'
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
        status,
        setStatus,
        btnEdit,
        setBtnEdit,
        btnDelete,
        setBtnDelete,
        editedText,
        setEditedText,
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
