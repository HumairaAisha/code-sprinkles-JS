import { useState } from "react"
function StatsCard({id, title, notes, value}) {
  const [count, Setcount] = useState(value)
  function increments() {
    if (title === "Confidence Level") {
      if (count < 10) {
        Setcount(count + 1)
      }
    } else {
      Setcount(count + 1)
    }
  }
  
  function decrement() {
    if (title === "Confidence Level") {
      if (count > 0) {
        Setcount(count - 1)
      }
    } else {
      Setcount(count - 1)
    }
  }   
   
  return (
    <div className="px-4">
      <h2>{id}</h2>
      <p className="font-bold pt-1.5 text-3xl text-[#0F172A]">{count}</p>
      <h2 className="font-semibold text-gray-500">
        {title}
        </h2>
       <p className="text-xs text-gray-500">{notes}</p>
       <div className="flex gap-4 py-2">
        <button className="px-1.5 bg-[#1F2937] rounded-full text-white hover:cursor-pointer"
         onClick={increments}>+</button>
        <button className="px-2 bg-[#1F2937] rounded-full text-white hover:cursor-pointer"
        onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default StatsCard