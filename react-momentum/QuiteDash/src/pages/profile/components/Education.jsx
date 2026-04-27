import ReusableCard from "../../../components/UI/ReusableCard"
import PrimaryButton from "../../../components/UI/PrimaryButton"

function Education() {
  return (
    <div>
      <ReusableCard>
   <div className="flex justify-between">
      <h3 className="">Education/Experience</h3>
      <PrimaryButton label={"Add"}/>
   </div>
   <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>
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
      </ReusableCard>
    </div>
  )
}

export default Education