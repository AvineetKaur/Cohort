import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {



  return (
    <div>
      <RecoilRoot>
        <Count />
        <IsEven />
      </RecoilRoot>
    </div>
  )
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {(isEven ? "It is even" : null)}
  </div>

}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>

}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count =>
        count + 1);

    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count - 1);

    }}>Decrease</button>
  </div>

}

export default App
