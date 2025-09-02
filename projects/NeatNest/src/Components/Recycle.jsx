
function Recycle() {
  return (
    <section name="recycle" className="w-full flex flex-col py-5 justify-center">
      <div className="">
      <h2 className="text-green-800 lg:text-xl font-bold text-center">Find Recycling Spots Near You</h2>
      <p className="text-center">Drop off your waste at the nearest recycling center.</p>
      </div>
      {/* Recycle containers */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-center px-4 gap-5">
         {/* Recycle 1 */}
         <div className=" bg-white shadow-md rounded-2xl p-4 ">
            <h3 className="text-green-800 font-bold">Central Recycling Center</h3>
            <p><b className="text-green-800">Address: </b>123 Green St, Downtown</p>
            <p><b className="text-green-800">Open: </b>Mon-Sat, 8 AM - 6 PM</p>
            <p><b className="text-green-800">Accepted: </b>Plastics, Paper, Glass, Metals</p>
         </div>

          {/* Recycle 2 */}
         <div className=" bg-white shadow-md rounded-2xl p-4">
            <h3 className="text-green-800 font-bold">East Side Drop-off</h3>
            <p><b className="text-green-800">Address: </b>456 Elm Ave, Suburbia</p>
            <p><b className="text-green-800">Open: </b>Mon-Sat, 8 AM - 6 PM</p>
            <p><b className="text-green-800">Accepted: </b>Electronics, Batteries, Organics</p>
         </div>


          {/* Recycle 3 */}
         <div className=" bg-white shadow-md rounded-2xl p-4 ">
            <h3 className="text-green-800 font-bold">West Community Hub</h3>
            <p><b className="text-green-800">Address: </b>789 Oak Rd, Westville</p>
            <p><b className="text-green-800">Open: </b>Mon-Sat, 8 AM - 6 PM</p>
            <p><b className="text-green-800">Accepted: </b>Paper, Cardboard, Textiles</p>
         </div>
          {/* Recycle 4 */}
         <div className=" bg-white shadow-md rounded-2xl p-4 ">
            <h3 className="text-green-800 font-bold">Northside Recycling Hub</h3>
            <p><b className="text-green-800">Address: </b>789 Clean Ave, Northside</p>
            <p><b className="text-green-800">Open: </b>Mon-Sat, 8 AM - 5 PM</p>
            <p><b className="text-green-800">Accepted: </b>Plastics, Metals, Paper, Glass</p>
         </div>
          {/* Recycle 5 */}
         <div className=" bg-white shadow-md rounded-2xl p-4 ">
            <h3 className="text-green-800 font-bold">West Community Hub</h3>
            <p><b className="text-green-800">Address: </b>321 Sustainable Dr, Westside</p>
            <p><b className="text-green-800">Open: </b>Wed-Sun, 10 AM - 4 PM</p>
            <p><b className="text-green-800">Accepted: </b>Plastics, Paper, Cardboard, Metals</p>
         </div>
          {/* Recycle 6 */}
         <div className=" bg-white shadow-md rounded-2xl p-4 ">
            <h3 className="text-green-800 font-bold">Suburban Eco Depot</h3>
            <p><b className="text-green-800">Address: </b>654 Greenway Blvd, Suburbs</p>
            <p><b className="text-green-800">Open: </b>Mon-Wed, 8 AM - 6 PM</p>
            <p><b className="text-green-800">Accepted: </b>Plastics, Paper, Glass, Metals, Cardboard</p>
         </div>


      </div>
    </section>
  )
}

export default Recycle