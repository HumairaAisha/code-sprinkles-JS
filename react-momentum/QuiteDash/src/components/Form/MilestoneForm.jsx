import MyForm from "../UI/ReusableForm/MyForm"
import InputFieldNum from "../UI/ReusableForm/InputFieldNum"
import TextAreaField from "../UI/ReusableForm/TextAreaField"
import FormText from "../UI/ReusableForm/FormText"

import toast from "react-hot-toast"

function MilestoneForm({onAddMilestone, closeForm}) {
   const handleSubmit = (data) => {
      onAddMilestone(data)

      toast.success("You're doing great! \n You Just Documented a Moment of Growth")
      setTimeout(() => {closeForm()}, 1000);
   }
  return (
    <div>
      <MyForm onSubmit={handleSubmit}>
         <FormText  
         title={"Marking the Moments That Matter"}
         text={"Because each milestone holds a lesson, a proof of how far you've come"}
         />
         <div className="flex justify-between">
            <InputFieldNum
            name="date"
            label={"Date"}
            type={"date"}
            requiredMessage={"select date"}
            />

            <InputFieldNum
            name={"week"}
            label={"Week"}
            type={"number"}
            />
         </div>
            <TextAreaField
            name={"achievement"}
            label={"What finally clicked this week?"}
            />

            <TextAreaField
            name={"moments"}
            label={"Surprising or Challenging Moment"}
            />
            
            <TextAreaField
            name={"struggleWith"}
            label={"What I'm still working on"}
            />

            
            <TextAreaField
            name={"proudProgress"}
            label={"Proud Moment"}
            />
         <InputFieldNum
         name={"confidenceLevel"}
         label={"Confidence Level (1–10) "}
         type={"number"}
         />
         
      </MyForm>
    </div>
  )
}

export default MilestoneForm