import { useState } from "react"
import MyForm from "../components/Form/MyForm"
import Modal from "../components/Form/Modal"
import useLocalStorage from "../components/data/useLocalStorage"


function LearnTrack() {
  const [openModal, setOpenModal] = useState()

  const openForm = () => setOpenModal(true)
  const closeForm = () => setOpenModal(false)

  const [records, setRecords] = useLocalStorage("learnRecords",[])
  const handleNewRecords = (newRecord) => {
    
    const updatedRecords = [...records, {...newRecord, id:Date.now()}];
    setRecords(updatedRecords);
    localStorage.setItem("learnRecords", JSON.stringify(updatedRecords));
    
    setTimeout(() => {
      console.log("StatsUpdated event");
      window.dispatchEvent(new Event("statsUpdated"));
    }, 200);

    
    
  }
  
  /* const handleDelete = (id) => {
      removeRecord(id)
  } */



  return (
    <div className="h-full bg-[#F3F4F6] p-4">
      <div>
        <div className="bg-[#0f1a32] rounded-lg text-white p-1.5 m-2">
          <h3 className="font-semibold text-xl px-2 py-1">Your Learning Footprints</h3>
          <p className="text-sm my-1 px-2">Log learning progress, track hours spent, and see your growth over time, with ideas that shape your journey. <br />
            Every new entry builds a record of your learning story.</p>
          <div className="flex justify-end px-4 items-center -my-2 mb-1">
             <button onClick={openForm}
             className="bg-white text-[#0F172A] px-1.5 py-1 rounded font-semibold hover:cursor-pointer">Note It</button>
             {openModal && (
              <Modal onClose={closeForm}>
                <MyForm onAddRecord={handleNewRecords} closeForm={closeForm}/> 
              </Modal>
             )}
          </div>
       
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
                <th className="border border-[#0F172A] p-2">Description</th>
                <th className="border border-[#0F172A] p-2">Feature Built</th>
                
              </tr>
                 </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id} className="border border-[#0F172A]">
                   <td className="border border-[#0F172A] p-2">{record.date}</td>
                   <td className="border border-[#0F172A] p-2 text-center">{record.hours}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[150px]">{record.topic}</td>
                   <td className="border border-[#0F172A] p-2">{record.category}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[200px]">{record.description}</td>
                   <td className="border border-[#0F172A] p-2 break-words max-w-[200px]">{record.featureBuilt}</td>
                   
                    
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