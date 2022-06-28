import React from 'react'
import Main from './components/main'
import Provider from './components/provider'

const App = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  )
}

export default App
