import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"


function App() {
  return (
    <div>
      <CreateTodo />
      <Todos todos={[
        {
          title: "hello",
          description: "kkk"
        }, {
          title: "hello",
          description: "kkk"

        }
      ]} />
    </div>


  )

}

export default App
