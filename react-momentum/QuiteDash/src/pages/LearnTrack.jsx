import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"

import Modal from "../components/Form/Modal"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import DetailModal from "../components/UI/DetailModal"
import ViewMoreButton from "../components/UI/ViewMoreButton"
import LearnForm from "../components/Form/LearnForm"

function LearnTrack() {
  
  const [openModal, setOpenModal] = useState()

  const [selectedRecord, setSelectedRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)

  const handleViewMore = (record) => {
  setSelectedRecord(record)
  setOpenDetailModal(true)
}

const closeDetailModal = () => {
  setSelectedRecord(null)
  setOpenDetailModal(false)
}

  //const openLearningDetailsInfo = () => setOpenCard(true)
  //const closeLearningDetailsInfo = () => setOpenCard(false)

  const openLearningTrackerForm = () => setOpenModal(true)
  const closeLearningTrackerForm = () => setOpenModal(false)

   const {learnRecords: records, setLearnRecords: setRecords} = useContext(DashboardStatsContext)
   
   const handleNewRecords = (newRecord) => {
    
   const updatedRecords = [...records, {...newRecord, id:Date.now()}];
    setRecords(updatedRecords);
  }
  const sortedLearnTracker = [...records].sort((a, b) => new Date(a.date) - new Date(b.date))
  
  
  /* const handleDelete = (id) => {
      removeRecord(id)
  } */



  return (
    <div className="h-screen bg-sandbox-ghost p-4">
      <div>
        <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
          <Heading
        title={"Your Progress Footprints"}
        text={"Log your activity, track hours spent, and see how your progress unfolds over time, with ideas that shape your journey."}
        tagline={"Every new entry builds a record that tells a story."}
         />
           <PrimaryButton label={"Note It"}
           onClick={openLearningTrackerForm}/>
             {openModal && (
              <Modal onClose={closeLearningTrackerForm}>
                <LearnForm key="learning-form"
                onAddRecord={handleNewRecords} closeForm={closeLearningTrackerForm}/> 
              </Modal>
             )}
        </div>
        <div className="mt-6 px-2 py-2 rounded-2xl">
         {sortedLearnTracker.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-4 py-4 p-2">
            {sortedLearnTracker.map((record) => (

              <ReusableCard key={record.id}>
                <p className="font-semibold py-0.5">Date: <span className="font-normal">{record.date}</span></p>
                <p className="font-semibold py-0.5">Hours Spent: <span className="font-normal">{record.hours} Hours</span></p>
                <p className="font-semibold py-0.5">Concept: <span className="font-normal">{record.concept}</span></p>
                <ViewMoreButton onClick={() => handleViewMore(record)}/>
              </ReusableCard>
            ))}
          </div>
         ) : ( <p className="text-center text-gray-600 py-4 italic">
          No progress records yet. Click “Note It” to add one.
          </p>)}
         
        </div>
        {openDetailModal && selectedRecord && (
          <DetailModal
          data={selectedRecord}
          onClose={closeDetailModal}
          fields={[
          { key: "date", label: "Date" },
          { key: "hours", label: "Hours Spent" },
          { key: "category", label: "Category" },
          { key: "technology", label: "Technology" },
          { key: "focus", label: "Focus Area" },
          { key: "outcome", label: "key outcome" },
          { key: "notes", label: "Notes / Description" },
    ]}
          />
        )}
      </div>
     </div>
  )
}

export default LearnTrack