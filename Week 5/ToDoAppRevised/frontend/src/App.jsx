import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <>
      <CreateTodo />
      <Todos todos={[{
        title: "hello",
        description: "1234"
      },
      {
        title: "hello1",
        description: "12344"
      }]

      } />
    </>
  )
}

export default App
