// src/components/ProductivityChart.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const labels = ["Mon 29/10", "Tue 30/10", "Wed 31/10", "Thu 1/11", "Fri 2/11", "Sat 3/11", "Sun 4/11"];

const data = {
  labels,
  datasets: [
    {
      label: "Quantum",
      data: [2, 1.5, 0, 2, 2.5, 2, 3],
      backgroundColor: "#2dd4bf", // teal-400
      barThickness: 12,
    },
    {
      label: "Phoenix",
      data: [1, 1.2, 2, 2.2, 2, 1.5, 1.2],
      backgroundColor: "#a78bfa", // purple-400
      barThickness: 12,
    },
    {
      label: "Artificium",
      data: [3, 2.8, 2.5, 3, 2.2, 2.5, 2],
      backgroundColor: "#38bdf8", // blue-400
      barThickness: 12,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#d1d5db", // gray-300
        boxWidth: 12,
        boxHeight: 12,
      },
    },
    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#fff",
      bodyColor: "#9ca3af",
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        color: "#374151", // gray-700
        drawOnChartArea: true,
      },
      ticks: {
        color: "#9ca3af", // gray-400
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 8,
      ticks: {
        stepSize: 2,
        color: "#9ca3af",
        callback: (val) => `${val} h`,
      },
      grid: {
        color: "#374151",
      },
    },
  },
};

export default function ProductivityChart() {
  return (
    <div style={{ height: "300px", padding: "1rem" }}>
      <Bar data={data} options={options} />
    </div>
  );
}


