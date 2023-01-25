import { Chart, LinearScale, CategoryScale, BarElement } from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement);

export { Bar as BarChart } from "react-chartjs-2";
