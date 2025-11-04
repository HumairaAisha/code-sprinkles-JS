import { useState } from "react"

function MilestoneForm() {
   const formData = {
      date:'',
      achievement: '',
      supriseMoments: '',
      stillStruggle: '',
      proudProgress: '',

   }
   const [inputValue, setInputValue] = useState(formData)
   const [error, setError] = useState('')

   const handleChange = (event) => {
      setInputValue({...inputValue, [event.target.name] : event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      const {date, achievement, supriseMoments,stillStruggle, proudProgress} = inputValue
      if (!date || !achievement || !supriseMoments || !supriseMoments || !stillStruggle || !proudProgress) {
         setError('All input fields are required!')
         return
      } setError('')
         alert("You're doing great! \n You Just Documented a Moment of Growth")
         setInputValue(formData)
      
   }
  return (
    <div>
      <div className="flex flex-col px-4 py-2">
         <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-xl text-center py-2">Marking the Moments That Matter</h3>
            <p className="text-center pb-4 italic text-sm">Because each milestone holds a lesson, a proof of how far you've come</p>
            <div className="flex gap-1.5 py-2">
               <label htmlFor="date" name="date" className="font-semibold">Date</label>
               <input type="date" value={inputValue.date} onChange={handleChange} className="border border-gray-400 bg-gray-200 text-sm rounded"/>
            </div>
            <div className="flex flex-col gap-1.5 py-2">
               <label htmlFor="achievement" name="achievement" className="font-semibold">What concept finally clicked this week?</label>
               <textarea type="text" name="achievement" value={inputValue.achievement} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"/>
            </div>
            <div className="flex flex-col gap-1.5 py-2">
               <label htmlFor="supriseMoments" name="supriseMoments" className="font-semibold">What moment surprised or challenged me?
                  
               </label>
               <textarea name="supriseMoments" value={inputValue.supriseMoments} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"></textarea>
            </div>
            <div className="flex flex-col gap-1.5 py-2">
               <label htmlFor="stillStruggle" name="stillStruggle" className="font-semibold">What am still figuring out?</label>
               <textarea name="stillStruggle" value={inputValue.stillStruggle} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"></textarea>
            </div>

            <div className="flex flex-col gap-1.5 py-2">
               <label htmlFor="proudProgress" name="proudProgress" className="font-semibold">What made me feel proud of my progress?</label>
               <textarea type="text" name="proudProgress" value={inputValue.proudProgress} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"/>
            </div>
            <div className="flex justify-end">
               <button className="bg-[#0F172A] text-white font-semibold px-2 py-1.5 my-2 rounded hover:cursor-pointer">Record It</button>
            </div>
         </form>
         {error && (
            <p className="text-sm text-red-600">{error}</p>
         )}
      </div>
    </div>
  )
}

export default MilestoneForm