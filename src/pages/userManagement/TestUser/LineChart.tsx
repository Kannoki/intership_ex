import { Bar } from "react-chartjs-2"

const LineChart = () => {
    const options = {
      responsive: true,
      barThickness: 30
    }
  
    const labels = ["12/06", "13/06", "14/06", "15/06", "16/06", "17/06", "18/06"]
  
    const productASales = [120, 80, 100, 90, 140, 165, 170]
    
    const data = {
      labels,
      datasets: [
        {
          label: "Số lượng người dùng",
          data: productASales,
          borderColor: "#4DC367",
          backgroundColor: "#4DC367",
          borderWidth: 1,
        }
      ],
    }
  
    return <Bar options={options} data={data} style={{ maxHeight: '250px'}}/>
  }
  
  export default LineChart