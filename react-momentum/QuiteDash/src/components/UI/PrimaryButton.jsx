
function PrimaryButton({onClick}) {
  return (
     <div className="flex justify-end px-4 items-center -my-2 mb-1">
       <button onClick={onClick} className="bg-white text-[#0F172A] px-1.5 py-1 rounded font-semibold hover:cursor-pointer">
      Note It
      </button>
     </div>
     
    
  )
}

export default PrimaryButton