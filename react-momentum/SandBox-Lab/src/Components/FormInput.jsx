import { useState } from "react"

function FormInput() {
   const formValues = {
      date:'',
      hours: '',
      topic: '',
      category: '',
      description:'',

   }
   const categories = ["React State", "API", "TailwindCss", "Reusable Components"]

   const [formData, setFormData] = useState(formValues)
   const [error, setError] = useState('')
   const handleChange = (event) => {
      setFormData ({...formData, [event.target.name] : event.target.value})
   }
   const handleSubmit = (event) => {
      event.preventDefault()
      console.log(formData);
      
      const {date, hours, topic, category, description} = formData
      if (!date || !hours || !topic || !category || !description) {
         setError('All fields are required!')
         return
      }
      setError('')
      setFormData(formValues)
      alert('Form Submitted Successfully')

   }
  return (
    <div>
      <div>
<form onSubmit={handleSubmit}>
   <input type="date" name="date" onChange={handleChange} value={formData.date} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm"/>
   <input type="number" name="hours" onChange={handleChange} value={formData.hours} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm"/>
   <input type="text" name="topic" onChange={handleChange} value={formData.topic} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm"/>
   <select name="category" onChange={handleChange} value={formData.category} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm">
      <option value="">Select Category</option>
      {categories.map((category) => (
         <option key={category} value={category}>
            {category}
         </option>
      ))}
   </select>
   <textarea name="description" onChange={handleChange} value={formData.description} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm"></textarea>
   <button type="submit">Create</button>
   
</form>
{error && (
   <span className="text-red-400">{error}</span>
)}
      </div>
    </div>
  )
}

export default FormInput