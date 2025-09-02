//import { Link } from "react-router-dom";
import{Link} from 'react-scroll'
import heroImg from "../assets/heroImg.jpg"

function Home() {
  return (
    <div name ="home" className="w-full flex justify-center pt-10">
      {/*container*/}
      
      <div className="relative w-full max-w-[1000px] h-[450px]">
         <img src={heroImg} alt="" className="w-full h-full rounded-md object-cover  absolute inset-0" />
         <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <div className="flex flex-col items-center text-center text-white">
               <span className=" text-3xl md:text-4xl font-bold m-2">Keep Our Community Clean</span>
               <span className="text-sm md:text-lg mb-0.5">Learn how to manage waste and recycle responsibly</span>
               <span className="text-xs md:text-sm">Access tips, schedules, and recycling locations easily</span>
               <div className="flex justify-center mt-4">
               <Link to="/tips" smooth="true" duration={300} className="bg-green-800 p-2.5 rounded-md font-semibold cursor-pointer">Get Started</Link>
               </div>
            </div>
         </div>
      </div>
      </div>
   
  )
}

export default Home