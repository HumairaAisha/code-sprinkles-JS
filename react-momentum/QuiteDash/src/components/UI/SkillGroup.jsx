import ActionsButton from "./ActionsButton"
import { useState } from "react"


function SkillGroup({label, items, variant, onAddSkill}) {
   const [showInput, setShowInput] = useState(false)
   const [newSkill, setNewSkill] = useState("") // to add new

   const showInlineInput = () => setShowInput(true)

   const handleAdd = () => {
      const trimmed = newSkill.trim()
      if (trimmed) {
         onAddSkill(trimmed)
      }
      setNewSkill("")
         setShowInput(false)
      
   }

   const handlekeyDown = (event) => {
      if (event.key === "Enter") {
         handleAdd()
      }else if (event.key === "Escape") {
         setNewSkill("")
         setShowInput(false)
      }
   }
  return (
    <div className="flex flex-col"> 
      <div className="flex py-0.5 justify-between">
      <p className="text-sm text-gray-800 font-semibold">{label}</p>
     <ActionsButton actions={[
      {label: "+", type:"ghost", onClick: showInlineInput}
      ]}/>
      </div>
      <div className="flex flex-wrap gap-2">
         {items.map((item) => (
            <span key={item} className={`text-xs px-2 py-0.5 rounded-full ${variant === "primary" ? "bg-sandbox-navy/10 text-sandbox-navy" : "bg-gray-200 text-gray-500"}`}>
               {item}
            </span>
         ))}
      
      {showInput && (
         <input
         type="text"
         onChange={(event) => setNewSkill(event.target.value)}
         placeholder="Add new skill"
         value={newSkill}
         className="text-xs px-3 py-1 border border-gray-300 rounded-full focus:outline-none focus:border-sandbox-navy min-w-[160px]"
         onBlur={handleAdd}
         onKeyDown={handlekeyDown}
         autoFocus
         />
      )}
      </div>
    </div>
  )
}

export default SkillGroup