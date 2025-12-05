
function SecondaryButton({onClick}) {
  return (
    <div className='flex justify-end'>
      <button type='submit' onClick={onClick} className='bg-[#0A1A29] text-white font-semibold px-2 py-1.5 my-2 rounded hover:cursor-pointer'>
         Record It
         </button>
    </div>
  )
}

export default SecondaryButton