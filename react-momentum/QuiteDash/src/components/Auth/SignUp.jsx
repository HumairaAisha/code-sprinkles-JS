
import { useNavigate } from "react-router-dom"
import InputField from "../UI/ReusableForm/InputField"
import MyForm from "../UI/ReusableForm/MyForm"

function SignUp() {
   const handleSubmit = (data) => {
      console.log(data);
      
   }
   const navigate = useNavigate()
  return (
    <section className="py-20 px-24 bg-[#F3F4F6]">
      <h1 className="hidden md:flex text-4xl font-semibold cursor-pointer" onClick={() => {navigate("/")}}>SandBox</h1>
      <div className="flex flex-col md:flex-row justify-between gap-10">
   <div className="py-8 hidden md:flex flex-col">
      <h2 className="font-semibold text-4xl my-4">Growth Doesn’t <br /> Happen by Accident </h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-lg">Start documenting your progress and turn effort into proof.</p>
  </div>

  <div className="shadow-xl w-[450px] ">
    <div className="text-center mb-2">
      <h1 className="font-bold text-2xl my-4">Welcome</h1>
    <h2 className="text-sm">Track your progress and build with intention.</h2>
    </div>
    <MyForm onSubmit={handleSubmit} >
    <InputField
    name={"fullName"}
    label={"Full Name"}
    type={"text"}
    placeholder={"John Doe"}
    />

    <InputField
    name={"email"}
    label={"Email"}
    type={"email"}
    placeholder={"email01@example.com"}
    />
    <InputField 
    name={"password"}
    label={"Password"}
    type={"password"}
    
    />
    <InputField 
    name={"password"}
    label={"Confirm Password"}
    type={"password"}
    />
    <button className="bg-[#0A1A29] text-white rounded-xl w-full py-2 hover:cursor-pointer my-6" onClick={() => {navigate("/login")}}>Sign Up to Dashboard</button>

    
   </MyForm>
   </div>
      </div>
    </section>
  )
}

export default SignUp