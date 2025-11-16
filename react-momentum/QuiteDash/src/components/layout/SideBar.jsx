import NavItem from './NavItem';
import { House, 
   LayoutDashboard, 
   BookOpenCheck, 
   Trophy, File, Settings, 
   CircleUserRound, ChevronRight, ChevronLeft, CircleCheckBig, Wrench, FolderOpen
   } from 'lucide-react';


function SideBar({isOpen, setIsOpen}) {

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
         title:'Challenge Journal',
         icon: Wrench,
         path:'/challenge'
      },
      {
         title: 'Milestone',
         icon : Trophy,
         path: '/milestone'
      },
      {
         title: 'Project Hub',
         icon: FolderOpen,
         path: '/projectHub'
      },
      /* {
         title: 'Resources',
         icon : File,
         path: '/resources'
      }, */
      
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
      <div className={`${isOpen ? "w-52" : "w-16"} h-full fixed top-0 left-0 z-20 bg-[#0F172A] text-white transition duration-150 ease-in-out`}>
         <div>
            {isOpen && <h1 className='font-bold md:text-2xl p-2 border-b-* border-b border-b-[#F3F4F6]'>SandBox</h1>}
         </div>
       <div className='flex items-start'>
           <button onClick={() => setIsOpen(!isOpen)} className='text-white mt-2 hover:cursor-pointer hover:bg-[#F3F4F6] hover:rounded-2xl hover:text-[#0F172A]'>
            {isOpen ? <ChevronLeft /> : <ChevronRight  />}
         </button>
       </div>
         
         
       <nav className='flex-1 p-2'>
         
         <div className='mt-2'>
            {menuItems.map ((item, index) => (
         <NavItem key={index} icon={item.icon} title={item.title} path={item.path} showTitle={isOpen} />
         ))}
         </div>

         <div className='mt-32'>
            {menuItemsBottom.map ((item, index) => (
               /* showTitle props so that when isOpen show title + icon */
         <NavItem key={index} icon={item.icon} title={item.title} path={item.path} showTitle={isOpen}/>
         ))}
         </div>
      </nav>
      </div>
    </div>
      
  )
}

export default SideBar