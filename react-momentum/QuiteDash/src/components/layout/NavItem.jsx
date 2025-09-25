
import { NavLink } from "react-router-dom"

function NavItem({icon, title, path}) {
  const Icon = icon
  return (
   <>
   <NavLink to={path} 
   className={({ isActive }) =>
    `flex items-center gap-4 px-3 py-2 rounded-md 
     ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"}`
  }
  >
   
    <div className="flex gap-2">
       <Icon  className="w-5 h-5" />
      <span>{title}</span>
    </div>
  

   </NavLink>
   </>
  )
}

export default NavItem