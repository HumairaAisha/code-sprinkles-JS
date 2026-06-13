import HeroSection from "./Components/HeroSection"
import NavBar from "./Components/NavBar"
import Features from "./Components/Features"
import Works from "./Components/Works"
import About from "./Components/About"
import Footer from "./Components/Footer"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function LandingPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      navigate('/dashboard')
    }
  }, [])
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