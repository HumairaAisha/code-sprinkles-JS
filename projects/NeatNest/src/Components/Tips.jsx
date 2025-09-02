import wasteSeparete from "../assets/separetWaste.jpg"
import CompostOrganic from "../assets/compose.jpg"
import keepareaClean from "../assets/keepAreaClean.jpg"
import eWaste2 from "../assets/E-waste2.jpg"
import localAgents from "../assets/useLocalAgents.jpg"
import uncycle from "../assets/creativeUncycling.jpg"


function Tips() {
  return (
   <section name="tips" className="w-full flex flex-col pt-10 justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="flex justify-center text-xl md:text-2xl text-center text-green-800 font-bold">Smart Waste Management Tips</h2>
          <p className="flex justify-center lg:text-lg">Small actions, Big impact</p>
        </div>
        {/* Card Containers */}
        <div className="sm:px-6 lg:px-8 py-8 gap-6 grid sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-4"> 
             <img src={wasteSeparete} alt="separeWaste"  className="w-full rounded-2xl max-w-sm my-5"/>
              <div className="flex flex-col sm:px-6 lg:px-2">
              <h3 className="sm:text-center md:text-start font-bold md:text-xl">Separate Waste</h3>
              <p className="text-green-800">Keep wet and dry waste in different bins to make recycling easier.</p>
            </div>
          </div>

          {/* Card 2  */}
         <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-4 py-2">
             <img src={CompostOrganic} alt="separeWaste"  className="w-full rounded-2xl max-w-sm my-5"/>  
            <div className="flex flex-col sm:px-6 lg:px-2">
              <h3 className="font-bold md:text-xl">Compost Organic Waste</h3>
              <p className="text-green-800 my-4">Turn kitchen scraps like fruit peels, vegetables, and leftover grains into natural compost for gardening.</p>
            </div>
          </div>

          {/* Card 3  */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-4">
             <img src={eWaste2} alt="separeWaste"  className="w-full rounded-2xl max-w-xs my-5"/>  
            <div className="flex flex-col sm:px-6 lg:px-2">
              <h3 className="font-bold md:text-xl">Dispose of E-Waste Properly</h3>
              <p className="text-green-800 my-4">Don’t burn old batteries, or chargers; take them to collection centers or hand them to recycling agents.</p>
            </div>
          </div>

          {/* Card 4  */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-4 pb-4">
             <img src={localAgents} alt="separeWaste"  className="w-full rounded-2xl max-w-xs my-5"/>  
            <div className="flex flex-col sm:px-6 lg:px-2">
              <h3 className="font-bold md:text-xl">Use Local Recycling Agents</h3>
              <p className="text-green-800 my-4">Many communities have collectors who buy plastics, bottles, or scrap metal — keep them aside for them.</p>
            </div>
          </div>

          {/* Card 5  */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-4 pb-4">
             <img src={keepareaClean} alt="separeWaste"  className="w-full rounded-2xl max-w-xs my-5"/>  
            <div className="flex flex-col sm:px-6 lg:px-2">
              <h3 className="font-bold md:text-xl">Keep Your Area Clean</h3>
              <p className="text-green-800 my-4">Always put trash in bins instead of the streets, gutters, or open spaces to avoid flooding and disease.</p>
            </div>
          </div>

          {/* Card 6  */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-4 py-2">
             <img src={uncycle} alt="separeWaste"  className="w-full rounded-2xl max-w-xs my-5"/>  
            <div className="flex flex-col sm:px-6 lg:px-2">
              <h3 className="font-bold md:text-xl">Uncycle Creatively</h3>
              <p className="text-green-800 my-4">Turn containers like paint buckets into storage or plant herbs in plastic bottles. Upcycling reduces waste and adds creativity to your everyday life.</p>
            </div>
          </div>
 
        </div>
   </section>
  )
}

export default Tips