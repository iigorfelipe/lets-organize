import React, { useState, useEffect } from 'react'
import '../css/main.css'
import Events from './events'

const Main = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [btnAdd, setBtnAdd] = useState(true)
  const [btnDelete, setBtnDelete] = useState(true)
  const [btnEdit, setBtnEdit] = useState(true)
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

  const verifyCheck = () => {
    const nodeListOfCheckboxInput = document.querySelectorAll('.checkbox')
    const arrayOfCheckboxInput = [...nodeListOfCheckboxInput]
    const uncheckeds = arrayOfCheckboxInput.every(item => !item.checked)

    setNodeElement(arrayOfCheckboxInput)
    setBtnDelete(uncheckeds)
    btnCancelEdit()
  }

  const addText = () => {
    setList([...list,
      {
        id: list.length,
        newText: text
      }
    ])
    setText('')
  }

  const deleteText = () => {
    nodeElement.forEach((item) => {
      if (item.checked) {
        item.parentNode.remove()
      }
    })
    setBtnDelete(true)
  }

  const editText = (_e, i) => {
    list.forEach((item) => {
      if (item.id === i) {
        setEditedText(
          {
            ...editedText,
            editedInputClass: 'inputOn',
            btnCancelClass: 'cancelOn',
            index: i
          }
        )
        setStatus(
          {
            ...status,
            pending: 'pendingOn',
            inProgress: 'inProgressOn',
            ready: 'readyOn'
          }
        )
      }
    })
  }

  const btnConfirmEdit = () => {
    const { index } = editedText

    list.forEach((item) => {
      if (item.id === index) {
        list.splice(index, 1,
          {
            id: item.id,
            newText: editedText.textEdited
          }
        )
      }
    })
    setList([...list])
    btnCancelEdit()
  }

  const btnCancelEdit = () => {
    setEditedText(
      {
        ...editedText,
        editedInputClass: 'inputOff',
        btnConfirmClass: 'confirmOff',
        btnCancelClass: 'cancelOff',
        textEdited: ''
      }
    )
  }

  const verifyStatus = (e) => {
    const { index } = editedText
    console.log(index)
  }

  // const handleStatus = (i, id, on) => {
  //   console.log(i, id, on)
  //   setStatus([...status])
  //   console.log(status)
  // }

  return (
    <div className='main-container'>
      <Events.ButtonsUp
        btnAdd={ btnAdd }
        addText={ addText }
        btnDelete={ btnDelete }
        deleteText={ deleteText }
        setText={ setText }
        text={ text }
      />
      <Events.Tasks
        list={ list }
        verifyCheck={ verifyCheck }
        editText={ editText }
        />
      <Events.ButtonsDown
        verifyStatus={ verifyStatus }
        status={ status }
        editedText={ editedText }
        setEditedText={ setEditedText }
        btnConfirmEdit={ btnConfirmEdit }
        btnEdit={ btnEdit }
        btnCancelEdit={ btnCancelEdit }
      />
    </div>
  )
}

export default Main
