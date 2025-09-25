import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from './Header'

function Layout() {
  return (
    <div className="flex bg-[#F3F4F6]">
      <SideBar className="w-48" />

      <div className="flex-1 ml-48">
        <Header className=""/>
      <div className="flex-1 mt-12 bg-[#F3F4F6]">
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default Layout