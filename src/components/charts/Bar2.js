import { Bar } from "react-chartjs-2";
import classes from "./Bar.module.css";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//Bar chart 2 for the dashboard using ChartJS

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      position: "bottom",
      align: "center",
      text: "Revenue By Job",
    },
  },
};

const labels = [
  "Service Plumbing",
  "Bid Work HVAC",
  "Service HVAC",
  "Bid Work Plumbing",
  "HWT Replacement",
  "Maintenance",
  "Material Sale",
];

const data = {
  labels: labels,
  datasets: [
    {
      data: [170000, 125000, 80000, 78000, 45000, 20000, 10000],
      backgroundColor: "#47A992",
    },
  ],
};

export default function RevenueByJob() {
  return (
    <div className={classes.chart}>
      <Bar data={data} options={options} width={"510%"} height={"210%"} />
    </div>
  );
}
