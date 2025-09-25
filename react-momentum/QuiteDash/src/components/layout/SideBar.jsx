import { House, 
   LayoutDashboard, 
   BookOpenCheck, 
   Trophy, File, Settings, 
   CircleUserRound} from 'lucide-react';
import NavItem from './NavItem'


function SideBar() {
   

   const menuItems = [
      {
         title: 'Dashboard',
         icon : LayoutDashboard,
         path: '/dashboard'
      },
      {
         title: 'Learning Tracker',
         icon : BookOpenCheck,
         path: '/learn'
      },
      {
         title: 'Milestone',
         icon : Trophy,
         path: '/milestone'
      },
      {
         title: 'Resources',
         icon : File,
         path: '/resources'
      },
   ]

   const menuItemsBottom = [
       {
         title: 'Settings',
         icon : Settings,
         path: '/settings'
      },
      {
         title: 'Profile',
         icon : CircleUserRound,
         path: '/profile'
      },
   ]

   
  return (
    <div>
      <div className='w-48 h-full fixed top-0 left-0 bg-[#0F172A] text-white'>
         <h1 className='font-bold md:text-2xl p-2 border-b-* border-b border-b-[#F3F4F6]'>SandBox</h1>
      <nav className='flex-1 p-2'>
         
         <div className='mt-2'>
            {menuItems.map ((item, index) => (
         <NavItem key={index} icon={item.icon} title={item.title} path={item.path} />
         ))}
         </div>

         <div className='mt-52'>
            {menuItemsBottom.map ((item, index) => (
         <NavItem key={index} icon={item.icon} title={item.title} path={item.path} />
         ))}
         </div>
      </nav>

      </div>
    </div>
  )
}

export default SideBar