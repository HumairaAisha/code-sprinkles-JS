import HeroCard from "../../../components/UI/HeroCard";
import SandboxDashboard from "../../../assets/Screenshot 2026-02-18 214609.png"
import ReusableCard from '../../../components/UI/ReusableCard';
import BadgeLabel from "../../../components/UI/BadgeLabel";



import { useNavigate } from 'react-router-dom';

function HeroSection() {
 const navigate = useNavigate()
  return (
   /*  #141B24 */
      <section id='home' className='sm:py-24 px-6 md:pt-36 bg-sandbox-navy'>
        
       <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <BadgeLabel title={"our purpose"}/>
         <div className="px-4 text-center py-8">
          <h1 className='font-medium text-3xl md:text-3xl lg:text-5xl text-[#F3F4F6] animate-fade-up tracking-tight leading-tight'>
            Make Every Effort Count.
          </h1>
          <h2 className='font-medium text-3xl md:text-3xl lg:text-5xl text-sandbox-ghost animate-fade-up tracking-tight leading-tight'>
             Track Progress.  Build Intentionally.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-gray-500 leading-relaxed">Sandbox is a personal space for developers to track progress, log challenges, and capture milestones — turning effort into visible growth.</p>
          <button  className="bg-sandbox-ghost text-sandbox-navy px-6 py-2 rounded-2xl hover:cursor-pointer my-8" onClick={() => {navigate("/signup")}}>Get Started</button>
        </div>
        
     <div className="relative w-full max-w-5xl py-4">
        <img src={SandboxDashboard} alt="Sandbox personal developer dashboard interface" className="relative rounded-md shadow-xl w-full object-cover"
      />
     </div>
     </div>
     <section className='py-4 md:pt-15 md:px-6'>
      <h2 className='font-semibold text-2xl md:text-4xl my-10 md:my-4 text-sandbox-ghost text-center'>What We Believe</h2>
      <div className="duration-500 hover:scale-[1.05]">

      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-10'>
       <div className='my-4 px-2 transition duration-500 hover:scale-[1.04]'>  
       <HeroCard
       iconName={"ChartNoAxesColumn"}
       title={"Clarity Over Chaos"}
       description={"Development can feel scattered — tutorials, notes, bugs, and experiments everywhere. Sandbox brings everything into one place."}
       />
      </div>

      <div className='my-4 px-2 transition duration-500 hover:scale-[1.04]'>  
       <HeroCard
       iconName={"Lightbulb"}
       title={"Effort Should Be Visible"}
       description={"Effort often disappears over time. Sandbox helps you capture your progress and look back on how far you’ve come."}
       />
      </div>
      <div className='my-4 px-2 transition duration-500 hover:scale-[1.04]'>  
       <HeroCard
       iconName={"Notebook"}
       title={"Growth Is a Journey"}
       description={"Progress is more than a checklist. It’s about capturing what challenged you, what you’ve learned, and how you’ve grown."}
       />
      </div>
      </div>
     </section>
      </section>
     
    
  )
}

export default HeroSection
