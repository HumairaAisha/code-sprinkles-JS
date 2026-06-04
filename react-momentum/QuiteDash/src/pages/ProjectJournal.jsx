import { useState } from "react";
import { useLocation } from "react-router-dom";
import Heading from ".//../components/UI/Heading";
import PrimaryButton from "../components/UI/PrimaryButton";
import Modal from "../components/Form/Modal"
import ProjectJournalForm from "..//components/Form/ProjectJournalForm";
import useLocalStorage from "../components/data/useLocalStorage";
import ReusableCard from "../components/UI/ReusableCard";
import ViewMoreButton from "../components/UI/ViewMoreButton";
import DetailModal from "../components/UI/DetailModal";
import SelectOptionField from "../components/UI/ReusableForm/SelectOptionField";
import toast from "react-hot-toast";




function ProjectJournal() {
  const location = useLocation()
  const selectedProjectId = location.state?.projectId

  const [openProjectJournal, setOpenProjectJournal] = useState(false)
  const openProjectJournalForm = () => setOpenProjectJournal(true)
  const closeProjectJournalForm = () => setOpenProjectJournal(false)
  const [selectedStatus, setSelectedStatus] = useState("allStatus")

  const [selectedJournal, setSelectedJournal] = useState(null)
  const [openMoreDetail, setOpenMoreDetail] = useState(false)
  

  const [projectJournalRecords, setProjectJournalRecords] = useLocalStorage("projectJournalRecords", [])

  const handleNewProjectJournal = (newProjectJournal) => {
    const storedProjects = JSON.parse(localStorage.getItem('sandbox:projectRecord') || '[]');
  
    const matchedProject = storedProjects.find(project => 
    String(project.id) === String(newProjectJournal.projectName)
  )

    if (!matchedProject) {
    toast.error("Selected project not found. Please try again.");
    return;
  }
    const safeRecords = Array.isArray(projectJournalRecords) ? projectJournalRecords : []
    const journalEntry = {
      ...newProjectJournal, id: Date.now, projectId: Number(newProjectJournal.projectName),
      projectName: matchedProject.projectName,
    }
    const updatedProjectJournal = [...safeRecords, journalEntry]
    setProjectJournalRecords (updatedProjectJournal)
  }

  const handleViewMore = (journalRecord) => {
    setSelectedJournal(journalRecord)
    setOpenMoreDetail(true)
  }
  const handleJournalDetail = () => {
    setSelectedJournal(null)
    setOpenMoreDetail(false)
  }
  const getStatusStyles = (status) => {
  switch (status) {
    case "Completed":   return "bg-[#009933] text-white";
    case "In Progress": return "bg-[#ff9900] text-black";
    case "Paused":       return "bg-[#ebcb4b] text-black";
    case "Archived":    return "bg-[#9CA3AF] text-white";
    default:            return "bg-[#6B7280] text-black";
  }
};
  const statusFiltered =
  selectedStatus === "allStatus" ? projectJournalRecords
    : projectJournalRecords.filter(
      record => record.projectStatus === selectedStatus)

      const filteredRecords = selectedProjectId  ? statusFiltered.filter(
        record => record.projectId === selectedProjectId) :  statusFiltered

  return (
    <div className='min-h-screen bg-sandbox-ghost p-4'>
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
      <Heading
      title={"Behind the Build"}
      text={"Capture the thoughts, choices, and lessons that unfolded as the project took shape."}
      tagline={"Because every project holds more than what’s visible at the end."}
      />    
     <PrimaryButton  label={"Note It"} onClick={openProjectJournalForm}
     />
     {openProjectJournal && (
      <Modal onClose={closeProjectJournalForm}>
        <ProjectJournalForm onAddProjectRecord={handleNewProjectJournal} closeForm={closeProjectJournalForm}/>
      </Modal>
     )}
      </div>
      <div className="flex justify-end">
        
          <SelectOptionField
          name={"statusFilter"}
          value={selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
        label={""}
        options={[
          {label: "All Status", value: "allStatus"},
          {label: "Completed", value: "Completed"},
          {label: "In Progress", value: "In Progress"},
          {label: "Paused", value: "Paused"},
          {label: "Archived", value: "Archived"}

        ]}
        className="border rounded hover:cursor-pointer"
        />
        
      </div>
      <div className="rounded-2xl">
        {projectJournalRecords.length === 0 ? (
          <p className="text-center text-gray-600 py-4 italic">No project journal documentated yet. Click “Note It” to add one.</p>
        ) : filteredRecords.length === 0 ? (
          <p className="text-center text-gray-600 py-4 italic">No projects found under status {selectedStatus}.</p>
        ) : (
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-4 p-2">
            {filteredRecords.map((projectJournalRecord) => (
              
            <ReusableCard key={projectJournalRecord.id}>
              <p className="font-semibold py-0.5">Start Date: <span className="font-normal">{projectJournalRecord.startDate}</span></p>
              <p className="font-semibold py-0.5">Project Name: <span className="font-normal">{projectJournalRecord.projectName}</span></p>
              <p className={`font-semibold py-0.5`}>Project Status: <span className={`text-sm px-2 py-0.5 rounded-full font-medium
                ${getStatusStyles(projectJournalRecord.projectStatus)}`}>
                  {projectJournalRecord.projectStatus}
                  </span></p>
             
               <ViewMoreButton onClick={() => handleViewMore(projectJournalRecord)}/>
            </ReusableCard>
            ))}
          </div>
        )}
      </div>
      {openMoreDetail && selectedJournal && (
        <DetailModal data={selectedJournal}
        onClose={handleJournalDetail}
         fields={[
          { key: "startDate", label: "Start Date"},
          { key: "projectName", label: "Project Name"},
          { key: "projectStatus", label: "Project Status"},
          { key: "coreFeatures", label: "Core Features"},
          { key: "projectDescription", label: "Project Description"},
        ]
      }
        />
      )}
    </div>
  )
}




export default ProjectJournal

