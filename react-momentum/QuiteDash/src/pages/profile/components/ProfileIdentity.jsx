import SandboxLogo from "../../../assets/SandboxLogo.png"
import { useNavigate } from "react-router-dom"
import ReusableCard from "../../../components/UI/ReusableCard"
import Sandbox from "../../../assets/Sandbox0.png"
import SocialLinks from "./SocialLinks"
import PrimaryButton from "../../../components/UI/PrimaryButton"


function ProfileIdentity() {
   const navigate = useNavigate()

  return (
    
      <ReusableCard>
        <div className="md:flex justify-between px-2">
          <div className="md:flex md:justify-between py-2">
         <div className="py-2 md:flex justify-center">
         <div className="md:flex gap-4">
               <div className="flex justify-between">
                  <img src={Sandbox} 
                  alt="profilePicture" 
                  className="rounded-full w-20 h-20" />
                  <button className="flex md:hidden">Edit</button>
               </div>
        <div className="py-2">
          <h2 className="">Aisha Muhyiddeen Ahmad</h2>
         <p className="text-sandbox-navy/75 text-sm">@Humaira01</p>
         <div className="flex gap-2 flex-wrap items-center">
         <p className="text-sm">Frontend Engineer</p>
         <span className="text-sandbox-navy/60">·</span>
         <span className="text-xs bg-sandbox-navy/10 text-sandbox-navy px-2 py-0.5 rounded-md">
           System Design
         </span>
         <span className="text-sandbox-navy/60">·</span>
         <span className="text-xs bg-sandbox-navy/10 text-sandbox-navy px-2 py-0.5 rounded-md">
           Mid-Level
         </span>
         </div>
         
        </div>
         </div>
         </div>
      </div>
      <div className="flex flex-col justify-center">
         <button className="hidden md:flex justify-end text-sandbox-navy rounded font-semibold hover:cursor-pointer mb-2">Edit</button>
         <div className="flex justify-between py-1">
            <p className="text-sm">Total Projects</p>
            <p className="text-sm">5</p>
         </div>
         <div className="flex gap-8 justify-between items-center">
            <p className="text-sm">View Project</p>
            <button type="button"  onClick={() => navigate("/projectHub")}
            className="bg-sandbox-navy text-sandbox-ghost rounded-md px-2 hover:cursor-pointer text-sm"   
            >View</button>
         </div>
      </div>
        </div>
      <div className="pt-8 md:py-2">
      
         <SocialLinks/>
         <p className="text-sm text-center text-gray-500">Joined  <span>September 2025</span></p>
      </div>
      </ReusableCard>
    
  )
}

export default ProfileIdentity