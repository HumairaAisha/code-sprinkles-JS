import {  useState } from "react"
import useLocalStorage from "../components/data/useLocalStorage"

import Modal from "../components/Form/Modal"
import MilestoneForm from "../components/Form/MilestoneForm"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import ViewMoreButton from "../components/UI/ViewMoreButton"
import DetailModal from "../components/UI/DetailModal"

function Milestone() {
  const [openModal, setOpenModal] = useState(false)
  const openMilestoneForm = () => setOpenModal(true)
  const closeMilestoneForm = () => setOpenModal(false)

  const [milestoneRecords, setMilestoneRecords] = useLocalStorage("milestoneRecord", [])
  const [selectedMilestoneRecord, setSelectedMilestoneRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)

  const handleviewMore = (milestoneRecords) => {
  setSelectedMilestoneRecord(milestoneRecords)
  setOpenDetailModal(true)
  }

  const handleCloseDetailModal = () => {
    setSelectedMilestoneRecord(null)
    setOpenDetailModal(false)
  }



  const updateMilestoneRecord = (newMilestone) => {
    const safeRecords = Array.isArray(milestoneRecords) ? milestoneRecords : [];
    const updateMilestone = [...safeRecords, {...newMilestone, id: Date.now()}] 
    setMilestoneRecords(updateMilestone)
    localStorage.setItem("milestoneRecord", JSON.stringify(updateMilestone))

    /* setTimeout(() => {
      console.log("StatsUpdated event");
      window.dispatchEvent(new Event("statsUpdated"));
    }, 200); */
  }


  return (
    <div className="h-screen bg-[#F3F4F6] p-4">
      <div className="bg-[#0A1A29] rounded-lg text-white p-1.5 m-2">
       <Heading title={"Your Milestone Reflections"}
       text={"Pause, look back, and see how far you've come beyond the task and timelines."}
       tagline={"Each reflection captures the lessons, wins, and turning points that define your journey."}/>
        <PrimaryButton onClick={openMilestoneForm}/>
        {openModal && (
          <Modal onClose={closeMilestoneForm}>
            <MilestoneForm onAddMilestone={updateMilestoneRecord} closeForm={closeMilestoneForm}/>
          </Modal>
        )}
        
      </div>
      <div>
        {milestoneRecords.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 py-4 p-2">
            {milestoneRecords.map((milestoneRecord) => (
             <ReusableCard key={milestoneRecord.id}>
                <p className="font-semibold py-0.5">Date: <span className="font-normal">{milestoneRecord.date}</span></p>
                <p className="font-semibold py-0.5">Week: <span className="font-normal">{milestoneRecord.week}</span></p>
                <p className="font-semibold py-0.5">What Clicked: <span className="font-normal">{milestoneRecord.achievement}</span></p>
                <p className="font-semibold py-0.5">Confidence Level: <span className="font-normal">{milestoneRecord.confidenceLevel}</span></p>
                <ViewMoreButton onClick={() => handleviewMore(milestoneRecord)}/>
              </ReusableCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-4 italic"> No milestone records yet. Click “Note It” to add one.</p>
        )}
      </div>
       {openDetailModal && selectedMilestoneRecord && (
        <DetailModal
        data={selectedMilestoneRecord}
        onClose={handleCloseDetailModal}
        fields={[
          {key: "date", label: "Date"},
          {key: "week", label: "Week"},
          {key: "achievement", label: "What Clicked"},
          {key: "moments", label: "Suprise/ Challenge Moments"},
          {key: "struggleWith", label: "Still Struggle With"},
          {key: "confidenceLevel", label: "Confidence Level"},
        ]}
        />
       )}
    </div>
  )
}

export default Milestone