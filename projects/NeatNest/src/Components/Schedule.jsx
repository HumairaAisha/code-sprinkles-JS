

function Schedule() {
  return (
    <section name="schedule" className='w-full flex flex-col py-8 justify-center'>
      <div className=''>
         <h2 className='text-center text-green-800 lg:text-2xl font-bold'>Waste Collection Schedule</h2>
         <p className='text-center'>Find your area's pickup days below.</p>
      </div>
      {/*  */}
      <div className="overflow-x-auto">
         <table className='min-w-full text-left text-sm'>
           <thead className='border-b border-gray-300 font-medium lg:text-xl'>
             <tr>
               <th className='scope-col px-6 py-4 text-green-800'>Area</th>
               <th className='scope-col px-6 py-4 text-green-800'>Collection Days</th>
               <th className='scope-col px-6 py-4 text-green-800'>Time</th>
               <th className='scope-col px-6 py-4 text-green-800'>Notes</th>
            </tr>
           </thead>
           <tbody>
            <tr className='border-b border-gray-300'>
            <td className='whitespace-nowrap px-6 py-4 font-medium'>Central</td>
            <td className='whitespace-nowrap px-6 py-4'>Mondays and Thursdays</td>
            <td className='whitespace-nowrap px-6 py-4'>7 AM – 12 PM</td>
            <td className='whitespace-nowrap px-6 py-4'>E-Wastes Collection</td>
            </tr>

            {/*  */}
            <tr className='border-b border-gray-300'>
            <td className='whitespace-nowrap px-6 py-4 font-medium'>Downtown</td>
            <td className='whitespace-nowrap px-6 py-4'>Tuesdays and Fridays</td>
            <td className='whitespace-nowrap px-6 py-4'>7 AM – 11 AM</td>
            <td className='whitespace-nowrap px-6 py-4'>Organics collected weekly</td>
            </tr>

            {/*  */}
            <tr className='border-b border-gray-300'>
            <td className='whitespace-nowrap px-6 py-4 font-medium'>EastSide</td>
            <td className='whitespace-nowrap px-6 py-4'>Wednesday</td>
            <td className='whitespace-nowrap px-6 py-4'>7 AM – 3 PM</td>
            <td className='whitespace-nowrap px-6 py-4'>All waste types collected</td>
            </tr>
            {/*  */}
            <tr className='border-b border-gray-300'>
            <td className='whitespace-nowrap px-6 py-4 font-medium'>Suburbs</td>
            <td className='whitespace-nowrap px-6 py-4'>Thursdays and Saturday</td>
            <td className='whitespace-nowrap px-6 py-4'>7 AM – 3 PM</td>
            <td className='whitespace-nowrap px-6 py-4'>All waste types collected</td>
            </tr>
           </tbody>
         </table>
      </div>
    </section>
  )
}

export default Schedule