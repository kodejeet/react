import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

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
