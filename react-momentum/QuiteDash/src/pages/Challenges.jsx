import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"


import Modal from "../components/Form/Modal"
import ChallengeJournalForm from "../components/Form/ChallengeJournalForm"
import useLocalStorage from "../components/data/useLocalStorage"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import DetailModal from "../components/UI/DetailModal"
import ViewMoreButton from "../components/UI/ViewMoreButton"

function Challenges() {
  const {recalculateStats} = useContext(DashboardStatsContext)
  const [modalOpen, setModalOpen] = useState(false)
  const openChanllengeForm = () => setModalOpen(true)
  const closeChallengeForm = () => setModalOpen(false)

  const [selectedChallengeRecord, setSelectedChallengeRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)

  const [challengeRecords, setchallengeRecords] = useLocalStorage('challengeRecords', [])

  const handleChallenge = (newChallengeRecord) => {

      const updateChallengeRecord = [...challengeRecords, {...newChallengeRecord, id:Date.now()}]

      setchallengeRecords(updateChallengeRecord)
      localStorage.setItem("challengeRecords", JSON.stringify(updateChallengeRecord));

      recalculateStats()

  }
  challengeRecords.sort((a, b) => new Date(a.date) - new Date(b.date))
  const handleViewMore = (challengeRecords) => {
    setSelectedChallengeRecord(challengeRecords)
    setOpenDetailModal(true)

  }
  const handleCloseDetailModal = () => {
    setSelectedChallengeRecord(null)
    setOpenDetailModal(false)
  }

  return (
    <div className="h-full bg-[#F3F4F6] p-4">
      <div className="bg-[#0A1A29] rounded-lg text-white p-1.5 m-2">
      <Heading title={"Your Challenge Footprints"}
      text={"Every challenge was a teacher revealing growth hidden in the details."}
      tagline={"Each fix tells more than a story of lessons learned; it speaks of patience, curiosity, and quiet breakthroughs"}/>
    
     <PrimaryButton onClick={openChanllengeForm}/>
      {modalOpen && (
        <Modal onClose={closeChallengeForm}>
          <ChallengeJournalForm key="challenge-form"
          onAddChallenge = {handleChallenge} closeForm={closeChallengeForm}/>
        </Modal>
      )}
     
      </div>
      <div className="mt-6 p-2 rounded-2xl">
        {challengeRecords.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-4 py-4 p-2">
          {challengeRecords.map((challengeRecord) => (

            <ReusableCard key={challengeRecord.id}>
              <p className="font-semibold py-0.5">Date: <span className="font-normal">{challengeRecord.date}</span></p>
              <p className="font-semibold py-0.5">Issue Title <span className="font-normal">{challengeRecord.issueTitle}</span></p>
               <p className="font-semibold py-0.5">Challenge Type: <span className="font-normal">{challengeRecord.challenge}</span></p>
              
              <ViewMoreButton onClick={() => handleViewMore(challengeRecord)}/>
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
        />
      )}
    </div>
  )
}

export default Challenges