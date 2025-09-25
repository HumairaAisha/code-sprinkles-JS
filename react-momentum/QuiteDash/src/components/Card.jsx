import ProfileCard from "./ProfileCard"
import { FaUser } from "react-icons/fa"


function Card() {
  return (
    <div className="pb-6 flex justify-between">
      <div className="max-w-9/12 h-32 shadow rounded flex p-3 items-center bg-gray-100 gap-3">
      <div>
        <FaUser className="text-white text-7xl bg-[#1F2937] rounded-full p-3" />
      </div>
      <ProfileCard 
      name="Humiara Muhyiddeen"
      role="Junior Developer"
      status="Frontend Development"
      skill={"Html, JavaScript, TailwindCss, React"}
      joined={"October 2024"} 
      FocusArea={"Learning React"}/>
      </div>
    </div>
    
    

  )
}

export default Card