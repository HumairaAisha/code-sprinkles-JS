import MyForm from "../UI/ReusableForm/MyForm"
import FormText from "../UI/ReusableForm/FormText"
import InputField from "../UI/ReusableForm/InputField"
import InputFieldNum from "../UI/ReusableForm/InputFieldNum"
import InputFieldUrl from "../UI/ReusableForm/InputFieldUrl"
import TextAreaField from "../UI/ReusableForm/TextAreaField"
import ImageInput from "../UI/ReusableForm/ImageInput"
import toast from "react-hot-toast"


function ProjectForm({onAddProject, closeForm}) {

   const handleSubmit = (data) => {  
    const file = data.imageFile?.[0]
       console.log("Form submitted:", data)
       if (!file) {
        onAddProject({
          ...data, image: null,
          
        })
        return
       }
       //convert to string 
       const reader =  new FileReader()
       reader.onloadend = () => {
        const base64Image = reader.result
         onAddProject({
      ...data,
      image: base64Image,
    })
       }
   
   reader.readAsDataURL(file)

   toast.success("Awesome! \n Your has been successfully added.")
      setTimeout(() => {closeForm()}, 1000);
   }
  return (
    <div>
      <MyForm onSubmit={handleSubmit}>
         <FormText
         title={"Documenting Work That Matters"}
         text={"Because every project tells a story of challenges overcome and lessons learned"}
         />
       <div className="mb-4">
         <ImageInput/>
       </div>

         <InputField
         name={"projectName"}
         label={"Project Name"}
         type={"text"}
         />
         <InputFieldUrl 
         name={"demoUrl"}
         label={"Demo URL"}
         type={"url"}
         />

         <InputFieldUrl
         name={"repoUrl"}
         label={"GitHub Repo link"}
         type={"url"}
         />
        
      </MyForm>
    </div>
  )
}

export default ProjectForm