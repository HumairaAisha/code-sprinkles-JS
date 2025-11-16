import { Settings,Bell } from 'lucide-react';
import { FaUser } from "react-icons/fa"
import { useLocation } from 'react-router-dom';


function Header({isOpen}) {
  const location = useLocation()

  const pageTitle = {"/dashboard": "Dashboard", "/learn": "Learning Tracker", "/challenge" : "Challenge Journal", "/milestone": "Milestone","/projectHub": "Project Hub", "/resources": "Resources", "/settings": "Settings", "/profile": "Profile"}
  const {pathname} = location
  const title = pageTitle[pathname] || "SandBox"
 
  return (
    <header className={`${isOpen ? "w-[calc(100%-13rem)]" : "w-[calc(100%-4rem)]"} h-12 fixed top-0 z-30 flex-2 border-b-* border-b border-b-[#0F172A] bg-[#F3F4F6]`}>
      <div className="">
     <div className='flex justify-between p-2'>
      <h1 className='font-bold md:text-2xl text-[#0F172A] px-2'>{title}</h1>
       <div className='flex gap-2'>
        <div className='text-[#0F172A] pt-2'>
          <Bell />
        </div>
        <div className='text-[#0F172A] pt-2'>
          <Settings />
        </div>
        <div className='text-white bg-[#0F172A] rounded-full p-2 text-lg'>
          <FaUser />
        </div>
      </div>
     </div>
      </div>
    </header>
  )
}

export default Header