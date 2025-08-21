
import { useState, useCallback, memo } from "react"


function App() {
  const [counter, setCounter] = useState(0);

  const show = useCallback(function show() {
    console.log("show function")
  }, [])

  return <div>
    <ButtonClicked inprtFunction={show} />
    <button onClick={() => {
      setCounter(counter + 1)
    }}>Button clicked ({counter})</button>
  </div>
}

const ButtonClicked = memo(function ButtonClicked({ show }) {
  console.log("child rendered");
})

export default App;