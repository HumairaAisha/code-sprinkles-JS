
import { NavLink } from "react-router-dom"

function NavItem({icon, title, path, showTitle}) {
  const Icon = icon
  return (
   <>
   <NavLink to={path} 
   className={({ isActive }) =>
    `flex items-center px-2 py-1.5 rounded-md my-2
     ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"}` 
  }
  > {showTitle ? <div className="flex gap-2">
       <Icon  className="w-5 h-5" />
      <span className="text-sm">{title}</span>
    </div> : <Icon className="w-5 h-5"/>}
    
  

   </NavLink>
   </>
  )
}

export default NavItem