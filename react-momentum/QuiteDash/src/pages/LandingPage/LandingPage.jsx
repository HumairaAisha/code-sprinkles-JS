import HeroSection from "./Components/HeroSection"
import NavBar from "./Components/NavBar"
import Features from "./Components/Features"
import Works from "./Components/Works"
import About from "./Components/About"
import Footer from "./Components/Footer"


function LandingPage() {
  return (
   
      <>
      <NavBar/>
     <HeroSection/>
     <Features/>
    <Works/>
    <About />
    <Footer />
      </>
    
  )
}

export default LandingPage