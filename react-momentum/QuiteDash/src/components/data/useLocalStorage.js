import { useState, useEffect } from "react";


function useLocalStorage(key, initialValue) {
   const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initialValue
   })

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
   }, [key, value])

   const removeRecord = (id) => {
     const filtered = value.filter((item) => item.id !==id)
     setValue(filtered)
     localStorage.setItem(key, JSON.stringify(filtered))
   }

  return [value, setValue, removeRecord]
}

export default useLocalStorage