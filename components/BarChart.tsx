import { Chart, LinearScale, CategoryScale, BarElement } from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement);

// TODO: research if this is the right way or if there is a better way to organize this
export { Bar as BarChart } from "react-chartjs-2";
