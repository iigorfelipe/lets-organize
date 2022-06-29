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

export const activeDisplay = (display, i) => {
  return {
    ...display,
    index: i,
    ready: 'readyOn',
    pending: 'pendingOn',
    inProgress: 'inProgressOn',
    btnCancelClass: 'cancelOn',
    editedInputClass: 'inputOn'
  }
}
