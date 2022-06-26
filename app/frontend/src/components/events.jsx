import React from 'react'

class Events {
  ButtonsUp = (props) => {
    return (
      <section>
        <div>
          <input
            type='text'
            placeholder='Digite uma tarefa'
            onChange={ (e) => props.setText(e.target.value) }
            value={ props.text }
          />
        </div>
        <button
          disabled={ props.btnAdd }
          onClick={ props.addText }
        >
          Adicionar
        </button>
        <button
          disabled={ props.btnDelete }
          onClick={ props.deleteText }
        >
          Remover
        </button>
        <button>Filtrar</button>
      </section>
    )
  }

  Tasks = (props) => {
    return (
      props.list.map((item, i) => (
        <div key={ i }>
          <input
            id={ i }
            type='checkbox'
            className='checkbox'
            onClick={ props.verifyCheck }
          />
          <label htmlFor={ i }>
            { item.newText }
          </label>
          <button
            onClick={ (e) => props.editText(e, i) }
          >
            Editar
          </button>
        </div>
      ))
    )
  }

  ButtonsDown = (props) => {
    return (
      <section>
        <input
          type='text'
          className={ props.editedText.editedInputClass }
          onChange={
            (e) => props.setEditedText(
              {
                ...props.editedText,
                textEdited: e.target.value,
                btnConfirmClass: 'confirmOn'
              }
            )
          }
          value={ props.editedText.textEdited }
        />
        <button
          className={ props.editedText.btnConfirmClass }
          onClick={ props.btnConfirmEdit }
          disabled={ props.btnEdit }
        >
          Confirmar
        </button>
        <button
          className={ props.editedText.btnCancelClass }
          onClick={ props.btnCancelEdit }
        >
          Cancelar
        </button>
      </section>
    )
  }
}

export default new Events()
