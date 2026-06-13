
import InputField from "./UI/ReusableForm/InputField"
import MyForm from "./UI/ReusableForm/MyForm"
import { useNavigate } from "react-router-dom";



function Onboarding() {
   

   const navigate = useNavigate()
   const handleSumbit = (data) => {
      localStorage.setItem("user", JSON.stringify(data))
      navigate('/dashboard')
      
   }
  return (
    <div className="min-h-screen px-8 py-4">
       <div className="flex flex-col justify-between">
         <button onClick={() => navigate("/")} className="md:flex text-2xl font-semibold cursor-pointer md:mt-4">SandBox</button>

      <div className="max-w-7xl mx-auto">
         <div className="py-20 md:py-4 px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            <div className="hidden lg:flex flex-col justify-center">
            <h2 className="font-semibold text-5xl leading-tight mb-6 text-sandbox-navy">
              Build Your <br /> Growth Intentionally
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Track your progress, log challenges, and reflect on the journey.
            </p>
          </div>



   <div className="flex justify-center lg:justify-start">
      <div className="w-full shadow-xl rounded-3xl px-8 py-10">
         <MyForm onSubmit={handleSumbit}>
         <InputField
         name={"name"}
         label={"Name"}
         required={true}
         />

         <InputField 
         name={"role"}
         label={"Role"}
         required={true}
         placeholder="e.g Frontend Developer, Fullstack Engineer"
         />
      <button type="submit" className="bg-sandbox-navy text-white rounded-2xl w-full py-3 font-medium hover:bg-sandbox-navy/90 transition-colors hover:cursor-pointer">
      Go to Dashboard
      </button>

      </MyForm>
   </div>
   </div>
         </div>
      </div>
      
       </div>
    </div>
  )
}

export default Onboarding