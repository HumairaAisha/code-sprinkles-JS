import { useState } from "react"

function MyForm() {
   const formData = {
      date: '',
      hours:'',
      topic: '',
      category: '',
      description: '',
   }
   const [formValue, setFormValue] = useState(formData)
   const [error, setError] = useState ('')

   const categories = ["TailwindCss","Components", "React Rendering", "Props", "API", "Axios", "React State Management", "Data and List", "CRUD", "React Mounting", "React Route & Navigation", "Protected Routes", "Chart & Data Visualization", "React Testing"]

   const handleChange = (event) => {
      setFormValue({...formValue, [event.target.name] : event.target.value})
   }
   const handleSubmit= (event) => {
      event.preventDefault();
      const {date, hours, topic, category, description} = formValue
      if (!date || !hours || !topic|| !category || !description) {
         setError('All fields are required')
         
         return
      } setError('')
      alert('New Learning Progress Log!')
      setFormValue(formData)
      
   }

  return (
    <div>
      <div className="flex flex-col">
         <form onSubmit={handleSubmit}>
         <h3 className="font-bold text-lg text-center">Document What You Learned</h3>
         <p className="text-center pb-4">Because every step in learning tells a story</p>
         
           <div className="flex justify-between">
             <div className="flex gap-1.5 py-2">
            <label htmlFor="date" className="font-semibold">Date</label>
            <input type="date" name="date" value={formValue.date} onChange={handleChange} className="border border-gray-400 bg-gray-200 text-sm rounded"/>
           </div>
           <div className="flex gap-2 py-2">
            <label htmlFor="hours" className="font-semibold">Hours Spent</label>
            <input type="number" name="hours" value={formValue.hours} onChange={handleChange} className="p-1 w-[50px] h-[30px] border border-gray-400 bg-gray-200 text-sm rounded"/>
           </div>
           </div>
          
           <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="topic" className="font-semibold">What I Learn</label>
            <input type="text" name="topic" value={formValue.topic} onChange={handleChange} className="py-2 border border-gray-400 bg-gray-200 text-sm rounded" />
           </div>
           <div className="flex flex-col  gap-1.5 ">
            <label htmlFor="category" className="font-semibold">Category</label>
            <select name="category" value={formValue.category} onChange={handleChange} className="border border-gray-400 bg-gray-200 text-sm rounded">
               <option value="">Select Category</option>
               {categories.map((category) => (
                  <option key={category} value={category}>
                     {category}
                  </option>
               ))}
            </select>
           </div>
           <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="description" className="font-semibold">Description</label>
            <textarea type="text" name="description"  value={formValue.description} rows={3} onChange={handleChange}  className=" h-[100px] border border-gray-400 bg-gray-200 text-sm rounded">
         
            </textarea>
           </div>
            <div className="flex justify-end">
                <button type="submit" className="bg-[#0F172A] text-white px-2 rounded hover:cursor-pointer">+ Learn</button>
            </div>
          
         </form>
         {error && (
            <p className="text-sm text-red-700">{error}</p>
         )}
      </div>
    </div>
  )
}

export default MyForm