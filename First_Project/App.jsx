import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import App_Navigation from './Config'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <App_Navigation />
    </Provider>

  )
}

export default App
