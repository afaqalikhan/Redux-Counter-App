import {useSelector} from "react-redux"

function counter() {

  const count = useSelector(state => state);

  return (
    <div className="text-white absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
      <h1 className="text-4xl mt-[80px] font-bold">{count}</h1>
    </div>
  )
}

export default counter