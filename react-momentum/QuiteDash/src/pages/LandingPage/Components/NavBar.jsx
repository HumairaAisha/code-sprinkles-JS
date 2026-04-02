
import { useNavigate } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { useState } from "react"
import { Menu, X } from 'lucide-react';
function NavBar() {

  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  
   const navItems = [
      {title: "Home", link: "/#home"},
      {title: "Features", link: "/#features"},
      {title: "How It Works", link: "/#how-it-works"},
      {title: "About Us", link:"/#about"}
   ]
  
  return (
    <div className="flex justify-between p-3 fixed top-0 left-0 right-0 bg-sandbox-navy z-10">
     
        <button onClick={() => {navigate("/")}} className="font-semibold text-2xl hover:cursor-pointer text-sandbox-ghost">Sandbox</button>
     
     <ul className='hidden md:flex items-center gap-8'>
       {navItems.map((menu) => (
         <li 
      key={menu.title} 
      className='text-lg font-semibold text-sandbox-ghost hover:cursor-pointer'>
      <HashLink 
      smooth 
      to={menu.link}
      className="hover:underline">
      {menu.title}
    </HashLink>
         </li>
      ))}
     </ul>
     <div className="flex justify-end gap-2">
      
     <div className="flex gap-4">
      <button className="hover:cursor-pointer font-semibold text-sandbox-ghost" onClick={() => {navigate("/login")}}>Login</button>
     <button onClick={() => {navigate("/signup")}} className="bg-sandbox-ghost text-sandbox-navy rounded px-2 hover:cursor-pointer text-sm">Get Started</button>
     
     </div>
     <button onClick={handleClick} className="md:hidden z-30">
       {!nav ? <Menu className="text-sandbox-navy"/> : <X className="text-sandbox-navy"/>}
     </button>
     <ul className={!nav ?  "hidden" : "absolute top-0 left-0 w-full min-h-screen bg-sandbox-navy text-gray-400 flex flex-col justify-center items-center gap-10" }>
      {navItems.map((menu) => (
         <li 
  key={menu.title} 
  onClick={() => {
    handleClick(); 
  }} 
  className='text-xl font-semibold text-white hover:cursor-pointer'
>
  <HashLink 
      smooth 
      to={menu.link}
      className="hover:underline"
    >
      {menu.title}
    </HashLink>
         </li>
      ))}
      </ul> 
     </div>
    </div>
  )
}

export default NavBar