import ReusableCard from "../../../components/UI/ReusableCard"
import PrimaryButton from "../../../components/UI/PrimaryButton"

function Education() {
  return (
      <ReusableCard className="h-full">
   <div className="flex flex-col h-full">
       <div className="flex justify-between items-center">
          <h3>Education/Experience</h3>
          <PrimaryButton label="Add" />
        </div>
   
   <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>
  <div className="flex flex-col gap-1 overflow-y-auto max-h-48 pr-1">
     <div className="flex gap-1 py-1.5">
     <div className="bg-[#3c4a69] w-0.5 h-8 my-1.5"></div>
     <div>
      <p className="font-semibold text-sm">Frontend Engineer</p>
     <p className="text-xs my-0.5">2023 - Present</p>
     </div>
   </div>

   <div className="flex gap-1 py-1.5">
     <div className="bg-[#3c4a69] w-0.5 h-8 my-1.5"></div>
     <div>
      <p className="font-semibold text-sm">Bsc Software Engineering</p>
     <p className="text-xs my-0.5">2018 - 2024</p>
     </div>
   </div>
  </div>
   </div>
      </ReusableCard>
  
  )
}

export default Education