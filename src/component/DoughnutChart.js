import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, ArcElement, Legend, Title } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";

Chart.register(
  ArcElement, Legend, Title, Tooltip
)

const DoughnutChart = () => {

    const [language, setLanguage] = useState([]);

    useEffect(() => {
      axios.get("https://api.github.com/repos/Abdi-kodehode/KodeHode/languages")
        .then((res) => {
          setLanguage(res.data)
          console.log(res.data)
        })
        .catch((e) => console.log(e))
    }, [])
  
    const totalData = language.JavaScript + language.HTML + language.CSS
    
    const percentage = (value, totalValue) => {
      return Math.round((value /totalValue) * 100).toFixed(2)
    }
  
  const data = {
    labels: ['HTML','CSS','JavaScript'],
    datasets: [{
      // label: '% av kode språk i KodeHode repo',
      data: [percentage(language.HTML, totalData), percentage(language.CSS, totalData), percentage(language.JavaScript, totalData)],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'],
        borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)' ],
    }]
  }
  
  const options = {
    legend: {
      labels: {
        fontSize: 20,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        position: "bottom",
        text: '% av kode språk i KodeHode repo',
        color:'#2c3e50',
        font: {
            size:16
        },
        padding:{
            top:30,
            bottom:30
        },
        responsive:true,
        animation:{
            animateScale: true,
        }
      }
    }
  
  }

  return (
    <div>
        <Doughnut data={data} options={options} height="500px" width="500px" />
    </div>
  )
}

export default DoughnutChart