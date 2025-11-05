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
      localStorage.setItem("challengeRecords", JSON.stringify(updateChallengeRecord));

       setTimeout(() => {
      console.log("StatsUpdated event");
      window.dispatchEvent(new Event("statsUpdated"));
    }, 200);

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
          <ChallengeForm onAddChallenge = {handleChallenge} closeForm={closeForm}/>
        </Modal>
      )}
      </div>
      </div>
      <div className="overflow-x-auto mt-6 p-2 rounded-2xl">
        {challengeRecords.length > 0 ? (
          <table className="min-w-full border border-[#0F172A] border-collapse text-[#0F172A]">
            <thead className="bg-[#E2E8F0] rounded-2xl">
              <tr className="border-b border-[#0F172A]">
                <th className="border border-[#0F172A] p-1">Date</th>
                <th className="border border-[#0F172A] p-1">Issue Title</th>
                <th className="border border-[#0F172A] p-1">Category</th>
                <th className="border border-[#0F172A] p-1">Issue Summary</th>
                <th className="border border-[#0F172A] p-1">Root Cause</th>
                <th className="border border-[#0F172A] p-1">Solution</th>
              </tr>
            </thead>
            <tbody>
              {challengeRecords.map((challenge) => (
                <tr key={challenge.id} className="border border-[#0F172A]">
                  <td className="border border-[#0F172A] p-2">{challenge.date}</td>
                  <td className="border border-[#0F172A] p-2">{challenge.issueTitle}</td>
                  <td className="border border-[#0F172A] p-2">{challenge.categoryType}</td>
                  <td className="border border-[#0F172A] p-2 break-words">{challenge.issueSummary}</td>
                  <td className="border border-[#0F172A] p-2 break-words">{challenge.rootCause}</td>
                  <td className="border border-[#0F172A] p-2 break-words">{challenge.solution}</td>
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