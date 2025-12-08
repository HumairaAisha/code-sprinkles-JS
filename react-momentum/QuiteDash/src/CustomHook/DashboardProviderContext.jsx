import { useState, useEffect } from "react";
import statData from "../components/data/stats";
import { DashboardStatsContext } from "./DashboardStatsContext";

export function DashboardStatsProvider({ children }) {
  const [stats, setStats] = useState(statData);

  const recalculateStats = () => {
    const learnRecords = JSON.parse(localStorage.getItem("learnRecords")) || [];
    const challengeRecords = JSON.parse(localStorage.getItem("challengeRecords")) || [];

    const hoursSpent = learnRecords.reduce((sum, item) => sum + (Number(item.hours) || 0), 0);
    const newConcept = learnRecords.length;
    const challengesSolved = challengeRecords.length;

    const updatedStats = statData.map((stat) => {
      if (stat.title === "Hours Spent Coding") return { ...stat, value: hoursSpent };
      if (stat.title === "New Concept Learned") return { ...stat, value: newConcept };
      if (stat.title === "Challenges Solved") return { ...stat, value: challengesSolved };
      return stat;
    });

    setStats(updatedStats);
    localStorage.setItem("dashboardStats", JSON.stringify(updatedStats));
  };

  useEffect(() => {
    recalculateStats();
  }, []);

  return (
    <DashboardStatsContext.Provider value={{ stats, recalculateStats }}>
      {children}
    </DashboardStatsContext.Provider>
  );
}


