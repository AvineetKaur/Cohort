import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"

function App() {
  const [id, setId] = useState();
  function configureId() {


  }

  return <div>
    <button onClick={configureId(1)}>1</button>
    <button onClick={configureId(2)}>2</button>
    <button onClick={configureId(3)}>3</button>
    <button onClick={configureId}>4</button>

    <Todo id={id} />
  </div>
}



function Todo({ id }) {

  const [todo, setTodo] = useState({});

  //implement effect here
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async (response) => {
      const result = await response.json();
      setTodo(result.todo);
    });
  }, [])

  return <div>
    <h2>{todo.title}</h2>
    {todo.description}
  </div>
}
export default App
