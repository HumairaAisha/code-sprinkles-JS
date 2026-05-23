import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"

import Modal from "../components/Form/Modal"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import DetailModal from "../components/UI/DetailModal"
import ViewMoreButton from "../components/UI/ViewMoreButton"
import LearnForm from "../components/Form/LearnForm"
import Pagination from "../components/UI/Pagination"
import toast from "react-hot-toast"
import ConfirmModal from "../components/UI/ConfirmModal"

function LearnTrack() {
  
  const [openModal, setOpenModal] = useState()

  const [selectedRecord, setSelectedRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [isEditing, setIsEditing] = useState(null)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [confirmOpen, setconfirmOpen] = useState(false)


  const handleViewMore = (record) => {
  setSelectedRecord(record)
  setOpenDetailModal(true)
}

const closeDetailModal = () => {
  setSelectedRecord(null)
  setOpenDetailModal(false)
}


  const openLearningTrackerForm = () => { 
    setOpenModal(true)
    setIsEditing(null)
  }
  const closeLearningTrackerForm = () => {
    setOpenModal(false)
    setIsEditing(null)
  }
  const openEditLearningForm = (item) => {
    setIsEditing(item)
    setOpenModal(true)
    closeDetailModal()
  }

  const openDeleteConfirmation = (item) => {
    setconfirmOpen(true)
    setItemToDelete(item)
    closeDetailModal()
  }

  const handleCancelDelete = () => {
    setItemToDelete(null)
    setconfirmOpen(false)
  }

   const {learnRecords: records, setLearnRecords: setRecords} = useContext(DashboardStatsContext)
   
   const handleNewRecords = (newRecord) => {
    
   const updatedRecords = [...records, {...newRecord, id:Date.now()}];
    setRecords(updatedRecords);
  }

  const handleEdit = (updatedRecord) => {
    setRecords((learn) => learn.map((item) => (
      item.id === isEditing?.id ? {...updatedRecord, id: item.id} : item)
    )) 
    toast.success("Update Successful")
    closeLearningTrackerForm()
  }

  const handleConfrimDelete = () => {
    setRecords((learn) => learn.filter((item) => item.id !== itemToDelete.id))
    setItemToDelete(null)
    setconfirmOpen(false)
    toast.success("Delete Successful")

  }
  const sortedLearnTracker = [...records].sort((a, b) => new Date(a.date) - new Date(b.date))
  
  const recordsPerPage = 12 
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const paginatedRecords = sortedLearnTracker.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(sortedLearnTracker.length / recordsPerPage)



  return (
    <div className="min-h-screen bg-sandbox-ghost p-4">
      <div>
        <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
          <Heading
        title={"Your Progress Footprints"}
        text={"Log your activity, track hours spent, and see how your progress unfolds over time, with ideas that shape your journey."}
        tagline={"Every new entry builds a record that tells a story."}
         />
           <PrimaryButton label={"Note It"}
           onClick={openLearningTrackerForm}/>
             {openModal && (
              <Modal onClose={closeLearningTrackerForm}>
                <LearnForm key="learning-form"
                onAddRecord={isEditing ? handleEdit : handleNewRecords} closeForm={closeLearningTrackerForm}
                initialData = {isEditing} /> 
              </Modal>
             )}
        </div>
        <div className="mt-6 px-2 py-2 rounded-2xl">
         {paginatedRecords.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-4 py-4 p-2">
            {paginatedRecords.map((record) => (

              <ReusableCard key={record.id}>
                <p className="font-semibold py-0.5">Date: <span className="font-normal">{record.date}</span></p>
                <p className="font-semibold py-0.5">Hours Spent: <span className="font-normal">{record.hours} Hours</span></p>
                <p className="font-semibold py-0.5">Concept Mastered: <span className="font-normal">{record.topic}</span></p>
                <ViewMoreButton onClick={() => handleViewMore(record)}/>

                  
              </ReusableCard>
            ))}
          </div>
         ) : ( <p className="text-center text-gray-600 py-4 italic">
          No progress records yet. Click “Note It” to add one.
          </p>)}
         <Pagination
         currentPage={currentPage}
         totalPages={totalPages}
         onPageChange={setCurrentPage}
         />
        </div>
        
        {openDetailModal && selectedRecord && (
          <DetailModal className="min-w-md"
          data={selectedRecord}
          onClose={closeDetailModal}
          fields={[
          { key: "date", label: "Date" },
          { key: "hours", label: "Hours Spent" },
          {key: "topic", label: "Concept Mastered"},
          { key: "category", label: "Category" },
          { key: "technology", label: "Focus Area" },
          { key: "concept", label: "Concept" },
          { key: "outcome", label: "key outcome" },
          { key: "description", label: "Notes / Description" },
    ]}
    onEdit={() => openEditLearningForm(selectedRecord)}
    onDelete={() => openDeleteConfirmation(selectedRecord)}
          />
        )}
      </div>
      <ConfirmModal
                  isOpen={confirmOpen}
                  title={`Delete "${itemToDelete?.concept}"`}
                  message={`Are you sure you want to delete`}
                  confirmText={"Delete"}
                  cancelText={"Cancel"}
                  type="danger"
                  onConfirm={handleConfrimDelete}
                  onCancel={handleCancelDelete}
        />
     </div>
  )
}

export default LearnTrack