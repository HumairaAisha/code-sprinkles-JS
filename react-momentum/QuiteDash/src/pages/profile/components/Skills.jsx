import PrimaryButton from "../../../components/UI/PrimaryButton";
import ReusableCard from "../../../components/UI/ReusableCard";



function Skills() {
  return (
       <ReusableCard className="h-full">
   <div className="flex justify-between">
      <h3 className="text-sandbox-navy">Skills</h3>
      <PrimaryButton label={"Add"}/>
   </div>
   <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>
   <div className="flex flex-wrap items-center gap-4 my-2">
      <span className="text-sm text-gray-800 font-semibold">Primary Stack</span>
  {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
    <span key={skill} className="text-xs bg-sandbox-navy/10 text-sandbox-navy px-2 py-0.5 rounded-full">
      {skill}
    </span>
  ))}
   </div>
   <div className="flex flex-wrap items-center gap-2 my-2">
  <span className="text-sm text-gray-800 font-semibold">Tools</span>
  {["Git", "VS Code", "Postman"].map((tool) => (
    <span key={tool} className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
      {tool}
    </span>
  ))}
</div>

<div className="flex flex-wrap items-center gap-2 my-2">
  <span className="text-sm text-gray-800 font-semibold">Familiar with</span>
  {["Figma", "REST APIs"].map((tool) => (
    <span key={tool} className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
      {tool}
    </span>
  ))}
</div>
<div className="flex flex-wrap items-center gap-2 my-2">
  <span className="text-sm text-gray-800 font-semibold">Exploring</span>
  {["Node Js", "System Design", "Fastify"].map((tool) => (
    <span key={tool} className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
      {tool}
    </span>
  ))}
</div>

      </ReusableCard>
    
  )
}

export default Skills