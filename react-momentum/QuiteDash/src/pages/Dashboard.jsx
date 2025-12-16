
//import { useEffect, useState } from "react"
import Card from "../components/Card"
import StatsCard from "../components/StatsCard"
import DashboardHeader from "./DashboardHeader"
//import statData from "../components/data/stats"
import Chart from "../components/data/Chart"
import { useContext } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"


  function Dashboard() {

     const {stats} = useContext(DashboardStatsContext)
 /*  const [stats, setStats] = useState(statData)
  
    useEffect(() => {
      const updatesStatsFromStorage = () => {
        console.log("stats updated event caught");
        
        const learningTrack = JSON.parse(localStorage.getItem("learnRecords"))
        const challenges = JSON.parse(localStorage.getItem("challengeRecords")) || [];
        

        const hoursSpent = learningTrack.reduce((sum, item) => sum + (Number(item.hours) || 0), 0)
        const newConcept = learningTrack.length
        const challengesSolved = challenges.length;
 */
    /*      console.log("Updated values from localStorage:", {
    hoursSpent,
    newConcept,
    challengesSolved,
  });
 */

  /* const storedStats = JSON.parse(localStorage.getItem("dashboardStats")) || statData
  const titlesMatch = storedStats.every((item, index) => item.title === statData[index].title);

if (!storedStats || storedStats.length !== statData.length || !titlesMatch) {
  localStorage.setItem("dashboardStats", JSON.stringify(statData));
  setStats(statData);
} else {
  setStats(storedStats);
}

  const updatedStats = storedStats.map((stat) => {
    if (stat.title === "Hours Spent Coding") return {...stat, value:hoursSpent}
          if (stat.title === "New Concept Learned") return {...stat, value:newConcept}
          if (stat.title === "Challenges Solved") return {...stat, value:challengesSolved}
          return stat
  })
        
          
        localStorage.setItem("dashboardStats", JSON.stringify(updatedStats))
        setStats(updatedStats)
      
      }
      updatesStatsFromStorage();
      
      window.addEventListener("statsUpdated", updatesStatsFromStorage);
      window.addEventListener("storage", updatesStatsFromStorage)
      return () => {
        window.removeEventListener("statsUpdated", updatesStatsFromStorage)
        window.removeEventListener("storage", updatesStatsFromStorage)
      }
    },[]) */

   
  return (
    <div className="px-8 py-6 w-full h-full bg-[#F3F4F6] ">
     
      {/*  <Card /> */}
        <DashboardHeader />
 
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-4 py-4">
         {stats.map((stat) => (
            <div key={stat.id} className="rounded-lg bg-gray-50 shadow hover:shadow-[#0F172A] hover:cursor-pointer">
               <StatsCard id={stat.id} title={stat.title} value={stat.value} notes={stat.notes} auto={stat.auto}/>
            </div>
         ))}
      </div>
    <div className="py-6">
      <Chart/>
    </div>
    </div>
  )
}

export default Dashboard