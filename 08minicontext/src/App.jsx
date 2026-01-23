import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>Hey trying somehting new</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
