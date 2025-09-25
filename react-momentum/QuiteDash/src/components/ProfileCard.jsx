import { useState } from "react"
import { ChevronDown, ChevronUp }  from 'lucide-react'


function ProfileCard({name, role, status, skill, joined, FocusArea}) {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="flex justify-between gap-4">
      <div>
     
      <h2 className="font-bold md:text-lg">{name}</h2>
      <h4 className="font-semibold text-gray-600 ">{role}</h4>
      <h4 className="text-sm text-gray-600">{status}</h4>
      </div>
      <div className="text-gray-600">
        <button onClick={() => setToggle(!toggle)} className="hover:cursor-pointer flex p-1">
          {toggle ? <ChevronUp /> : <ChevronDown />}
        </button>
        {toggle && (
          <ul className="text-gray-500 text-sm">
            <li className="font-bold">Joined: <span className="font-normal">{joined}</span></li>
            <li>{skill}</li>
            <li className="font-bold">Focus Area: <span className="font-normal">{FocusArea}</span></li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default ProfileCard