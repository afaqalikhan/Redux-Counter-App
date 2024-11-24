import Counter from "./components/counter"
import {useDispatch} from "react-redux"
import ReduxTag from "./components/ReduxTag";

function App() {
  const dispatch = useDispatch();
  return (
  <div className="main">
    <div className="w-full h-screen bg-orange-500">
       <ReduxTag />
      <button onClick={e => dispatch({ type : 'INCREMENT'})} className="py-2 px-6 bg-black text-white hover:text-orange-500 rounded-md absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"> INCREMENT </button>
       <Counter />
      <button onClick={e => dispatch({ type : 'DECREMENT'})} className="py-2 px-6 bg-black text-white hover:text-orange-500 rounded-md absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] mt-[90px]"> DECREMENT </button>
    </div>
  </div>
  )
}

export default App