import { useState } from "react";
import { AddTodo } from "./components/AddTodo.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div className="w-full max-w-lg mx-auto mt-10 px-4">
     <h1 className="text-3xl text-center">hey this is new redux toolkit</h1>
     <AddTodo />
     <Todos />
   </div>
  );
}

export default App;
