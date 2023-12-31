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

//Bar Chart 1 for the dashboard using ChartJS

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
      text: "Revenue By Location",
    },
  },
};

const labels = [
  "Everett",
  "Seattle",
  "Lynnwood",
  "Bothell",
  "Mukilteo",
  "Edmonds",
];

const data = {
  labels: labels,
  datasets: [
    {
      data: [75000, 65000, 50000, 45000, 42000, 34000],
      backgroundColor: "#47A992",
    },
  ],
};

export default function RevenueByJobLocation() {
  return (
    <div className={classes.chart}>
      <Bar data={data} options={options} width={"460%"} height={"180%"} />
    </div>
  );
}
