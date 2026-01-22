import { useEffect } from "react"
import useLocalStorage from "./data/useLocalStorage"


function StatsCard({id, title, notes, value, auto}) {
  const storagekey = `stats-${id}`
  const [count, setCount] = useLocalStorage(storagekey, value)

  useEffect(() => {
    if (auto) {
      setCount(value)
    }
  }, [value, auto, setCount])

  function increments() {
    if (auto) return
    if (title === "Confidence Level") {
      if (count < 10) {
        setCount(count + 1)
      }
    } else {
      setCount(count + 1)
    }
  }
  
  function decrement() {
    if(auto) return
    if (title === "Confidence Level") {
      if (count > 0) {
        setCount(count - 1)
      }
    } else {
      setCount(count - 1)
    }
  }   
   
  return (
    <div className="px-4">
      {/* <h2>{id}</h2> */}
      <p className="font-bold pt-1.5 text-3xl text-[#0F172A]">{count}</p>
      <h2 className="font-semibold text-gray-500">
        {title}
        </h2>
       <p className="text-xs text-gray-500 pb-2">{notes}</p>
       
       <div className="flex gap-4 py-3">
        {auto ? (
        <button disabled className="px-2 py-1 bg-gray-300 rounded-full text-[#1F2937] cursor-not-allowed text-xs">
          Auto Update
        </button>
       ) : (
        <>
        <button className="px-1.5 bg-[#1F2937] rounded-full text-white hover:cursor-pointer"
         onClick={increments}>+</button>
        <button className="px-2 bg-[#1F2937] rounded-full text-white hover:cursor-pointer"
        onClick={decrement}>-</button>
        </>
       )}
        
      </div>
    </div>
  )
}

export default StatsCard