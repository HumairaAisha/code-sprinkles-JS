import { useState } from "react"
import useLocalStorage from "../../../components/data/useLocalStorage"
import PrimaryButton from "../../../components/UI/PrimaryButton"
import BioDataForm from "../forms/BioDataForm"
import ReusableCard from "../../../components/UI/ReusableCard"
import Modal from "../../../components/Form/Modal"

function BioData() {
   const [openBioData, setOpenBioData] = useState(false)
   const openBioDataModal = () => setOpenBioData(true)
   const closeBioDataModal = () => setOpenBioData(false)

   const [addBioData, setAddBioData] = useLocalStorage("bioData", []) 


   const handleAddbioData = (updatedBioData) => {
      const bioDataUpdate = [...addBioData, {...updatedBioData, id:Date.now()}]
      setAddBioData(bioDataUpdate)
   }
  return (
   
    <div>
      <ReusableCard>
         <div className="flex justify-between">
            <p>About Me</p>
            <PrimaryButton onClick={openBioDataModal} 
            label={"Add"}/>
         </div>

         
        {openBioData && (
         <Modal onClose={closeBioDataModal}>
            <BioDataForm onAddBioData={handleAddbioData}/>
         </Modal>
        )}
         <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>
         <div>
            <p className="">I’m a frontend engineer on a continuous learning journey, building projects that reflect my growth in real time. I enjoy turning ideas into interactive experiences while documenting the process, lessons, and challenges along the way.</p>
         </div>

         <div>
         {addBioData.length > 0 && (
           <div>
             {addBioData.map((bioDataRecord) => (
               <div key={bioDataRecord.id}>
                 <div className="flex flex-col justify-between py-1.5">
                   <div className="flex justify-between py-1">
                  <p>Full Name</p>
                  <p>{bioDataRecord.fullName}</p>
                  </div>
                  
                  <div className="flex justify-between py-1">
                     <p>Username</p>
                  <p>{bioDataRecord.userName}</p>
                  </div>
                  <div className="flex justify-between py-1">
                        <p >Stack</p>
                        <p>{bioDataRecord.techStack}</p>
                     </div>
                 </div>
             
                  <div className="flex justify-between">
                     {/* <div className="">
                        <p>Date Joined</p>
                        <p>12, 05, 2022</p>
                     </div> */}
                     
                  </div>
                  <div className="py-1.5">
                  <p>Bio</p>
                  <p>{bioDataRecord.bio}</p>
                  </div>
                  
               
            </div>
            ))}
           </div>
         )}
         </div>
      </ReusableCard>
    </div>
  )
}

export default BioData