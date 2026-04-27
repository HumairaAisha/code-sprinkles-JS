import ProfileIdentity from "./components/ProfileIdentity"
import ProfileInformation from "./components/ProfileInformation"

function Profile() {
  return (
    <div className="min-h-screen w-full px-6 py-4">
     <div className="flex justify-end p-4">
       <button className="bg-sandbox-navy text-sandbox-ghost px-2 rounded hover:cursor-pointer">View my Journey</button>
     </div>
      <div className="flex flex-col gap-8">
    
       <ProfileIdentity/>
        <ProfileInformation/>
     
      </div>
    </div>
  )
}

export default Profile