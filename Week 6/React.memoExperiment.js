import { useState } from "react"

import { memo } from "react";


function App() {
  const [counter, setCounter] = useState(0);

  return <div>
    <ButtonClicked />
    <button onClick={() => {
      setCounter(counter + 1)
    }}>Button clicked ({counter})</button>
  </div>
}

const ButtonClicked = memo(function ButtonClicked() {
  console.log("child rendered");
})

export default App;