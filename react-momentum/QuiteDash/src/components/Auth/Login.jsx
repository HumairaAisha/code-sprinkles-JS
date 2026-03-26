import InputField from "../UI/ReusableForm/InputField"
import MyForm from "../UI/ReusableForm/MyForm"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate(); // hook to redirect

  const handleSubmit = (data) => {
    if (data.email && data.password) {
      setAuthUser({
        email: data.email,
        token: "fake-jwt-token",
      });

      // redirect to dashboard
      navigate("/dashboard");
    } else {
      console.log("Please fill in all fields");
    }
  }
  return (
   <section className="min-h-screen py-20 px-30 bg-[#F3F4F6]">
     <button onClick={() => navigate("/")} className="hidden md:flex text-4xl font-semibold cursor-pointer mt-4">SandBox</button>
    <div className="flex justify-center gap-20">
    <div className="py-8 hidden md:flex flex-col">
      <h2 className="font-semibold text-4xl mb-4">Build Your  <br /> Growth Intentionally</h2>
      <p className=" text-lg text-gray-700 leading-relaxed max-w-lg">Track your progress, log challenges, and reflect on the journey.</p>
  </div>
   <div className="shadow-lg px-2 w-[450px]">
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4">Welcome Back</h1>
    <h2 className="text-sm">Continue tracking your progress and build with intention.</h2>
    </div>
    <MyForm onSubmit={handleSubmit} >
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
    <div className="flex justify-end text-sm">
      <p>Forgot password</p>

    </div>
    <button className="bg-[#0A1A29] text-white rounded-xl w-full py-2 hover:cursor-pointer my-6">Sign In to Dashboard</button>

    
   </MyForm>
   </div>
 </div>
   </section>
  )
}

export default Login