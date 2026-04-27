import SandboxLogo from "../../../assets/SandboxLogo.png"
import { useNavigate } from "react-router-dom"
import ReusableCard from "../../../components/UI/ReusableCard"
import Sandbox from "../../../assets/Sandbox0.png"
import SocialAcctount from "./SocialAcctount"
import PrimaryButton from "../../../components/UI/PrimaryButton"
import { Edit } from "lucide-react"

function ProfileIdentity() {
   const navigate = useNavigate()

  return (
    <div className="">
      <ReusableCard className="">
        <div className="flex justify-between">
          <div className="flex justify-between py-2">
         
         <div className="py-2 flex justify-center">
         <div className="flex gap-4">
               <img src={Sandbox} alt="profilePicture" className="rounded-full w-20 h-20" />
        <div className="py-2">
          <h2 className="">Aisha Muhyiddeen Ahmad</h2>
        {/*  <p>Humaira@01</p> */}
         <p className="text-sm">@Humaira01</p>
         <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
           {/*  <p className="text-sandbox-navy font-bold">Username</p> */}
            <p className="text-sm">Frontend Engineer</p>
         </div>
         <div className="flex gap-2">
            <p className="text-sm">Joined  <span>September 2025</span></p>
         
         </div>
         </div>
        </div>
         </div>
         </div>
      </div>
      <div className="flex flex-col justify-center">
         <button className="bg-sandbox-ghost text-sandbox-navy rounded font-semibold hover:cursor-pointer mb-2">Edit</button>
         <div className="flex justify-between py-0.5">
            <p className="text-sm">Total Projects</p>
            <p className="text-sm">10</p>
         </div>
         <div className="flex gap-4 py-1.5">
            <p className="text-sm">View Project</p>
            <button type="button"  onClick={() => navigate("/projectHub")}
            className="bg-sandbox-navy text-sandbox-ghost rounded-md px-2 hover:cursor-pointer"   
            >View</button>
         </div>
      </div>
        </div>
      <div>
         <SocialAcctount/>
      </div>
      </ReusableCard>
    </div>
  )
}

export default ProfileIdentity