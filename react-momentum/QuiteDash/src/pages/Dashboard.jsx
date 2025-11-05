
import { useEffect, useState } from "react"
import Card from "../components/Card"
import StatsCard from "../components/StatsCard"
import StatsData from "../components/data/stats"
import DashboardHeader from "./DashboardHeader"
import statData from "../components/data/stats"

  function Dashboard() {
  const [stats, setStats] = useState(statData)
  
    useEffect(() => {
      const updatesStatsFromStorage = () => {
        const learningTrack = JSON.parse(localStorage.getItem("learnRecords"))
        const challenges = JSON.parse(localStorage.getItem("challengeRecords")) || [];
        

        const hoursSpent = learningTrack.reduce((sum, item) => sum + (Number(item.hours) || 0), 0)
        const newConcept = learningTrack.length
        const challengesSolved = challenges.length;

        setStats((prev) => prev.map((stat) => {
          if (stat.title === "Hours Spent Coding") return {...stat, value:hoursSpent}
          if (stat.title === "New Concept Learned") return {...stat, value:newConcept}
          if (stat.title === "Challenges Solved") return {...stat, value:challengesSolved}
          return stat
        })
      )
      }
      updatesStatsFromStorage()
      window.addEventListener("statsUpdated", updatesStatsFromStorage);
      return () => window.removeEventListener("statsUpdated", updatesStatsFromStorage)
    },[])

   
  return (
    <div className="px-8 py-6 w-full h-screen bg-[#F3F4F6] ">
     
      {/*  <Card /> */}
        <DashboardHeader />
 
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-y-6 gap-x-4">
         {stats.map((stat) => (
            <div key={stat.id} className=" rounded-lg bg-gray-50 shadow hover:shadow-[#0F172A] hover:cursor-pointer">
               <StatsCard id={stat.id} title={stat.title} value={stat.value} notes={stat.notes} auto={stat.auto}/>
            </div>
         ))}
      </div>
    
    </div>
  )
}

export default Dashboard