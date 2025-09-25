
import Card from "../components/Card"
import StatsCard from "../components/StatsCard"
function Dashboard() {

const statsCard = [
   {id: 1, title:"Weeks Completed", value: 1, notes: "Progress across the 16-week roadmap"},
   {id: 2, title:"Hours spent Coding", value: 6, notes: "Increments daily"},
   {id: 3, title:"New Concept Learned", value: 1, notes: "Reflect on weekly learning"},
   {id: 4, title:"Challenges Solved", value: 1, notes: "Exercises, bugs resolved"},
   {id: 5, title:"Blog post written", value: 0, notes: "Increments as blog is published"},
   {id: 6, title:"Confidence Level", value: 0, notes: "Self-reflection metric (1–10 scale)"},

]   
   
  return (
    <div className="p-4 w-full h-screen bg-[#F3F4F6]">
       <Card />
 
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4">
            {statsCard.map((stats) => (
         <div className="w-44 h-36 rounded  bg-gray-50 shadow hover:shadow-[#0F172A] hover:cursor-pointer" key={stats.id}>
            <StatsCard title={stats.title} notes={stats.notes} value={stats.value} 
            
            />
         </div>
         ))}
      </div>
    
    </div>
  )
}

export default Dashboard