import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"

import Heading from "../components/UI/Heading"
import PrimaryButton from "../components/UI/PrimaryButton"
import ReusableCard from "../components/UI/ReusableCard"
import Modal from "../components/Form/Modal"
import useLocalStorage from "../components/data/useLocalStorage"
import SandboxLogo from "..//assets/Sandbox1.png"
import ProjectForm from "../components/Form/ProjectForm"

function ProjectHub() {
  const {recalculateStats} = useContext(DashboardStatsContext)
  const [openModal, setOpenModal] = useState(false)

  const openProjectModal = () => setOpenModal(true)
  const closeProjectModal = () => setOpenModal(false)

  const [projectRecords, setProjectRecords] = useLocalStorage("projectRecord", [])

  const handleNewProject = (newProjectRecord) => {

    const updateProjectRecord = [...projectRecords, {...newProjectRecord, id:Date.now() }]
    console.log("Updated project records:", updateProjectRecord)
    setProjectRecords(updateProjectRecord)
   
    recalculateStats()
  }


  return (
    <div className='h-screen bg-sandbox-ghost p-4'>
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
        <Heading title={"Your Project Footprints"}
        text={"Capture the ideas you’ve brought to life, the features you’ve shaped, and the experiments that pushed you grow"}
        tagline={"Each project captures decisions made, skills applied, and progress earned over time."}
        />
        <PrimaryButton label={"+ Add"} onClick={openProjectModal}/>
           {openModal && (
            <Modal onClose={closeProjectModal}>
              <ProjectForm key="project-form"
               onAddProject = {handleNewProject} closeForm={closeProjectModal}/>
            </Modal>
           )}
      </div>
      <div className="py-6">
        {projectRecords.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-8 p-4"> 
          {projectRecords.map((projectRecord) => (

          <ReusableCard key={projectRecord.id}>
            <div className="relative w-full h-48 overflow-hidden rounded">
              <img src={projectRecord.image || SandboxLogo} alt="Project Image"/>
            <div className="absolute inset-0 top-0 opacity-0 hover:opacity-90 bg-[#0A1A29] transition-opacity duration-300 flex flex-col justify-center items-center rounded">
            <span className="font-bold text-white text-xl">{projectRecord.projectName}</span>
             
            <div className="flex gap-4 py-4">
              <a href={projectRecord.demoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-blue-500 hover:underline"
            > 
            <button className="bg-[#F3F4F6] text-[#0A1A29] font-medium rounded py-2 px-1.5 cursor-pointer">View Demo</button>
            </a>
             
            <a href={projectRecord.repoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className=""
            > <button className="bg-[#F3F4F6] text-[#0A1A29] font-medium rounded py-2 px-1.5 cursor-pointer">View Repo</button> </a>
            </div>
            </div>
            
            </div>

          </ReusableCard>
          ))}

          </div>
        ): (
          <p className="text-center text-gray-600 py-4 italic">No projects added yet. Click “Add” to note one.</p>
        )}
      </div>
    </div>
  )
}

export default ProjectHub