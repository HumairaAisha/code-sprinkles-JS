import {X} from  'lucide-react'

function Modal({children, onClose}) {
  return (
    <div className='pt-6 fixed inset-0 flex justify-center items-center z-30 text-[#0F172A]'>
      <div className=' w-[500px] max-h-[90vh] overflow-y-auto shadow-lg bg-white'>
         
   <button onClick={onClose} className='hover:cursor-pointer '>
      <X />
   </button>
   {children}
      </div>
    </div>
  )
}

export default Modal