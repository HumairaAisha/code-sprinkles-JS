import PrimaryButton from "../../../components/UI/PrimaryButton";
import ReusableCard from "../../../components/UI/ReusableCard";
import SkillGroup from "../../../components/UI/SkillGroup";
import useLocalStorage from "../../../components/data/useLocalStorage";

function Skills() {
  const [skillGroups, setSkillGroups] = useLocalStorage ("skillGroup", [
  
    {id: "primary-stack", label: "Primary Stack", items: [], variant: "primary"},
    {id: "tools", label: "Tools", items: [], variant: "secondary"},
    {id: "familiar-with", label: "Familiar With", items: [], variant: "secondary"},
    {id: "exploring", label: "Exploring", items: [], variant: "secondary"}
 ])

  const handleAddSkill = (skillId, newSkill) => {
    setSkillGroups((prev) => prev.map((skill) => (
      skill.id === skillId ? {...skill, items: [...skill.items, newSkill]} : skill
    )))
  }
  return (
       <ReusableCard className="h-full">
   <div className="flex justify-between">
      <h3 className="text-sandbox-navy">Skills</h3>
   </div>
   <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>
    {skillGroups.map((skill) => (
        <SkillGroup
        key={skill.id}
      label={skill.label}
      items={skill.items}
      variant={skill.variant}
      onAddSkill={(newSkill) => handleAddSkill(skill.id, newSkill)}
      />
   

    ))}


  {/*  <div className="flex flex-wrap items-center gap-4 my-2">
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
</div> */}

      </ReusableCard>
    
  )
}

export default Skills