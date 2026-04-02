
import { Activity, CodeXml, Sparkle, ShieldCheck } from 'lucide-react';

function Features() {
  return (
    <>
   
    <section id="features" className="scroll-m-8">
      <div className="min-h-screen p-6 justify-center bg-sandbox-navy">
      <div className="py-8 max-w-6xl mx-auto w-full">
        <h3 className="font-medium text-2xl md:text-4xl my-2 text-sandbox-ghost">Turn Effort into Evidence</h3>
        <p className='text-sandbox-ghost'> From daily logs to the big picture—every data point tells your story.</p>
      </div>
      <div className="grid sm:grid-rows-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto w-ful py-10">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 rounded-lg bg-sandbox-card shadow-md p-8 hover:shadow-sandbox-ghost transition cursor-pointer
       duration-500 hover:scale-[1.03] flex flex-col items-center text-center">
        <Activity size={52} className="rounded-lg p-2 bg-sandbox-ghost mb-4"/>
        <h3 className="font-semibold text-xl mb-2 text-sandbox-ghost">Progress Tracker</h3>
        <p className="mb-1 text-sandbox-ghost">Log daily momentum, track hours spent, and capture the effort behind every step.</p>
        <p className="italic text-gray-400">Because growth isn’t random — it’s recorded.</p>
       </div>
        

       <div className="rounded-lg bg-sandbox-card shadow-md p-8 hover:shadow-sandbox-ghost transition cursor-pointer
       duration-500 hover:scale-[1.03] flex flex-col items-center text-center">
        <CodeXml size={52} className="rounded-lg p-2 bg-sandbox-ghost mb-4"/>
        <h3 className="font-semibold text-xl mb-2 text-sandbox-ghost">Challenge Journal</h3>
        <p className="mb-1 text-sandbox-ghost">Document the blockers, the bugs, and the breakthroughs.</p>
        <p className="italic text-gray-400">Turn technical frustration into documented expertise.</p>
       </div>

        <div className="rounded-lg bg-sandbox-card shadow-md p-8 hover:shadow-sandbox-ghost transition cursor-pointer
        duration-500 hover:scale-[1.03] flex flex-col items-center text-center">
        <Sparkle size={52} className="rounded-lg p-2 bg-sandbox-ghost mb-4"/>
        <h3 className="font-semibold text-xl mb-2 text-sandbox-ghost">Milestone Reflections</h3>
        <p className="mb-1 text-sandbox-ghost">Evaluate your technical confidence and capture the "aha!" moments.</p>
        <p className="italic text-gray-400">Not just what you built — but how you evolved.</p>
       </div>
       <div className="col-span-1 sm:col-span-2 lg:col-span-2 rounded-lg bg-sandbox-card shadow-md p-8 hover:shadow-sandbox-ghost transition cursor-pointer
        duration-500 hover:scale-[1.03] flex flex-col items-center text-center">
          <ShieldCheck size={52} className="rounded-lg p-2 bg-sandbox-ghost mb-4"/>
        <h3 className="font-semibold text-xl mb-2 text-sandbox-ghost">The Identity Map</h3>
        <p className="mb-1 text-sandbox-ghost">A unified view of your hours spent, challenges solved, and concepts mastered.</p>
        <p className="italic text-gray-400">A visible snapshot of your technical journey.</p>
       </div>
      </div>
     
    </div>
    </section>
    </>
  )
}

export default Features