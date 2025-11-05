import { useState } from "react"

import Modal from "../components/Form/Modal"
import MilestoneForm from "../components/Form/MilestoneForm"

function Milestone() {
  const [openModal, setOpenModal] = useState(false)
  const openForm = () => setOpenModal(true)
  const closeForm = () => setOpenModal(false)

  return (
    <div className="h-screen bg-[#F3F4F6] p-4">
      <div className="bg-[#0f1a32] rounded-lg text-white p-1.5 m-2">
        <h3 className="font-semibold text-xl px-2 py-1">Your Milestone Reflections</h3>
        <p className="text-sm my-1 px-2">Pause, look back, and see how far you've come beyond the task and timelines. <br />
        Each reflection captures the lessons, wins, and turning points that define your journey.</p>

        <div className="flex justify-end px-4 items-center -my-2 mb-1">
        <button onClick={openForm}
        className="bg-white text-[#0F172A] px-1.5 py-1 rounded font-semibold hover:cursor-pointer">Note It</button>
        {openModal && (
          <Modal onClose={closeForm}>
            <MilestoneForm />
          </Modal>
        )}
        </div>
      </div>
    </div>
  )
}

export default Milestone