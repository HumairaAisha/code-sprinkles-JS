import { Line } from "react-chartjs-2"

//import chart from "../../assets/chart.png"
function Chart() {
  const milestoneRecords = JSON.parse(localStorage.getItem("milestoneRecord")) || []
  milestoneRecords.sort((a, b) => Number(a.week) - Number(b.week))

  const labels = milestoneRecords.map(record => (
    `Week ${record.week}`
  ))

  const confidenceData = milestoneRecords.map((record) =>
    (Number(record.confidenceLevel))
  )

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Confidence Level",
        data: confidenceData,
        pointBackgroundColor: "#0F172A",
        backgroundColor:"#0F172A",
        borderColor: "#0F172A",
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      }
    ]
  }

  const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    }
  },
  scales: {
    
    x: {
      ticks: {
        autoSkip: false,
       
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 2,
        
      }
    }
 
}
  }
  return (
    <div>
      <div className="">
         <Line data={data} options={options}/>
      </div>
    </div>
  )
}

export default Chart