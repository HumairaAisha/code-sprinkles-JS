import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from './Header'

import { useState } from "react"
function Layout() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="flex bg-[#F3F4F6]">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen}
       className="w-48" />

      <div className={`${isOpen ? 'ml-48' : 'ml-16'} flex-1`}>
        <Header isOpen={isOpen}/>
      <div className="flex-1 mt-12 bg-[#F3F4F6]">
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default Layout