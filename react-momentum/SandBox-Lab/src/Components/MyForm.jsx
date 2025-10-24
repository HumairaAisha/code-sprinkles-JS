import { useState } from "react"

function MyForm() {
   const formData = {
      date: '',
      hours:'',
      topic:'',
      category: '',
      description:''


   }
   const categories = ["React State", "Rendaring", "Dynamic Data", "Props", "Reusable Components" ]

   /* formInput - onbject name, setFormInput method use to update the formInput */
   const [formInput, setFormInput] = useState(formData)
   /* to validate field and show error messge */
   const [error, setError] = useState('')
   const [sucess, setSucess] = useState('')
   /* To store the data from multiple form  using array to store the data*/
   const [results, setResults] = useState([])

    function handleChange (event) {
      /* ...FormData take previous value and update the fileds */
         setFormInput ({...formInput, [event.target.name] : event.target.value})
   }
   function handleSubmit(event) {
      event.preventDefault()
      console.log(formInput)
      /* ...destructure array to get new array */
     setResults ([...results, {...formInput, id:Date.now()}])
      /* To validate all fields  */
      const {date, hours, topic, category, description} = formInput
      if (!date || !hours || !topic || !category || !description) {
         setError("All fields are required")
         setSucess("")

         return
      }
      setError('')
      setSucess("Create Succesfully")
      setFormInput(formData)
      
   }
  return (

    <div>
      <div>
         <form onSubmit={handleSubmit}>
            
         <label htmlFor="Date">Date</label>
         <input type="date" name="date" onChange={handleChange} value={formInput.date}  className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm"/>
         <label htmlFor="hours">Hours Spent</label>
         <input type="number" name="hours" onChange={handleChange} value={formInput.hours} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm"/>
         <label htmlFor="topic">What I Learned</label>
         <input type="text"  name="topic" value={formInput.topic} onChange={handleChange} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm"/>
         <label htmlFor="category">Select Category</label>
         <select name="category" value={formInput.category} onChange={handleChange} className="w-[10] h-[5] border border-gray-400 bg-gray-200 text-sm">
            <option value="">Select Category</option>
            {categories.map((category) => (
               <option key={category} value={category}>
                  {category}
               </option>
            ))}
          
         </select>
         <label htmlFor="description">Description</label>
         <textarea name="description" onChange={handleChange} value={formInput.description} rows={3} className="w-40 h-[5] border border-gray-400 bg-gray-200 text-sm"></textarea>

         <button type="submit" className="bg-green-900 text-white">Create</button>
         
         </form>
         {error && (
               <p className="text-red-500 tex-sm">{error}</p>
            )}
            {sucess && (
               <span className="text-green-900">{sucess}</span>
            )}
      </div>
      <div>
         {results.length > 0 && (
            <table>
               <thead>
                  <tr>
                  <th>Date</th>
                  <th>Hours</th>
                  <th>What I Learn</th>
                  <th>Category</th>
                  <th>Description</th>
               </tr>
               </thead>
               <tbody>
                 {results.map((result) => (
                  <tr key={result.id}>
                     <td>{result.date}</td>
                     <td>{result.hours}</td>
                     <td>{result.topic}</td>
                     <td>{result.category}</td>
                     <td>{result.description}</td>
                  </tr>
                 ))}
               </tbody>
            </table>
         )}
      </div>
      </div>
  )
}

export default MyForm