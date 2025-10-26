import { useState } from "react"
import MyForm from "../components/Form/MyForm"
import Modal from "../components/Form/Modal"


function LearnTrack() {
  const [openModal, setOpenModal] = useState(false)

  const openForm = () => setOpenModal(true)
  const closeForm = () => setOpenModal(false)

  return (
    <div className="h-screen bg-[#F3F4F6] p-4">
      <div>
        <div className="bg-[#0f1a32] rounded-lg text-white p-2 m-2">
          <h3 className="font-bold text-lg">Your Learning Footprints</h3>
          <p className="text-sm my-1">Log learnning progress, track hours spent, and see your growth over time, with ideas that shape your journey. <br />
            Every new entry builds a record of your learning story.</p>
          <div className="flex justify-end px-4 items-center -my-2 mb-1">
             <button onClick={openForm}
             className="bg-white text-[#0F172A] px-1.5 py-1 rounded font-semibold hover:cursor-pointer">Note It</button>
             {openModal && (
              <Modal onClose={closeForm}>
                <MyForm /> 
              </Modal>
             )}
          </div>
       
        </div>
        <div>
         
         
        </div>
      </div>
     </div>
  )
}

export default LearnTrack