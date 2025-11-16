import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import LearnTrack from "./pages/LearnTrack";
import Milestone from "./pages/Milestone";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Challenges from "./pages/Challenges";
import ProjectHub from "./pages/ProjectHub";

function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/learn"  element={<LearnTrack/>}/>
      <Route path="/milestone"  element={<Milestone/>}/>
      <Route path="/challenge" element={<Challenges/>}/>
      <Route path="/resources"  element={<Resources/>}/>
      <Route path="/projectHub" element={<ProjectHub/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/settings"  element={<Settings/>}/>
      
      </Route>
    </Routes>
    <Toaster position="top-center" reverseOrder={false}
    toastOptions={{
      success: {
        duration:1500,
        style: {
          width: "320px",
          background:"#0F172A",
          color:"#fff",
          padding: "12px 16px"

        }
      },
      error: {
        duration: 2500,
        style: {
          background:"#dc2626",
          color: '#fff',
          width: "300px",
          padding: "12px 16px",
          borderRadius: "10px"
        }
      }
    }}
    />
    </>
  )
}

export default App
