
import {X} from  'lucide-react'

function Modal({children, onClose}) {
  return (
    <div className='fixed inset-0 flex justify-center items-center z-20 py-4 text-[#0F172A]'>
      <div className='w-[400px] shadow-lg bg-white p-4'>
         
   <button onClick={onClose} className='hover:cursor-pointer'>
      <X />
   </button>
   {children}
      </div>
    </div>
  )
}

export default Modal