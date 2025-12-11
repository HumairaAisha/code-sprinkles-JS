import {X} from  'lucide-react'
function DetailModal({data, fields, onClose}) {
  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-lg max-w-lg shadow-lg overflow-y-auto">
      <div className='flex justify-end p-2'>
   <button onClick={onClose} className='hover:cursor-pointer '>
     <X/>
   </button>
      </div>
      <h2 className='text-center font-semibold text-lg'>Details</h2>
      

    
       <div className='p-2'>
         {fields.map((field) => (
      <div key={field.key}>
         <p className="font-semibold py-0.5 text-[#0A1A29]">{field.label}: <span className="font-normal">{data[field.key]}</span></p>
         
      </div>
   ))}
       </div>
  
    </div>
  
    </div>
  )
}

export default DetailModal