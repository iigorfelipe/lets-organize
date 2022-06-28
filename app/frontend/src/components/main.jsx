import React, { useState, useEffect } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import '../css/main.css'
import Events from './events'
import ButtonsUp from './eventos/buttonsUp'
import ButtonsDown from './eventos/buttonsDown'

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
        newText: text,
        stts: ''
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
    setStatus(
      {
        pending: 'pendingOff',
        inProgress: 'inProgressOff',
        ready: 'readyOff'
      }
    )
  }

  const changeStatus = (id) => {
    const { index } = editedText

    list.forEach((item) => {
      if (item.id === index) {
        if (id === 'pendingIcon') {
          item.stts = <AiOutlineClockCircle />
        }
        if (id === 'inProgressIcon') {
          item.stts = <GiProgression />
        }
        if (id === 'readyIcon') {
          item.stts = <BsCheck2All />
        }
      }
    })

    setList([...list])
    btnCancelEdit()
  }
  console.log(list)
  const sortABCD = () => {
    list.sort((a, b) => {
      if (a.newText > b.newText) return 1
      if (a.newText < b.newText) return -1

      setList([...list])
      return 0
    })
  }

  // const sortDATA = () => {
  //   list.sort((a, b) => {
  //     if (a.id > b.id) return 1
  //     if (a.id < b.id) return -1

  //     setList([...list])
  //     return 0
  //   })
  // }

  // const sortSTTS = () => {
  //   list.sort((a, b) => {
  //     if (a.stts > b.stts) return 1
  //     if (a.stts < b.stts) return -1

  //     setList([...list])
  //     return 0
  //   })
  // }

  const sortList = (order) => {
    if (order === 'abcd') sortABCD()
    // if (order === 'data') sortDATA()
    // if (order === 'stts') sortSTTS()
  }

  return (
    <div className='main-container'>
      <ButtonsUp
        btnAdd={ btnAdd }
        addText={ addText }
        btnDelete={ btnDelete }
        deleteText={ deleteText }
        setText={ setText }
        text={ text }
        sortList={ sortList }
      />
      <Events.Tasks
        list={ list }
        verifyCheck={ verifyCheck }
        editText={ editText }
        />
      <ButtonsDown
        changeStatus={ changeStatus }
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
