import { ArcElement, Chart, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

export { Doughnut as DoughnutChart } from "react-chartjs-2";
