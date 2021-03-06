import React from 'react'
import Main from './components/main'
import Provider from './components/providers/provider'

const App = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  )
}

export default App
