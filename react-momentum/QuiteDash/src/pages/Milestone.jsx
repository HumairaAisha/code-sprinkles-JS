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

  //console.log(milestoneRecords);
  
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
   

    /* setTimeout(() => {
      console.log("StatsUpdated event");
      window.dispatchEvent(new Event("statsUpdated"));
    }, 200); */
  }
  //sorting by date
  //milestoneRecords.sort((a, b) => new Date(a.date) - new Date(b.date))
  

  return (
    <div className="min-h-screen bg-sandbox-ghost p-4">
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
       <Heading title={"Your Milestone Reflections"}
       text={"Pause, look back, and see how far you've come beyond the task and timelines."}
       tagline={"Each reflection captures the lessons, wins, and turning points that define your journey."}/>
        <PrimaryButton  label={"Note It"} onClick={openMilestoneForm}/>
        {openModal && (
          <Modal onClose={closeMilestoneForm}>
            <MilestoneForm onAddMilestone={updateMilestoneRecord} closeForm={closeMilestoneForm}/>
          </Modal>
        )}
        
      </div>
      <div className="pt-4">
        {milestoneRecords.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4 py-6 p-2">
            {milestoneRecords.map((milestoneRecord) => (
             <ReusableCard key={milestoneRecord.id}>
                <p className="font-semibold py-0.5">Milestone Achieved: 
                <span className="font-normal"> {milestoneRecord.milestoneTitle}</span>
                </p>
                <p className="font-semibold">How This Moment Felt:
                  <span className="font-normal">{milestoneRecord.milestoneMood}</span>
                </p>
               
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
          {key: "milestoneTitle", label: "Milestone Achieved"},
          {key: "milestoneMood", label: "How This Moment Felt"},
          {key: "milestoneDescription", label: "Description/Reflection"},
          
        ]}
        />
       )}
     
    </div>
  )
}

export default Milestone