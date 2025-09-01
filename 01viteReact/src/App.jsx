import Test from "./test"

function App() {
const username = "vite and react"
  return (
    <>
    <h1>hey whats up {username}</h1> // the username here is a evaluated expression
      <Test/>
      <span>what is happening</span>

    </>
    
  )
}

export default App
