import { Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import LearnTrack from "./pages/LearnTrack";
import Milestone from "./pages/Milestone";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/learn"  element={<LearnTrack/>}/>
      <Route path="/milestone"  element={<Milestone/>}/>
      <Route path="/resources"  element={<Resources/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/settings"  element={<Settings/>}/>
      
      </Route>
    </Routes>
    
    </>
  )
}

export default App
