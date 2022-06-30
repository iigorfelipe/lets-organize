export const resetDisplay = (display) => {
  return {
    ...display,
    textEdited: '',
    ready: 'readyOff',
    pending: 'pendingOff',
    inProgress: 'inProgressOff',
    btnCancelClass: 'cancelOff',
    editedInputClass: 'inputOff',
    btnConfirmClass: 'confirmOff'
  }
}

export const activeDisplay = (display, id) => {
  return {
    ...display,
    index: id,
    ready: 'readyOn',
    pending: 'pendingOn',
    inProgress: 'inProgressOn',
    btnCancelClass: 'cancelOn',
    editedInputClass: 'inputOn'
  }
}
