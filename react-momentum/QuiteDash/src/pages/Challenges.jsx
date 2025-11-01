import { useState } from "react"
import Modal from "../components/Form/Modal"
import ChallengeForm from "../components/Form/ChallengeForm"
import useLocalStorage from "../components/data/useLocalStorage"
function Challenges() {
  const [modalOpen, setModalOpen] = useState(false)
  const openForm = () => setModalOpen(true)
  const closeForm = () => setModalOpen(false)

  

  const [challengeRecords, setchallengeRecords] = useLocalStorage('challengeRecords', [])

  const handleChallenge = (newChallengeRecord) => {

      const updateChallengeRecord = [...challengeRecords, {...newChallengeRecord, id:Date.now()}]

      setchallengeRecords(updateChallengeRecord)
  }

  return (
    <div className="h-screen bg-[#F3F4F6] p-4">
      <div className="bg-[#0f1a32] rounded-lg text-white p-1.5 m-2">
      <h3 className="font-semibold text-xl px-2 py-1">Your Challenge Footprints</h3>
      <p className="text-sm my-1 px-2">Every challenge was a teacher revealing growth hidden in the details. <br />
      Each fix tells more than a story of lessons learned; it speaks of patience, curiosity, and quiet breakthroughs
      </p>
      <div className="flex justify-end px-4 items-center -my-2 mb-1">
      <button onClick={openForm}
      
      className="bg-white text-[#0F172A] px-1.5 py-1 rounded font-semibold hover:cursor-pointer"
      >Note It</button>
      {modalOpen && (
        <Modal onClose={closeForm}>
          <ChallengeForm onAddChallenge = {handleChallenge}/>
        </Modal>
      )}
      </div>
      </div>
      <div>
        {challengeRecords.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Issue Title</th>
                <th>Category</th>
                <th>Issue Summary</th>
                <th>Root Cause</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              {challengeRecords.map((challenge) => (
                <tr>
                  <td>{challenge.date}</td>
                  <td>{challenge.issueTitle}</td>
                  <td>{challenge.categoryType}</td>
                  <td>{challenge.issueSummary}</td>
                  <td>{challenge.rotCause}</td>
                  <td>{challenge.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
        <p className="text-center text-gray-600 py-4 italic">No challenge records yet. Click “Note It” to add one.</p>)}
      </div>
    </div>
  )
}

export default Challenges