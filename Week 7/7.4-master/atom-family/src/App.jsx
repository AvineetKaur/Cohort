
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({ id }) {
  const currentTodo = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  )
}

export default App
