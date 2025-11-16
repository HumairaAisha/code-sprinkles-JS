import { useState } from "react"
import useLocalStorage from "../components/data/useLocalStorage"

import Modal from "../components/Form/Modal"
import MilestoneForm from "../components/Form/MilestoneForm"

function Milestone() {
  const [openModal, setOpenModal] = useState(false)
  const openForm = () => setOpenModal(true)
  const closeForm = () => setOpenModal(false)

  const [milestoneRecords, setMilestoneRecords] = useLocalStorage("milestoneRecord", [])

  const updateMilestoneRecord = (newMilestone) => {
    const updateMilestone = [...milestoneRecords, {...newMilestone, id: Date.now()}] 
    setMilestoneRecords(updateMilestone)
    localStorage.setItem("milestoneRecord", JSON.stringify(updateMilestone))

    setTimeout(() => {
      console.log("StatsUpdated event");
      window.dispatchEvent(new Event("statsUpdated"));
    }, 200);
  }


  return (
    <div className="h-full bg-[#F3F4F6] p-4">
      <div className="bg-[#0f1a32] rounded-lg text-white p-1.5 m-2">
        <h3 className="font-semibold text-xl px-2 py-1">Your Milestone Reflections</h3>
        <p className="text-sm my-1 px-2">Pause, look back, and see how far you've come beyond the task and timelines. <br />
        Each reflection captures the lessons, wins, and turning points that define your journey.</p>

        <div className="flex justify-end px-4 items-center -my-2 mb-1">
        <button onClick={openForm}
        className="bg-white text-[#0F172A] px-1.5 py-1 rounded font-semibold hover:cursor-pointer">Note It</button>
        {openModal && (
          <Modal onClose={closeForm}>
            <MilestoneForm onAddMilestone={updateMilestoneRecord} closeForm={closeForm}/>
          </Modal>
        )}
        </div>
      </div>
      <div>
        {milestoneRecords.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 py-4 p-2">
            {milestoneRecords.map((milestoneRecord) => (
              <div key={milestoneRecord.id} className="rounded-lg text-[#0F172A] bg-gray-50 p-4 shadow hover:shadow-[#0F172A] hover:cursor-pointer">
                <p className="font-semibold">Date: <span className="font-normal">{milestoneRecord.date}</span></p>
                <p className="font-semibold">What Clicked: <span className="font-normal">{milestoneRecord.achievement}</span></p>
                <p className="font-semibold">Suprise Moments: <span className="font-normal">{milestoneRecord.supriseMoments}</span></p>
                <p className="font-semibold">Still Struggle: <span className="font-normal">{milestoneRecord.stillStruggle}</span></p>
                <p className="font-semibold">Confidence Level: <span className="font-normal">{milestoneRecord.confidenceLevel}</span></p>


              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-4 italic"> No milestone records yet. Click “Note It” to add one.</p>
        )}
      </div>
    </div>
  )
}

export default Milestone