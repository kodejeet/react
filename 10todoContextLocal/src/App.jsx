import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-center p-4 m-4 underline">Hello World!</h1>
    </>
  );
}

export default App;
