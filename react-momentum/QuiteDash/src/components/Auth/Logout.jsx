import { useNavigate } from "react-router-dom"
import { LogOut } from 'lucide-react';
import toast from "react-hot-toast";


function Logout({showTitle}) {
  
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
    toast.success('You have logged out')
  }
  return (
   <div onClick={handleLogout}
   className="hover:bg-gray-700 text-white p-2 rounded-md hover:cursor-pointer">
      {showTitle ? (
        <div className="flex">
          <LogOut size={16} />
          <button  className="px-1 text-sm cursor-pointer">Log out</button>
        </div>
      ) : (
        <LogOut size={16}/>
      )}
    </div>
  )
}

export default Logout