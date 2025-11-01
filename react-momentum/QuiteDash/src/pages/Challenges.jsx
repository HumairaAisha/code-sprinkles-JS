import { useState } from "react"
import Modal from "../components/Form/Modal"
import ChallengeForm from "../components/Form/ChallengeForm"
function Challenges() {
  const [modalOpen, setModalOpen] = useState(false)
  const openForm = () => setModalOpen(true)
  const closeForm = () => setModalOpen(false)

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
          <ChallengeForm />
        </Modal>
      )}
      </div>
      </div>
    </div>
  )
}

export default Challenges