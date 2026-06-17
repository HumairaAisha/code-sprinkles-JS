import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"

import Modal from "../components/Form/Modal"
import ChallengeJournalForm from "../components/Form/ChallengeJournalForm"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import DetailModal from "../components/UI/DetailModal"
import ViewMoreButton from "../components/UI/ViewMoreButton"
import ConfirmModal from "../components/UI/ConfirmModal"
import toast from "react-hot-toast"

function Challenges() {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(null)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [isConfrimOpen, setIsConfirmOpen] = useState(false)
  const [selectedChallengeRecord, setSelectedChallengeRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)



  const openChanllengeForm = () => {
    setModalOpen(true)
    setIsEditing(null)
  }
  const closeChallengeForm = () => {
    setModalOpen(false)
    setIsEditing(null)
  }

  const handleEditForm = (item) => {
    setIsEditing(item)
    setModalOpen(true)
    closeChallengeForm()
  }


  const {challengeRecords: newUpdatedChallengeRecords, setChallengeRecords: setNewUpdatedChallengeRecords} = useContext(DashboardStatsContext)

  const handleChallenge = (newChallengeRecord) => {

      const updateChallengeRecord = [...newUpdatedChallengeRecords, {...newChallengeRecord, id:Date.now()}]

      setNewUpdatedChallengeRecords(updateChallengeRecord)
      toast.success('New Challenge Fixed. \n Growth Documented!')

  }
   const sortedChallengeRecords = [...newUpdatedChallengeRecords].sort((a, b) => new Date(a.date) - new Date(b.date))
   
  const handleViewMore = (newUpdatedChallengeRecords) => {
    setSelectedChallengeRecord(newUpdatedChallengeRecords)
    setOpenDetailModal(true)

  }
  const handleCloseDetailModal = () => {
    setSelectedChallengeRecord(null)
    setOpenDetailModal(false)
  }

  const handleEditJournal = (updatedChallengeRecord) => {
    setNewUpdatedChallengeRecords((challenge) => challenge.map((item) => (
      item.id === isEditing?.id ? {...updatedChallengeRecord, id: item.id} : item )))
      toast.success("Chanllenge Journal Updated Successfully")
  }
  

  return (
    <div className="min-h-screen bg-sandbox-ghost p-4">
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
      <Heading title={"Your Challenge Footprints"}
      text={"Every challenge was a teacher revealing growth hidden in the details."}
      tagline={"Each fix tells more than a story of lessons learned; it speaks of patience, curiosity, and quiet breakthroughs"}/>
    
     <PrimaryButton 
     label={"Note It"}
     onClick={openChanllengeForm}/>
      {modalOpen && (
        <Modal onClose={closeChallengeForm}>
          <ChallengeJournalForm key="challenge-form"
          onAddChallenge = {isEditing ? handleEditJournal : handleChallenge} closeForm={closeChallengeForm}
          initialChallengeData = {isEditing}/>

        </Modal>
      )}
     
      </div>
      <div className="mt-6 p-2 rounded-2xl">
        {sortedChallengeRecords.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-4 py-4 p-2">
          {sortedChallengeRecords.map((newUpdatedChallengeRecord) => (

            <ReusableCard key={newUpdatedChallengeRecord.id}>
              <p className="font-semibold py-0.5">Date: <span className="font-normal">{newUpdatedChallengeRecord.date}</span></p>
              <p className="font-semibold py-0.5">Issue Title <span className="font-normal">{newUpdatedChallengeRecord.issueTitle}</span></p>
               <p className="font-semibold py-0.5">Challenge Type: <span className="font-normal">{newUpdatedChallengeRecord.challenge}</span></p>
              
              <ViewMoreButton onClick={() => handleViewMore(newUpdatedChallengeRecord)}/>
            </ReusableCard>
          ))}
         </div>
        ) : (
        <p className="text-center text-gray-600 py-4 italic">No challenge records yet. Click “Note It” to add one.</p>)}
      </div>
      {openDetailModal && selectedChallengeRecord && (
        <DetailModal
        data={selectedChallengeRecord}
        onClose={handleCloseDetailModal}
        fields={[
          {key: "date", label: "Date"},
          {key: "issueTitle", label: "Issue Title"},
          {key: "challengeCategory", label: "Challenge Type"},
          {key: "challengeTechnology", label: "Technolgy"},
          {key: "challenge", label: "Challenge Type"},
          {key: "issueSummary", label: "Issue Summary"},
          {key: "rootCause", label: "Root Cause"},
          {key: "solution", label: "Solution"},
          
        ]}
        onEdit={handleEditForm}
        />
      )}
    </div>
  )
}

export default Challenges