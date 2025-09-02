import { useState } from 'react'
import{Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa';


function NavBar() {
   const [isOpen, setIsOpen] = useState(false);

   //Function to toggle mobile view
   const toggle = () => setIsOpen(!isOpen)
   const menuItems = [
      {name: "Tips", to:"tips"},
      {name: "Schedule", to:"schedule"},
      {name: "Recycling Spots", to:"recycle"},
      {name: "Contact", to:"contact"}
   ];
  return (
   <nav className='sticky top-0 z-10 w-full pt-2 bg-white shadow-md cursor-pointer'>
      <div className='max-w-7xl mx-auto sm:px-4 lg:px-8 flex justify-between '>
         <div>
            <h1 className='font-bold text-xl md:text-2xl text-green-700'>NeatNest</h1>
         </div>
            {/*Desktop Menu*/}
               <ul className='hidden md:flex gap-8 text-green-800'>
                  {menuItems.map((menu) => (
                  <li key={menu.to} className='md:text-lg hover:underline hover:border-green-800 pb-2 transition-all duration-200'>
                     <Link to={menu.to} smooth duration={300}>
                     {menu.name}
                     </Link>
                  </li>
                  ))}
               </ul>

            <div onClick={toggle} className='md:hidden z-10 p-4 cursor-pointer'>
               {!isOpen ? <FaBars size={24} className='text-green-800' /> : <FaTimes size={24} className='text-white' />}
            </div>
            {/*Mobile View*/}
            <ul className={`absolute w-full h-auto top-0 left-0 flex flex-col text-center gap-5 py-4 text-white bg-green-800 md:hidden transform transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
               {menuItems.map((menu) => (
                  <li key={menu.to} className='text-xl py-3 hover:underline hover:decoration-white'>
                  <Link onClick={toggle} to={menu.to} smooth duration={300}>
                  {menu.name}</Link></li>
               
               ))}
            </ul>
            
         </div>
      </nav>
   
  )
}

export default NavBar