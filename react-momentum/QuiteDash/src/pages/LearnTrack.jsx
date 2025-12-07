import { useState } from "react"
import MyForm from "../components/Form/MyForm"
import Modal from "../components/Form/Modal"
import useLocalStorage from "../components/data/useLocalStorage"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"

import LearnForm from "../components/Form/LearnForm"

function LearnTrack() {
  const [openModal, setOpenModal] = useState()

  const openLearningTrackerForm = () => setOpenModal(true)
  const closeLearningTrackerForm = () => setOpenModal(false)

  const [records, setRecords] = useLocalStorage("learnRecords",[])
  const handleNewRecords = (newRecord) => {
    
    const updatedRecords = [...records, {...newRecord, id:Date.now()}];
    setRecords(updatedRecords);
    localStorage.setItem("learnRecords", JSON.stringify(updatedRecords));
    
    

    
    
  }
  
  /* const handleDelete = (id) => {
      removeRecord(id)
  } */



  return (
    <div className="h-srceen bg-[#F3F4F6] p-4">
      <div>
        <div className="bg-[#0A1A29] rounded-lg text-white p-1.5 m-2">
          <Heading
        title={"Your Learning Footprints"}
        text={"Log learning progress, track hours spent, and see your growth over time, with ideas that shape your journey."}
        tagline={"Every new entry builds a record of your learning story."}
         />
           <PrimaryButton onClick={openLearningTrackerForm}/>
             {openModal && (
              <Modal onClose={closeLearningTrackerForm}>
                <LearnForm key="challenge-form"
                onAddRecord={handleNewRecords} closeForm={closeLearningTrackerForm}/> 
              </Modal>
             )}
        </div>
        
       
        
        
        
        <div className="overflow-x-auto mt-6 px-2 py-2 rounded-2xl">
         {records.length > 0 ? (
          <table className="min-w-full border border-[#0F172A] border-collapse text-[#0F172A]">
            <thead className="bg-[#E2E8F0]  rounded-2xl">
              <tr className="border-b border-[#0F172A]">
                <th className="border border-[#0F172A] p-2">Date</th>
                <th className="border border-[#0F172A] p-2">Hours</th>
                <th className="border border-[#0F172A] p-2">What I Learned</th>
                <th className="border border-[#0F172A] p-2">Category</th>
                <th className="border border-[#0F172A] p-2">Technology</th>
                <th className="border border-[#0F172A] p-2">Concept</th>
                <th className="border border-[#0F172A] p-2">Concept Note</th>
                {/* <th className="border border-[#0F172A] p-2">Feature Built</th> */}
                <th className="border border-[#0F172A] p-2">Action</th>
                
              </tr>
                 </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id} className="border border-[#0F172A]">
                   <td className="border border-[#0F172A] p-2">{record.date}</td>
                   <td className="border border-[#0F172A] p-2 text-center">{record.hours}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[150px]">{record.topic}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[150px]">{record.category}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[200px]">{record.tech}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[200px]">{record.concept}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[200px]">{record.description}</td>
                   
                   {/* <td className="border border-[#0F172A] p-2 break-words max-w-[200px]">{record.featureBuilt}</td> */}
                   <td className="border border-[#0F172A] p-2">
                    <button className="bg-[#0F172A] text-white rounded p-2 hover:cursor-pointer hover:bg-[#F3F4F6] hover:text-[#0F172A]">View</button>
                  </td>
                    
                  </tr>
                  
                ))}
              </tbody>
         
          </table>
         ) : ( <p className="text-center text-gray-600 py-4 italic">
          No learning records yet. Click “Note It” to add one.
          </p>)}
         
        </div>
        
      </div>
     </div>
  )
}

export default LearnTrack