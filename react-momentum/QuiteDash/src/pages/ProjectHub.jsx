import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"

import Heading from "../components/UI/Heading"
import PrimaryButton from "../components/UI/PrimaryButton"
import ReusableCard from "../components/UI/ReusableCard"
import Modal from "../components/Form/Modal"
import SandboxLogo from "..//assets/Sandbox1.png"
import ProjectForm from "../components/Form/ProjectForm"
import Pagination from "../components/UI/Pagination"
import ActionsButton from "../components/UI/ActionsButton"
import toast from "react-hot-toast"
import { Pencil, Trash2 } from 'lucide-react';
import ConfirmModal from "../components/UI/ConfirmModal"


function ProjectHub() {
  
  const [openModal, setOpenModal] = useState(false)
  const [isEditing, setIsEditing] = useState(null)
  const [currentPage, setCurrentPage]  = useState(1)

  const [itemToDelete, setItemToDelete] = useState(null)
  const [isconfirmOpen, setIsConfirmOpen] = useState(false)

  const openProjectModal = () => {  
    setOpenModal(true)
    setIsEditing(null)
  }
  const closeProjectModal = () => {
    setOpenModal(false)
    setIsEditing(null)
  }

  const {projectRecords: newUpdatedProjectRecord, setProjectRecords: setNewUpdatedProjectRecord} = useContext(DashboardStatsContext)

    const handleNewProject = (newProjectRecord) => {
    const updateProjectRecord = [...newUpdatedProjectRecord, {...newProjectRecord, id:Date.now() }]
    //console.log("Updated project records:", updateProjectRecord)
    setNewUpdatedProjectRecord(updateProjectRecord)
    toast.success("Awesome! \n Your project has been successfully added.")
  }
  const handleEditProject = (updateProject) => {
    setNewUpdatedProjectRecord((project) => project.map((item) => (
      item.id === isEditing?.id ? {...updateProject, id: item.id} : item)
    ))
    toast.success("Project Update Successful")
    closeProjectModal()
  }
  const openEditForm = (item) => {
    setIsEditing(item)
    setOpenModal(true)
  }

  const openConfirmationModal = (item) => {
    setItemToDelete(item)
    setIsConfirmOpen(true)
  }

  const handleConfrimDelete = () => {
    setNewUpdatedProjectRecord((item) => item.filter((item) => item.id !== itemToDelete.id))
    setItemToDelete(null)
    setIsConfirmOpen(false)
    toast.success("Project Delete Successfull")
  }
  const handleCancelDelete = () => { 
    setItemToDelete(null)
    setIsConfirmOpen(false)

  }

  const projectsPerPage = 12
  const lastIndex = currentPage * projectsPerPage
  const firstIndex = lastIndex - projectsPerPage
  const paginatedProjects = newUpdatedProjectRecord.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(newUpdatedProjectRecord.length / projectsPerPage)


  return (
    <div className='min-h-screen bg-sandbox-ghost p-4'>
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
        <Heading title={"Your Project Footprints"}
        text={"Capture the ideas you’ve brought to life, the features you’ve shaped, and the experiments that pushed you grow"}
        tagline={"Each project captures decisions made, skills applied, and progress earned over time."}
        />
        <PrimaryButton label={"+ Add"} onClick={openProjectModal}/>
           {openModal && (
            <Modal onClose={closeProjectModal}>
              <ProjectForm key="project-form"
               onAddProject = {isEditing ? handleEditProject : handleNewProject} closeForm={closeProjectModal}
               initialProjectData = {isEditing}
               />
               
            </Modal>
           )}
      </div>
      <div className="pt-6">
        {paginatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 p-4"> 
          {paginatedProjects.map((projectRecord) => (

          <ReusableCard key={projectRecord.id}>
            <div className="relative w-full h-48 overflow-hidden rounded">
              <img src={projectRecord.image || SandboxLogo} alt="Project Image"/>
            <div className="absolute inset-0 top-0 opacity-0 hover:opacity-90 bg-sandbox-navy transition-opacity duration-300 flex flex-col justify-center items-center rounded">
            <span className="font-bold text-sandbox-ghost text-xl">{projectRecord.projectName}</span>
            </div>
            
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4 py-4">
              <a href={projectRecord.demoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-blue-500 hover:underline"
            > 
            <button className="bg-sandbox-ghost text-sandbox-navy font-medium rounded py-0.5 px-1.5 cursor-pointer">Demo</button>
            </a>
             
            <a href={projectRecord.repoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className=""
            > <button className="bg-sandbox-ghost text-sandbox-navy font-medium rounded py-0.5 px-1.5 cursor-pointer">Repo</button> </a>
            </div>
              <div className="py-4">
                <ActionsButton actions={[
                  {label: "Edit", type: "ghost",  icon: Pencil, onClick:() => openEditForm(projectRecord)},
                  {label: "Delete", type: "danger", icon: Trash2, onClick: () => openConfirmationModal(projectRecord)}
                ]}/>
              </div>
            </div>
          </ReusableCard>
          ))}

          </div>
        ): (
          <p className="text-center text-gray-600 py-4 italic">No projects added yet. Click “Add” to note one.</p>
        )}
       {currentPage > 1 &&  <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        />}
         <ConfirmModal 
              isOpen={isconfirmOpen}
              title={"Delete Project"}
              message={`Are you sure you want to delete "${itemToDelete?.projectName}?"`}
              confirmText={"Delete"}
              type="danger"
              onConfirm={handleConfrimDelete}
              onCancel={handleCancelDelete}
              
              />
      </div>
    </div>
  )
}

export default ProjectHub