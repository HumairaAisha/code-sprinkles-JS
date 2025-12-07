import MyForm from "../UI/ReusableForm/MyForm"
import FormText from "../UI/ReusableForm/FormText"
import InputField from "../UI/ReusableForm/InputField"
import InputFieldNum from "../UI/ReusableForm/InputFieldNum"
import TextAreaField from "../UI/ReusableForm/TextAreaField"
import ChallenegCategoryField from "../UI/ReusableForm/ChallenegCategoryField"

import toast from "react-hot-toast"
function ChallengeJournalForm({onAddChallenge, closeForm}) {
  
   const handleSubmit = (data) => {

     onAddChallenge(data) 

      toast.success('New Challenge Fixed. \n Growth Documented!')
      setTimeout(() => {closeForm()}, 1000);
      

   }
  return (
    <div>
      <MyForm  onSubmit={handleSubmit}>
      <FormText title={"Document What You Fixed"}
      text={"Because every fix carries a story of patience, persistence, and growth."}/>
      <InputFieldNum
      name="date"
      label={"Date"}
      type={"date"}
      requiredMessage={"select date"}
      />
      <InputField
      name="issueTitle"
      label={"Issue Title"}
      />
      <ChallenegCategoryField/>
      
      <TextAreaField 
      name={"issueSummary"}
      label={"Issue Summary"}
      type={"type"}
      
      />

      <TextAreaField
      name={"rootCause"}
      label={"Root Cause"}
      />

      <TextAreaField
      name={"solution"}
      label={"Solution"}
      />
      </MyForm>
    </div>
  )
}

export default ChallengeJournalForm
