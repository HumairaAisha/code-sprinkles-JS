import FormText from '../UI/ReusableForm/FormText'
import InputField from '../UI/ReusableForm/InputField'
import MyForm from '../UI/ReusableForm/MyForm'
import InputFieldNum from '../UI/ReusableForm/InputFieldNum'
import TextAreaField from '../UI/ReusableForm/TextAreaField'
import CategoryField from '../UI/ReusableForm/CategoryField'

import toast from 'react-hot-toast'


function LearnForm({onAddRecord, closeForm}) {

   const handleSubmit = (data) => {
     
      onAddRecord(data)

       toast.success('New Learning Progress Log!')
      setTimeout(() => {closeForm()}, 1000);
      
   } 

   
      
   
  return (
    <div>
      <MyForm  onSubmit={handleSubmit}>
         <FormText
         title={"Document What You Learned"}
         text={"Because every step in learning tells a story"} />
         <div className='flex justify-between'>
      <InputFieldNum label={"Date"} name={"date"} type={"date"} requiredMessage={"select date"}/>
      <InputFieldNum label={"Hours Spent"} name={"hours"} type={"number"} requiredMessage={"input hours"} />
         </div>

     <InputField label={"Concept Mastered"} name={"topic"} type={"text"}/>
     <CategoryField />
    
     <TextAreaField label={"Note"} name={"description"} requiredMessage ="concept note is required" 
     />
      </MyForm>
    </div>
  )
}

export default LearnForm