import { ArcElement, Chart, Tooltip, Title } from "chart.js";

Chart.register(ArcElement, Tooltip, Title);

export { Doughnut as DoughnutChart } from "react-chartjs-2";
