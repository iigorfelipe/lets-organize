import React, { useContext } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import '../css/main.css'
import Tasks from './tasks'
import ButtonsUp from './eventos/buttonsUp'
import ButtonsDown from './eventos/buttonsDown'
import Context from './providers/context'

const Main = () => {
  const {
    text,
    list,
    setList,
    setText,
    setStatus,
    editedText,
    nodeElement,
    setBtnDelete,
    setEditedText,
    setNodeElement
  } = useContext(Context)

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
            btnCancelClass: 'cancelOn',
            editedInputClass: 'inputOn',
            index: i
          }
        )
        setStatus(
          {
            ready: 'readyOn',
            pending: 'pendingOn',
            inProgress: 'inProgressOn'
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
        btnCancelClass: 'cancelOff',
        editedInputClass: 'inputOff',
        btnConfirmClass: 'confirmOff',
        textEdited: ''
      }
    )
    setStatus(
      {
        ready: 'readyOff',
        pending: 'pendingOff',
        inProgress: 'inProgressOff'
      }
    )
  }

  const changeStatus = (id) => {
    const { index } = editedText

    list.forEach((item) => {
      if (item.id === index) {
        if (id === 'readyIcon') {
          item.stts = <BsCheck2All />
        }
        if (id === 'inProgressIcon') {
          item.stts = <GiProgression />
        }
        if (id === 'pendingIcon') {
          item.stts = <AiOutlineClockCircle />
        }
      }
    })
    setList([...list])
    btnCancelEdit()
  }

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
        addText={ addText }
        sortList={ sortList }
        deleteText={ deleteText }
      />
      <Tasks
        list={ list }
        editText={ editText }
        verifyCheck={ verifyCheck }
        />
      <ButtonsDown
        changeStatus={ changeStatus }
        btnCancelEdit={ btnCancelEdit }
        btnConfirmEdit={ btnConfirmEdit }
      />
    </div>
  )
}

export default Main
